import Image from 'next/image'
import Link from 'next/link'
import { Key, Phone, Share, User } from 'phosphor-react'
import React from 'react'

import Logotipo from '../../public/logotipo.svg'
import BottomSm from '../components/BottomSmall'
import GradientLg from '../components/GradientLarge'
import Input from '../components/Input'

export default function Register() {
	return (
		<div className='w-full h-screen text-white'>
			<GradientLg flex='col' gap='10'>
				<Image src={Logotipo} alt="Logotipo" width={150} />

				<p className='font-semibold text-xl text-center'>CADASTRO</p>

				<form action="" className='flex flex-col gap-10'>
					<div className='flex flex-col gap-2'>
						<div className='flex flex-col gap-5'>
							<Input type="text" icon={<User />} placeholder="Nome" />
							<Input type="number" icon={<Phone />} placeholder="Telefone" />
							<Input type="password" icon={<Key />} placeholder="Senha" />
						</div>
					</div>

					<button className='bg-white text-rosa p-2 text-xl rounded-lg shadow-md lg:hover:opacity-90 transition-opacity'>
						CADASTRAR
					</button>
				</form>
			</GradientLg>

			<BottomSm items='center'>
				<Link href="/login">
					<div className='flex w-80 lg:hover:opacity-90 transition-opacity'>
						<div className='bg-white text-roxo border-2 border-roxo rounded-l-lg text-xl p-2 py-4'>
							<Share/>
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
