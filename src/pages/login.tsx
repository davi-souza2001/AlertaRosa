import Image from 'next/image'
import Link from 'next/link'
import { GoogleLogo, User, Key } from 'phosphor-react'
import React, { useState } from 'react'

import Logotipo from '../../public/logotipo.svg'
import BottomSm from '../components/BottomSmall'
import GradientLg from '../components/GradientLarge'
import Input from '../components/Input'
import UseAuth from '../service/hooks/useAuth'

export default function Login() {
	const { loginGoogle, loginPassword } = UseAuth()
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	async function handleLoginSubmit(){
		await loginPassword(name, password)
	}

	return (
		<div className='w-full h-screen text-white'>
			<GradientLg flex='col' gap='10'>
				<Image src={Logotipo} alt="Logotipo" width={150} />

				<p className='font-semibold text-xl text-center'>LOGIN</p>

				<form className='flex flex-col p-2 mt-[-30px]'>
					<div className='flex flex-col gap-2'>
						<div className='flex flex-col gap-10'>
							<Input type="text" value={name} valueChange={setName} icon={<User />} placeholder="Nome" />
							<Input type="password" value={password} valueChange={setPassword} icon={<Key />} placeholder="Senha" />
						</div>

						<div className='flex underline text-xs lg:text-sm justify-between'>
							<Link href="/login">Esqueci minha senha</Link>
							<Link href="/register">Criar conta</Link>
						</div>
					</div>

					<button onClick={handleLoginSubmit} className='bg-white text-rosa p-2 mt-2 text-xl rounded-lg shadow-md lg:hover:opacity-90 transition-opacity'>
						ACESSAR
					</button>
				</form>
			</GradientLg>

			<BottomSm items='center'>
				<button className='flex w-80 lg:hover:opacity-90 transition-opacity' onClick={loginGoogle}>
					<div className='bg-white text-roxo border-2 border-roxo rounded-l-lg text-xl p-2 py-4'>
						<GoogleLogo />
					</div>

					<div className='w-full bg-gradient-to-r from-roxo to-rosa rounded-r-lg p-2 py-4'>
						ACESSAR COM GOOGLE
					</div>
				</button>
			</BottomSm>
		</div>
	)
}


