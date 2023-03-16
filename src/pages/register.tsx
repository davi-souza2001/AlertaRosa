import { useToast } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Key, Phone, User, } from 'phosphor-react'
import React, { FormEvent, useState } from 'react'
import { HiMailOpen } from 'react-icons/hi'

import Logotipo from '../../public/logotipo.svg'
import GradientLg from '../components/GradientLarge'
import Input from '../components/Input'
import UseAuth from '../service/hooks/useAuth'

export default function Register() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState(0)
	const [password, setPassword] = useState('')
	const toast = useToast()
	const { createUserPassword } = UseAuth()

	async function handleCreateSubmit(e: FormEvent) {
		e.preventDefault()
		if (!email.includes('@')) {
			toast({
				position: 'top-right',
				title: 'Algo deu errado!',
				description: 'Digite um email válido!',
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
		} else if (name !== '' && password !== '' && phone.toString().length <= 11) {
			await createUserPassword(name, phone, email, password)
		} else {
			toast({
				position: 'top-right',
				title: 'Algo deu errado!',
				description: 'Verifique suas informações e tente novamente!',
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
		}
	}

	return (
		<div className='w-full h-screen text-white'>
			<GradientLg flex='col' gap='10'>
				<Image src={Logotipo} alt="Logotipo" width={150} />

				<p className='font-semibold text-xl text-center'>REGISTRE-SE</p>

				<form className='flex flex-col p-2 mt-[-30px]'>
					<div className='flex flex-col gap-2'>
						<div className='flex flex-col gap-10'>
							<Input type="text" value={name} valueChange={setName} icon={<User />} placeholder="Name" />
							<Input type="text" value={email} valueChange={setEmail} icon={<HiMailOpen />} placeholder="Email" />
							<Input type="number" value={phone === 0 ? null : phone} valueChange={setPhone} icon={<Phone />} placeholder="Telefone" />
							<Input type="password" value={password} valueChange={setPassword} icon={<Key />} placeholder="Senha" />
						</div>

						<div className='flex underline text-xs lg:text-sm justify-between'>
							<Link href="/login">Esqueci minha senha</Link>
							<Link href="/register">Criar conta</Link>
						</div>
					</div>

					<button onClick={handleCreateSubmit} className='bg-white text-rosa p-2 mt-2 text-xl rounded-lg shadow-md lg:hover:opacity-90 transition-opacity'>
						CRIAR
					</button>
				</form>
			</GradientLg>
		</div>
	)
}
