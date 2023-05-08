import Image from "next/image";
import { useToast } from "@chakra-ui/react";
import GradientSm from "../components/GradientSmall";

import avatar from '../../public/female_avatar.svg'
import { EnvelopeSimple, PencilSimple, Phone, Power, User as UserIcon, XCircle } from "phosphor-react";
import { TopBar } from "../components/TopBar";
import BottomLg from "../components/BottomLarge";
import Router from "next/router";
import UseAuth from "../service/hooks/useAuth";
import { FormEvent, useEffect, useState } from "react";
import { User } from "../core/User";

export default function userPage() {
	const { user, setUser, updateUser, logout } = UseAuth()
	const toast = useToast()
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [editMode, setEditMode] = useState(false)

	async function handleCreateSubmit(e: FormEvent) {
		e.preventDefault()
		if (name.length !== 0 || phone.toString().length <= 11) {
			const newUser = new User({
				email: user.email,
				name: name ?? user.name,
				phone: phone ?? user.phone
			})
			await updateUser(newUser)
			setUser(newUser)
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

	useEffect(() => {
		setName(user.name)
		setPhone(user.phone ?? '')
	}, [user])

	return (
		<>
			<TopBar />

			<div className="w-full h-screen text-white">
				<GradientSm padding_top="pt-20" start>
					<div className="flex gap-6 justify-center items-center ml-5">
						<Image src={avatar} width={100} alt="avatar" />
						<div className="flex flex-col justify-start">
							<div className="flex w=full items-center justify-between text-xl">
								<p>{user.name !== '' ? user.name : 'Nome de usuário'}</p>
								{editMode ? (
									<XCircle className="w-9 h-9 p-2 text-xl cursor-pointer bg-white text-roxo rounded-full" onClick={() => setEditMode(state => !state)} />
								) : (
									<PencilSimple className="w-9 h-9 p-2 text-xl cursor-pointer bg-white text-roxo rounded-full" weight="bold" onClick={() => setEditMode(state => !state)} />
								)}
							</div>
							<div className="flex items-center text-sm gap-2">
								<Phone className="text-xl" weight="bold" />
								<p>{user.phone ?? 'DDD número'}</p>
							</div>
							<div className="flex items-center text-sm gap-2">
								<EnvelopeSimple className="text-xl" weight="bold" />
								<p>{user.email !== '' ? user.email : 'email@email.com'}</p>
							</div>
						</div>
					</div>
				</GradientSm>

				<BottomLg flex="col" justify="justify-start" padding_top="10">
					{editMode && (
						<div className='flex w-96 flex-col gap-10 mt-5 p-4'>
							{/* <Input type="text" value={name} valueChange={setName} icon={<UserIcon />} placeholder="Name" />
							<Input type="tel" value={phone === '' ? null : phone} valueChange={setPhone} icon={<Phone />} placeholder="Telefone" /> */}
							<button onClick={handleCreateSubmit} className='flex items-center justify-center gap-2 w-32 bg-white text-rosa p-2 text-xl rounded-lg shadow-md lg:hover:opacity-90 transition-opacity'>
								EDITAR <PencilSimple weight="bold" />
							</button>
						</div>
					)}
					<button onClick={logout} className="w-28 ml-5 flex justify-center items-center gap-2 bg-white text-rosa my-10 py-3 px-6 rounded-lg lg:hover:opacity-100 lg:opacity-95 transition-opacity">
						Sair <Power weight="bold" />
					</button>
				</BottomLg>
			</div>
		</>
	)
}
