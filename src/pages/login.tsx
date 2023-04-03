import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeSimpleOpen, Key } from 'phosphor-react'
import { useToast } from '@chakra-ui/react'

import Logotipo from '../../public/logotipo.svg'
import Input from '../components/Input'
import UseAuth from '../service/hooks/useAuth'

export default function Login() {
	const { loginPassword } = UseAuth()
	const toast = useToast()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function handleLoginSubmit() {
		if (email === '' || password === '') {
			toast({
				position: 'top-right',
				title: 'Algo deu errado!',
				description: 'Preencha todos os dados corretamente!',
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
		} else {
			await loginPassword(email, password)
		}
	}

	return (
		<div className='w-full h-screen text-white'>
			<div className='bg-gradient-to-b from-roxo to-rosa flex flex-col justify-center items-center h-full gap-5'>				
				<Image src={Logotipo} alt="Logotipo" width={150} />

				<p className='font-semibold text-xl text-center'>LOGIN</p>

				<form className='flex flex-col p-2'>
					<div className='flex flex-col gap-2'>
						<div className='flex flex-col gap-10'>
							<Input type="text" value={email} valueChange={setEmail} icon={<EnvelopeSimpleOpen />} placeholder="Email" />
							<Input type="password" value={password} valueChange={setPassword} icon={<Key />} placeholder="Senha" />
						</div>

						<div className='flex underline text-xs lg:text-sm justify-between'>
							<Link href="/login">Esqueci minha senha</Link>
							<Link href="/register">Criar conta</Link>
						</div>
					</div>

					<button onClick={handleLoginSubmit} className='bg-white text-rosa p-2 mt-10 text-xl rounded-lg shadow-md lg:hover:opacity-90 transition-opacity'>
						ACESSAR
					</button>
				</form>
			</div>
		</div>
	)
}


