import Image from 'next/image'
import Router from 'next/router'
import { EnvelopeSimple, Key, User } from 'phosphor-react'
import React from 'react'

import Logotipo from '../../public/logotipo.png'
import Input from '../components/Input'

export default function Register() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-indigo-500">
			<div className="flex flex-col md:w-full w-[90%] max-w-md p-8 bg-white rounded-lg shadow-lg">
				<div className='flex items-center gap-3 mb-4'>
					<Image src={Logotipo} alt='Logotipo' height={30} width={30} />
					<div className='flex flex-col justify-start'>
						<p className='text-xs'>ALERTA ROSA</p>
						<h1 className="text-2xl font-bold text-gray-800">Cadastro</h1>
					</div>
				</div>
				<form>
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email</label>
						<Input type="email" icon={<EnvelopeSimple/>} />
					</div>
					<div className="mb-4">
						<label htmlFor="text" className="block text-gray-800 font-semibold mb-2">Nome</label>
						<Input type="text" icon={<User/>} />
					</div>
					<div className="mb-6">
						<label htmlFor="password" className="block text-gray-800 font-semibold mb-2">Senha</label>
						<Input type="password" icon={<Key/>} />
					</div>
					<div className="flex items-center justify-between">
						<button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition-colors">Cadastrar</button>
						<a href="#" className="text-gray-600 cursor-pointer hover:text-gray-500 underline transition-colors" onClick={() => Router.push('/login')}>Entrar na conta</a>
					</div>
				</form>
			</div>
		</div>
	)
}