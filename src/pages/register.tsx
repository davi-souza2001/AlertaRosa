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
		.nonempty('O telefone é obrigatório!')
		.transform(tel => {
			const parts = tel.split('')
				.filter(tel => '0123456789'.includes(tel))
				.filter((_, i) => i < 11)

			return parts.reduce((telefone, num) => {
				const ddd1 = [0].includes(telefone.length) ? '(' : ''
				const ddd2 = [3].includes(telefone.length) ? ') ' : ''
				const traco = [parts.length === 11 ? 10 : 9].includes(telefone.length) ? '-' : ''
				return `${ddd1}${telefone}${ddd2}${traco}${num}`
			}, '')
		}),
	password: z.string()
		.nonempty('A senha é obrigatório!')
		.min(6, 'A senha precisa ter no mínimo 6 caracteres!')
})

type CreateUserFOrmData = z.infer<typeof createUserFormSchema>

export default function Register() {
	const toast = useToast()
	const { createUserPassword } = UseAuth()

	const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFOrmData>({
		resolver: zodResolver(createUserFormSchema)
	})

	async function handleCreateUser(data: any) {
		// await createUserPassword(name, phone, state, city, email, password)
		console.log(data)
	}

	useEffect(() => {
		errors.name?.message && toast({
			position: 'top-right',
			title: 'Algo deu errado!',
			description: errors.name.message,
			status: 'error',
			duration: 3000,
			isClosable: true,
		})

		errors.email?.message && toast({
			position: 'top-right',
			title: 'Algo deu errado!',
			description: errors.email.message,
			status: 'error',
			duration: 3000,
			isClosable: true,
		})

		errors.city?.message && toast({
			position: 'top-right',
			title: 'Algo deu errado!',
			description: errors.city.message,
			status: 'error',
			duration: 3000,
			isClosable: true,
		})

		errors.state?.message && toast({
			position: 'top-right',
			title: 'Algo deu errado!',
			description: errors.state.message,
			status: 'error',
			duration: 3000,
			isClosable: true,
		})

		errors.password?.message && toast({
			position: 'top-right',
			title: 'Algo deu errado!',
			description: errors.password.message,
			status: 'error',
			duration: 3000,
			isClosable: true,
		})
	}, [errors])

	return (
		<div className='flex w-full h-screen'>
			<div className='bg-background text-white hidden lg:flex flex-col items-center justify-center w-1/2 h-full gap-5 scrollbar-thin scrollbar-track-slate-200 scrollbar-track-rounded-lg scrollbar-thumb-roxo scrollbar-thumb-rounded-lg'>
				<Image src={Logotipo} alt="Logotipo" width={150} className='mt-5' />
				<div className='p-10 bg-white bg-opacity-10 rounded-lg'>
					<Image src={girlLogin} alt="girl with heart" width={250} />
				</div>
				<p className='text-center text-xl w-[80%]'>Junte-se à Alerta Rosa na luta contra a violência contra a mulher, cadastre-se agora e faça parte dessa causa!</p>
			</div>
			<div className='w-full bg-gradient-to-b from-roxo to-rosa flex flex-col justify-center items-center lg:w-1/2 gap-5'>

				<p className='font-semibold text-2xl text-center text-white'>REGISTRE-SE</p>

				<form className='flex flex-col p-2' onSubmit={handleSubmit(handleCreateUser)}>
					<div className="flex flex-col gap-1">
						<label htmlFor="name" className='text-white'>Nome</label>
						<input
							className="h-10 border border-zinc-200 shadow-sm rounded text-black"
							type='string'
							{...register('name')}
						/>
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="email" className='text-white'>Email</label>
						<input
							className="h-10 border border-zinc-200 shadow-sm rounded text-black"
							type='string'
							{...register('email')}
						/>
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="state" className='text-white'>Estado</label>
						<input
							className="h-10 border border-zinc-200 shadow-sm rounded text-black"
							type='string'
							{...register('state')}
						/>
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="city" className='text-white'>Cidade</label>
						<input
							className="h-10 border border-zinc-200 shadow-sm rounded text-black"
							type='string'
							{...register('city')}
						/>
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="phone" className='text-white'>Telefone</label>
						<input
							className="h-10 border border-zinc-200 shadow-sm rounded text-black"
							type='string'
							{...register('phone')}
						/>
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="password" className='text-white'>Senha</label>
						<input
							className="h-10 border border-zinc-200 shadow-sm rounded text-black"
							type='password'
							{...register('password')}
						/>
					</div>

					<div className='flex underline text-xs justify-center mt-3 text-white lg:text-sm '>
						<Link href="/login">Já possuo uma conta!</Link>
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
