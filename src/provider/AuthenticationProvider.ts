import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import Router from 'next/router'
import Cookie from 'js-cookie'

import { auth, db } from '../firebase/config'
import { ProviderUserProps } from '../core/ProviderUser'
import { User } from '../core/User'

export class AuthenticationProvider implements ProviderUserProps {

	private _provider = new GoogleAuthProvider()
	private _user = new User({
		photo: '',
		email: '',
		name: '',
		xp: 0
	})

	async loginGoogle(): Promise<User> {
		console.log('login google')
		const login = await signInWithPopup(auth, this._provider)

		return this._user.clone({
			name: login.user.displayName ?? '',
			email: login.user.email ?? '',
			photo: login.user.photoURL ?? '',
			xp: 0
		})
	}

	async getUser(user: User): Promise<User | false> {
		const searchedUser = query(collection(db, 'users'), where('email', '==', user.email))

		const resolveQuery = await getDocs(searchedUser)

		return resolveQuery.empty ? false : user
	}

	async submitUser(user: User): Promise<void> {
		await setDoc(doc(db, 'users', user.email), {
			name: user.name,
			email: user.email,
			photo: user.photo,
			xp: user.xp
		})
	}

	async logout(): Promise<void> {
		await signOut(auth)
		Cookie.remove('Admin-QuizDev')
		Router.push('/login')
	}

	static setCookieUser(user: User) {
		Cookie.set('Admin-QuizDev', user.email, { expires: 7 })
	}
}
