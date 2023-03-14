import Image from 'next/image'
import Link from 'next/link'
import { Key, Phone, Share, User, } from 'phosphor-react'
import React, { FormEvent, useState } from 'react'
import { HiMailOpen } from 'react-icons/hi'

import Logotipo from '../../public/logotipo.svg'
import BottomSm from '../components/BottomSmall'
import GradientLg from '../components/GradientLarge'
import Input from '../components/Input'
import UseAuth from '../service/hooks/useAuth'

export default function Register() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState(0)
	const [password, setPassword] = useState('')
	const { createUserPassword } = UseAuth()

	async function test(e: FormEvent) {
		e.preventDefault()
		if (name !== '' && password !== '' && phone.toString().length <= 11) {
			await createUserPassword(name, phone, email, password)
		} else {
			alert('Value wrong!')
		}
	}

	return (
		<div className='w-full h-screen text-white'>
			<GradientLg flex='col' gap='10'>
				<Image src={Logotipo} alt="Logotipo" width={150} />

				<p className='font-semibold text-xl text-center'>CADASTRO</p>

				<form className='flex flex-col gap-10'>
					<div className='flex flex-col gap-2'>
						<div className='flex flex-col gap-5'>
							<Input type="text" value={name} valueChange={setName} icon={<User />} placeholder="Nome" />
							<Input type="text" value={email} valueChange={setEmail} icon={<HiMailOpen />} placeholder="Email" />
							<Input type="number" value={phone !== 0 ? phone : null} valueChange={setPhone} icon={<Phone />} placeholder="Telefone" />
							<Input type="password" value={password} valueChange={setPassword} icon={<Key />} placeholder="Senha" />
						</div>
					</div>

					<button
						onClick={(e) => test(e)}
						className='bg-white text-rosa p-2 text-xl rounded-lg shadow-md lg:hover:opacity-90 transition-opacity'
					>
						CADASTRAR
					</button>
				</form>
			</GradientLg>

			<BottomSm items='center'>
				<Link href="/login">
					<div className='flex w-80 mt-20 lg:hover:opacity-90 transition-opacity'>
						<div className='bg-white text-roxo border-2 border-roxo rounded-l-lg text-xl p-2 py-4'>
							<Share />
						</div>

						<div className='w-full text-center bg-gradient-to-r from-roxo to-rosa rounded-r-lg p-2 py-4'>
							JÁ TENHO CONTA
						</div>
					</div>
				</Link>
			</BottomSm>
		</div>
	)
}
