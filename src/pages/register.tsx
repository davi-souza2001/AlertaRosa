import { useToast } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeSimpleOpen, LockSimple, MapPin, Phone, User, } from 'phosphor-react'
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
		await createUserPassword(data.name, data.phone, data.state, data.city, data.email, data.password)
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
		<div className='flex w-full h-screen bg-rosa'>
			<div className='bg-background text-white hidden lg:flex flex-col items-center justify-center w-1/2 h-full gap-5 scrollbar-thin scrollbar-track-slate-200 scrollbar-track-rounded-lg scrollbar-thumb-roxo scrollbar-thumb-rounded-lg'>
				<div className='p-10 bg-white bg-opacity-10 rounded-lg'>
					<Image src={girlLogin} alt="girl with heart" width={250} />
				</div>
				<p className='text-center text-xl w-[80%]'>Junte-se à Alerta Rosa na luta contra a violência contra a mulher, cadastre-se agora e faça parte dessa causa!</p>
			</div>
			<div className='w-full lg:w-1/2 h-[90%] lg:h-full flex flex-col bg-gradient-to-b from-roxo to-rosa justify-center items-center gap-5 text-roxo shadow-lg rounded-b-lg'>
				<Image src={Logotipo} alt="Logotipo" width={150} className='hidden lg:flex' />
				<Image src={Logotipo} alt="Logotipo" width={100} className='flex lg:hidden' />

				<p className='text-2xl text-center'>REGISTRE-SE</p>

				<form className='flex flex-col gap-3' onSubmit={handleSubmit(handleCreateUser)}>
					<div className='flex flex-col lg:flex-row gap-2 lg:gap-10 items-center'>
						<div className='flex flex-col items-center gap-2'>
							<div className='flex items-center bg-white pl-2 rounded-md gap-2 border border-roxo'>
								<User className='text-roxo' />
								<input
									className="h-10 border border-zinc-200 shadow-sm rounded text-black pl-2 focus:outline-none"
									type='string'
									{...register('name')}
									placeholder='Nome'
								/>
							</div>

							<div className='flex items-center bg-white pl-2 rounded-md gap-2 border border-roxo'>
								<EnvelopeSimpleOpen className='text-roxo' />
								<input
									className="h-10 border border-zinc-200 shadow-sm rounded text-black pl-2 focus:outline-none"
									type='string'
									{...register('email')}
									placeholder='Email'
								/>
							</div>

							<div className='flex items-center bg-white pl-2 rounded-md gap-2 border border-roxo'>
								<LockSimple className='text-roxo' />
								<input
									className="h-10 border border-zinc-200 shadow-sm rounded text-black pl-2 focus:outline-none"
									type='password'
									{...register('password')}
									placeholder='Senha'
								/>
							</div>
						</div>

						<div className='flex flex-col items-center gap-2'>
							<div className='flex items-center bg-white pl-2 rounded-md gap-2 border border-roxo'>
								<MapPin className='text-roxo' />
								<input
									className="h-10 border border-zinc-200 shadow-sm rounded text-black pl-2 focus:outline-none"
									type='string'
									{...register('state')}
									placeholder='Estado'
								/>
							</div>

							<div className='flex items-center bg-white pl-2 rounded-md gap-2 border border-roxo'>
								<MapPin className='text-roxo' />
								<input
									className="h-10 border border-zinc-200 shadow-sm rounded text-black pl-2 focus:outline-none"
									type='string'
									{...register('city')}
									placeholder='Cidade'
								/>
							</div>

							<div className='flex items-center bg-white pl-2 rounded-md gap-2 border border-roxo'>
								<Phone className='text-roxo' />
								<input
									className="h-10 border border-zinc-200 shadow-sm rounded text-black pl-2 focus:outline-none"
									type='string'
									{...register('phone')}
									placeholder='Número celular'
								/>
							</div>
						</div>
					</div>

					<div className='flex flex-col items-center justify-center gap-2'>
						<div className='flex underline text-xs justify-center lg:text-sm '>
							<Link href="/login">Já possuo uma conta!</Link>
						</div>

						<button type='submit'
							className='bg-rosa text-white text-xl w-28 h-10 rounded-lg shadow-md lg:hover:opacity-90 transition-opacity'>
							CRIAR
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
