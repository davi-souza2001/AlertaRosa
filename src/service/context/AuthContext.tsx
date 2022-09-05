import { useEffect, useState } from "react"
import { createContext } from "react"

import { User } from "../../core/User"
import AuthenticationProvider from "../../provider/AuthenticationProvider"

interface AuthContextProps {
	loginGoogle(): Promise<void>
	logout(): Promise<void>
	getUser(): Promise<void>
	submitUser(user: User): Promise<void>
	user: User
	loading: boolean
}

const AuthContext = createContext<AuthContextProps>({
	loginGoogle: () => Promise.resolve(),
	logout: () => Promise.resolve(),
	getUser: () => Promise.resolve(),
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

	async function loginGoogle() {
		setLoading(true)
		try {
			const userReceived = await authentication.loginGoogle()
			submitUser(userReceived)
			if (userReceived) {
				setUser(userReceived)
				setLoading(false)
			}

		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	async function getUser() {
		setLoading(true)
		const userReceived = await authentication.getUser()

		if (userReceived) {
			setUser(userReceived)
		}
		setLoading(false)
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
		getUser()
	}, [])

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
