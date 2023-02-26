import Image from 'next/image'
import Router from 'next/router'
import React from 'react'

import GoogleIcon from '../../public/logoGoogle.png'
import UseAuth from '../service/hooks/useAuth'

export default function Login() {
	const { loginGoogle } = UseAuth()

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<div className="flex flex-col w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
				<h1 className="text-2xl font-bold text-gray-800 mb-4">Login</h1>
				<form>
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email</label>
						<input type="email" name="email" id="email" className="w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200" required />
					</div>
					<div className="mb-6">
						<label htmlFor="password" className="block text-gray-800 font-semibold mb-2">Password</label>
						<input type="password" name="password" id="password" className="w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200" required />
					</div>
					<div className='h-10'>
						<a href="#" className="text-gray-600 cursor-pointer hover:text-gray-500" onClick={() => Router.push('/register')}>Create Account</a>
					</div>
					<div className="flex items-center justify-between">
						<button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400">Login</button>
						<a href="#" className="text-gray-600 hover:text-gray-500">Forgot Password?</a>
					</div>
					<div className="my-6 h-12 w-3/4 flex items-center justify-center rounded-lg font-medium cursor-pointer bg-slate-200">
						<Image src={GoogleIcon} alt='Icone do google' height={30} width={30} />
						<button className='ml-5' onClick={loginGoogle}>Login com google</button>
					</div>
				</form>
			</div>
		</div>
	)
}


