import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"

import { auth, db } from '../firebase/config'
import { ProviderProps } from "../core/Provider"
import { User } from "../core/User"

export default class AuthenticationProvider implements ProviderProps {

	private _provider = new GoogleAuthProvider()
	private _user = new User({
		photo: '',
		email: '',
		name: ''
	})

	async loginGoogle(): Promise<User> {
		console.log('login google')
		const login = await signInWithPopup(auth, this._provider)

		return this._user.clone({
			name: login.user.displayName ?? '',
			email: login.user.email ?? '',
			photo: login.user.photoURL ?? ''
		})
	}

	async getUser(): Promise<User | void> {
		onAuthStateChanged(auth, async (user) => {
			console.log(user)

			setTimeout(() => {
				return this._user.clone({
					name: user?.displayName ?? '',
					email: user?.email ?? '',
					photo: user?.photoURL ?? ''
				})
			}, 2000)

		})
	}

	async logout(): Promise<void> {
		console.log('Logout')
		await signOut(auth)
	}
}
