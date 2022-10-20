import Router from "next/router"
import { useEffect, useState } from "react"
import { createContext } from "react"
import Cookie from 'js-cookie'

import { User } from "../../core/User"
import { AuthenticationProvider } from "../../provider/AuthenticationProvider"
import { ProviderUser } from "../../core/ProviderUser"

interface AuthContextProps {
	loginGoogle(): Promise<void>
	logout(): Promise<void>
	getUser(user: User): Promise<User | false>
	submitUser(user: User): Promise<void>
	getRankingUsers(): Promise<User[]>
	user: User
	loading: boolean
	setLoading: any
}

const AuthContext = createContext<AuthContextProps>({
	loginGoogle: () => Promise.resolve(),
	logout: () => Promise.resolve(),
	getUser: (user: User) => Promise.resolve(user),
	submitUser: () => Promise.resolve(),
	getRankingUsers: () => Promise.resolve([
		new User({
			email: '',
			name: '',
			photo: '',
			xp: 0
		})
	]),
	user: new User({
		photo: '',
		email: '',
		name: '',
		xp: 0
	}),
	loading: false,
	setLoading: {}
})

export function AuthProvider(props: any) {
	const [loading, setLoading] = useState(false)
	const [user, setUser] = useState<User>(new User({ photo: '', email: '', name: '', xp: 0 }))
	const authentication = new ProviderUser(new AuthenticationProvider())
	const userCookie = Cookie.get('Admin-QuizDev')

	async function loginGoogle() {
		setLoading(true)
		const loggedUser = await authentication.loginGoogle()
		const searchedUser = await getUser(loggedUser)

		if (searchedUser) {
			AuthenticationProvider.setCookieUser(searchedUser)
			Router.push('/')
		} else {
			submitUser(loggedUser)
			AuthenticationProvider.setCookieUser(loggedUser)
			Router.push('/')
		}
	}

	async function getUser(user: User) {
		setLoading(true)
		const userReceived = await authentication.getUser(user)

		return userReceived ? userReceived : false
	}

	async function submitUser(user: User) {
		setLoading(true)

		await authentication.submitUser(user)

		setLoading(false)
	}

	async function logout() {
		await authentication.logout()
	}

	async function getRankingUsers(): Promise<User[]> {
		const ranking = await authentication.getRankingUsers()

		return ranking
	}

	useEffect(() => {
		setLoading(true)

		if (userCookie) {
			authentication.getUserLogged(userCookie).then((user) => {
				setUser(user)
			})
		} else {
			Router.push('/login')
		}

		setLoading(false)
	}, [userCookie])

	return (
		<AuthContext.Provider value={{
			loginGoogle,
			logout,
			getUser,
			submitUser,
			getRankingUsers,
			user,
			loading,
			setLoading
		}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
