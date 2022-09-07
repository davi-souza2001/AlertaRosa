import Router from "next/router"
import { useEffect, useState } from "react"
import { createContext } from "react"
import Cookie from 'js-cookie'
import { collection, getDocs, query, where } from "firebase/firestore"

import { User } from "../../core/User"
import { db } from "../../firebase/config"
import { AuthenticationProvider } from "../../provider/AuthenticationProvider"

interface AuthContextProps {
	loginGoogle(): Promise<void>
	logout(): Promise<void>
	getUser(user: User): Promise<User | false>
	submitUser(user: User): Promise<void>
	user: User
	loading: boolean
}

const AuthContext = createContext<AuthContextProps>({
	loginGoogle: () => Promise.resolve(),
	logout: () => Promise.resolve(),
	getUser: (user: User) => Promise.resolve(user),
	submitUser: (user: User) => Promise.resolve(),
	user: new User({
		photo: '',
		email: '',
		name: ''
	}),
	loading: false
})

export function AuthProvider(props: any) {
	const [loading, setLoading] = useState(false)
	const [user, setUser] = useState<User>(new User({ photo: '', email: '', name: '' }))
	const authentication = new AuthenticationProvider()
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

	useEffect(() => {
		setLoading(true)

		if (userCookie) {
			const searchedUser = query(collection(db, 'users'), where('email', '==', userCookie))
			const resolveQuery = getDocs(searchedUser)

			resolveQuery.then((list) => {
				list.forEach((doc) => {
					setUser(new User({
						name: doc.data().name,
						email: doc.data().email,
						photo: doc.data().photo
					}))
				})
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
			user,
			loading
		}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
