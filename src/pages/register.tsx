import { useToast } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeSimpleOpen, Key, Phone, User, } from 'phosphor-react'
import React, { FormEvent, useState } from 'react'

import Logotipo from '../../public/logotipo.svg'
import Input from '../components/Input'
import UseAuth from '../service/hooks/useAuth'

export default function Register() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [state, setState] = useState('')
	const [city, setCity] = useState('')
	const [phone, setPhone] = useState('')
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
		} else if (name !== '' && password !== '' && state !== '' && city !== '' && phone.toString().length === 15) {
			await createUserPassword(name, phone, state, city, email, password)
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
		<div className='w-full h-full text-white'>
			<div className='bg-gradient-to-b from-roxo to-rosa flex flex-col justify-center items-center h-full gap-10'>
				<Image src={Logotipo} alt="Logotipo" width={150} />

				<p className='font-semibold text-xl text-center'>REGISTRE-SE</p>

				<form className='flex flex-col p-2 mt-[-30px]'>
					<div className='flex flex-col gap-2'>
						<div className='flex flex-col gap-5'>
							<Input type="text" value={name} valueChange={setName} icon={<User />} placeholder="Name" />
							<Input type="text" value={email} valueChange={setEmail} icon={<EnvelopeSimpleOpen />} placeholder="Email" />
							<Input type="text" value={state} valueChange={setState} icon={<EnvelopeSimpleOpen />} placeholder="Estado" />
							<Input type="text" value={city} valueChange={setCity} icon={<EnvelopeSimpleOpen />} placeholder="Cidade" />
							<Input type="tel" value={phone} valueChange={setPhone} icon={<Phone />} />
							<Input type="password" value={password} valueChange={setPassword} icon={<Key />} />
						</div>

						<div className='flex underline text-xs lg:text-sm justify-center'>
							<Link href="/login">Já possuo uma conta!</Link>
						</div>
					</div>

					<button onClick={handleCreateSubmit} className='bg-white text-rosa p-2 my-10 text-xl rounded-lg shadow-md lg:hover:opacity-90 transition-opacity'>
						CRIAR
					</button>
				</form>
			</div>
		</div>
	)
}
