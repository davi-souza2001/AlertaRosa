import { useState } from "react"
import { createContext } from "react"
import { User } from "../../core/User"
import AuthenticationProvider from "../../provider/AuthenticationProvider"

interface AuthContextProps {
	loginGoogle(): Promise<User>
	logout(): Promise<void>
	user: User
}

const AuthContext = createContext<AuthContextProps>({
	loginGoogle: () => Promise.resolve(new User({
		avatar: '',
		email: '',
		name: ''
	})),
	logout: () => Promise.resolve(),
	user: new User({
		avatar: '',
		email: '',
		name: ''
	})
})

export function AuthProvider(props: any) {
	const [user, setUser] = useState<User>(
		new User({
			avatar: '',
			email: '',
			name: ''
		})
	)
	const authentication = new AuthenticationProvider()

	async function loginGoogle() {
		const userReceived = await authentication.loginGoogle()

		setUser(userReceived)

		return userReceived
	}

	async function logout() {
		await authentication.logout()
	}

	return (
		<AuthContext.Provider value={{
			loginGoogle,
			logout,
			user
		}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
