import Router from "next/router"
import { useEffect, useState } from "react"
import { createContext } from "react"
import Cookie from 'js-cookie'

import { User } from "../../core/User"
import { AuthenticationProvider } from "../../provider/AuthenticationProvider"
import { ProviderUser } from "../../core/ProviderUser"

interface AuthContextProps {
	loginGoogle(): Promise<void>
	loginPassword(email: string, password: string): Promise<void>
	createUserPassword(name: string, email: string, password: string): Promise<void>
	logout(): Promise<void>
	getUser(user: User): Promise<User | false>
	submitUser(user: User): Promise<void>
	user: User
	loading: boolean
	setLoading: any
}

const AuthContext = createContext<AuthContextProps>({
	loginGoogle: () => Promise.resolve(),
	loginPassword: () => Promise.resolve(),
	createUserPassword: () => Promise.resolve(),
	logout: () => Promise.resolve(),
	getUser: (user: User) => Promise.resolve(user),
	submitUser: () => Promise.resolve(),
	user: new User({
		email: '',
		name: ''
	}),
	loading: false,
	setLoading: {}
})

export function AuthProvider(props: any) {
	const [loading, setLoading] = useState(true)
	const [user, setUser] = useState<User>(new User({ email: '', name: '' }))
	const authentication = new ProviderUser(new AuthenticationProvider())
	const userCookie = Cookie.get('Admin-QuizDev')

	async function loginGoogle() {
		setLoading(true)
		const loggedUser = await authentication.loginGoogle()
		const searchedUser = await getUser(loggedUser)

		if (searchedUser) {
			AuthenticationProvider.setCookieUser(searchedUser)
			setLoading(false)
			Router.push('/')
		} else {
			submitUser(loggedUser)
			AuthenticationProvider.setCookieUser(loggedUser)
			setLoading(false)
			Router.push('/')
		}
	}

	async function loginPassword(email: string, password: string) {
		setLoading(true)
		try {
			const loggedUser = await authentication.loginPassword(email, password)
			const searchedUser = await getUser(loggedUser)

			if (searchedUser) {
				AuthenticationProvider.setCookieUser(searchedUser)
				setLoading(false)
				Router.push('/')
			}

		} catch (error: any) {
			console.log('error.message')
			console.log(error.message)
		}
		setLoading(false)
	}

	async function createUserPassword(name: string, email: string, password: string) {
		setLoading(true)
		const user = new User({
			email,
			name
		})

		try {
			await authentication.createUserPassword(email, password)
			await authentication.submitUser(user)
			const loggedUser = await authentication.loginPassword(email, password)
			const searchedUser = await getUser(loggedUser)

			if (searchedUser) {
				AuthenticationProvider.setCookieUser(searchedUser)
				setLoading(false)
				Router.push('/')
			}

		} catch (error: any) {
			console.log('error.message')
			console.log(error.message)
		}

		setLoading(false)
	}

	async function getUser(user: User) {
		setLoading(true)

		const userReceived = await authentication.getUser(user)

		setLoading(false)

		return userReceived ? userReceived : false
	}

	async function submitUser(user: User) {
		setLoading(true)

		await authentication.submitUser(user)

		setLoading(false)
	}

	async function logout() {
		setLoading(true)

		await authentication.logout()

		setLoading(false)
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
			loginPassword,
			createUserPassword,
			logout,
			getUser,
			submitUser,
			user,
			loading,
			setLoading
		}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
