import { ProviderProps } from "../core/Provider"
import { User } from "../core/User"

export default class AuthenticationProvider implements ProviderProps {

	async loginGoogle(): Promise<User> {
		console.log('login google')
		return new User({
			avatar: 'test',
			email: 'test@gmail.com',
			name: 'test'
		})
	}

	async logout(): Promise<void> {
		console.log('Logout')
	}
}
