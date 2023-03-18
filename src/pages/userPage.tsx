import Image from "next/image";
import GradientSm from "../components/GradientSmall";

import avatar from '../../public/female_avatar.svg'
import { EnvelopeSimple, Pencil, Phone, Power, User, XCircle } from "phosphor-react";
import { TopBar } from "../components/TopBar";
import BottomLg from "../components/BottomLarge";
import InfoContent from "../components/InfoContent";
import Router from "next/router";
import UseAuth from "../service/hooks/useAuth";
import { useState } from "react";
import Input from "../components/Input";
import { HiMailOpen } from "react-icons/hi";

export default function userPage() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState(0)
	const [editMode, setEditMode] = useState(false)
	const { user } = UseAuth()

	return (
		<>
			<TopBar />

			<div className="w-full h-screen text-white">
				<GradientSm padding_top="pt-20" start>
					<div className="flex gap-6 justify-center items-center ml-5">
						<Image src={avatar} width={100} alt="avatar" />
						<div className="flex flex-col justify-start">
							<div className="flex items-center  text-xl gap-2">
								<p>{user.name !== '' ? user.name : 'Nome de usuário'}</p>
								{editMode ? (
									<XCircle className="text-xl cursor-pointer" onClick={() => setEditMode(state => !state)} />
								) : (
									<Pencil className="text-xl cursor-pointer" weight="bold" onClick={() => setEditMode(state => !state)} />
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
					{editMode ? (
						<div className='flex items-center justify-center flex-col gap-10 mt-5 p-4'>
							<Input type="text" value={name} valueChange={setName} icon={<User />} placeholder="Name" />
							<Input type="text" value={email} valueChange={setEmail} icon={<HiMailOpen />} placeholder="Email" />
							<Input type="number" value={phone === 0 ? null : phone} valueChange={setPhone} icon={<Phone />} placeholder="Telefone" />
							<button className='w-32 bg-white text-rosa p-2 mt-2 text-xl rounded-lg shadow-md lg:hover:opacity-90 transition-opacity'>
								EDITAR
							</button>
						</div>
					) : (
						<>
							<p className="text-2xl font-semibold mt-8 ml-5">Informações:</p>

							<InfoContent name="MPPE" contact="(81) 99232.3667" local="Av. Visconde de Suassuna, 99, Salas B-04/05, Santo Amaro – Recife. CEP: 50050-540" />
							<InfoContent name="Vara de Violência Doméstica e Familiar Contra Mulher de Camaragibe" contact="(81) 3181 9299 / (81) 3181 9300 / vmulher.camaragibe@tjpe.jus.br" local="Av. Visconde de Suassuna, 99, Salas B-04/05, Santo Amaro – Recife. CEP: 50050-540" />
							<InfoContent name="Central de Atendimento à Mulher" contact="Disque 180" />
							<InfoContent name="Polícia Militar" contact="Disque 190" />
							<InfoContent name="Ouvidoria da Mulher do Estado de Pernambuco" local="Avenida Cais do Apolo, nº 222, 3º andar, Centro, Recife. Horário de atendimento: das 8h às 18h, dias úteis" contact="0800 2818187" />
							<InfoContent name="1ª Delegacia de Polícia Especializada da Mulher" local="Rua do Pombal, Praça do Campo. Santo Amaro. Recife." contact="(81) 3184.3352" />
							<InfoContent name="2ª Delegacia de Polícia Especializada da Mulher" local="Estrada da Batalha, s/n°. Prazeres. Jaboatão dos Guararapes." contact="(81) 3184.3444/3445" />
							<InfoContent name="3ª Delegacia de Polícia Especializada da Mulher" local="Rua Castro Alves, nº 57. Centro. Petrolina." contact="(87) 3866.6625" />
							<InfoContent name="4ª Delegacia de Polícia Especializada da Mulher" local="Rua Dalton Santos, nº 115. São Francisco. Caruaru." contact="(81) 3719.9106" />
							<InfoContent name="5ª Delegacia de Polícia Especializada da Mulher" local="Praça Frederico Ludgren, s/n°. Paulista" contact="(81) 3184.7072" />
							<InfoContent name="9ª Delegacia de Polícia Especializada da Mulher" local="Rua Frei Caneca, nº 460. Heliópolis. Garanhuns" contact="(81) 3761.8507" />
							<InfoContent name="Instituto Médico Legal" local="Rua do Pombal, nº 455. Santo Amaro. Recife." contact="(81) 3222.5814" />

							<button onClick={() => Router.push('/login')} className="w-24 ml-5 flex items-center gap-2 bg-white text-rosa my-10 py-3 px-6 rounded-lg lg:hover:opacity-100 lg:opacity-95 transition-opacity">
								Sair <Power weight="bold" />
							</button>
						</>
					)}
				</BottomLg>
			</div>
		</>
	)
}
