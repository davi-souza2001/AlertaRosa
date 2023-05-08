import { useToast } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeSimpleOpen, Key, MapPin, Phone, User, } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"

import Logotipo from '../../public/logotipo.svg'
import girlLogin from '../../public/girlRegister.svg'
import Input from '../components/Input'
import UseAuth from '../service/hooks/useAuth'
import { BrazilStates } from '../components/BrazilStates'

const createUserFormSchema = z.object({
	name: z.string()
		.nonempty('O nome é obrigatório!')
		.transform(name => {
			return name.trim().split(' ').map(word => {
				return word[0].toLocaleUpperCase().concat(word.substring(1))
			}).join(' ')
		}),
	email: z.string()
		.nonempty('O e-mail é obrigatório!')
		.email('Formato de e-mail inválido!')
		.toLowerCase(),
	state: z.string()
		.nonempty('O estado é obrigatório!'),
	city: z.string()
		.nonempty('A cidade é obrigatória!'),
	phone: z.string()
		.nonempty('O telefone é obrigatório!'),
	password: z.string()
		.nonempty('A senha é obrigatório!')
		.min(6, 'A senha precisa ter no mínimo 6 caracteres!')
})

type CreateUserFOrmData = z.infer<typeof createUserFormSchema>

export default function Register() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [state, setState] = useState('')
	const [city, setCity] = useState('')
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
	const toast = useToast()
	const { createUserPassword } = UseAuth()

	const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFOrmData>({
		resolver: zodResolver(createUserFormSchema)
	})

	async function handleCreateSubmit() {
		await createUserPassword(name, phone, state, city, email, password)
	}

	useEffect(() => {
		errors.name?.message && toast({
			position: 'top-right',
			title: 'Algo deu errado!',
			description: 'Digite um nome válido!',
			status: 'error',
			duration: 3000,
			isClosable: true,
		})

		errors.email?.message && toast({
			position: 'top-right',
			title: 'Algo deu errado!',
			description: 'Digite um email válido!',
			status: 'error',
			duration: 3000,
			isClosable: true,
		})

		errors.city?.message && toast({
			position: 'top-right',
			title: 'Algo deu errado!',
			description: 'Digite uma cidade válida!',
			status: 'error',
			duration: 3000,
			isClosable: true,
		})

		errors.state?.message && toast({
			position: 'top-right',
			title: 'Algo deu errado!',
			description: 'Digite um estado válido!',
			status: 'error',
			duration: 3000,
			isClosable: true,
		})

		errors.password?.message && toast({
			position: 'top-right',
			title: 'Algo deu errado!',
			description: 'Digite umm senha válida!',
			status: 'error',
			duration: 3000,
			isClosable: true,
		})
	}, [errors])

	return (
		<div className='flex w-full h-screen'>
			<div className='bg-background text-white hidden lg:flex flex-col items-center justify-center w-[50%] h-full gap-5'>
				<div className='p-10 bg-white bg-opacity-10 rounded-lg'>
					<Image src={girlLogin} alt="girl with heart" width={400} />
				</div>
				<p className='text-center text-2xl w-[80%]'>Junte-se à Alerta Rosa na luta contra a violência contra a mulher, cadastre-se agora e faça parte dessa causa!</p>
			</div>
			<div className='bg-gradient-to-b from-roxo to-rosa text-white flex flex-col justify-center items-center w-full lg:w-[50%] h-full gap-5'>
				<Image src={Logotipo} alt="Logotipo" width={150} />

				<p className='font-semibold text-xl text-center'>REGISTRE-SE</p>

				<form onSubmit={handleSubmit(handleCreateSubmit)}
					className='flex flex-col p-2'>
					<div className='flex flex-col gap-2'>
						<div className='flex flex-col gap-5'>
							<Input type="text" value={name} valueChange={setName} icon={<User />} placeholder="Nome" {...register('name')} />
							<Input type="text" value={email} valueChange={setEmail} icon={<EnvelopeSimpleOpen />} placeholder="Email" {...register('email')} />
							{/* Alterar umas coisas nesse carinha aqui em baixo */}
							<BrazilStates /* value={state} valueChange={setState} */ /* {...register('state')} */ />
							<Input type="text" value={city} valueChange={setCity} icon={<MapPin />} placeholder="Cidade" {...register('city')} />
							<Input type="tel" value={phone} valueChange={setPhone} icon={<Phone />} {...register('phone')} />
							<Input type="password" value={password} valueChange={setPassword} icon={<Key />} {...register('password')} />
						</div>

						<div className='flex underline text-xs lg:text-sm justify-center'>
							<Link href="/login">Já possuo uma conta!</Link>
						</div>
					</div>

					<button type='submit'
						className='bg-white text-rosa p-2 my-10 text-xl rounded-lg shadow-md lg:hover:opacity-90 transition-opacity'>
						CRIAR
					</button>
				</form>
			</div>
		</div>
	)
}
