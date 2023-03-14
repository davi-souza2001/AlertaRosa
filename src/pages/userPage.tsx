import Image from "next/image";
import GradientSm from "../components/GradientSmall";

import avatar from '../../public/female_avatar.svg'
import { EnvelopeSimple, Phone, Power } from "phosphor-react";
import { TopBar } from "../components/TopBar";
import BottomLg from "../components/BottomLarge";
import InfoContent from "../components/InfoContent";
import Router from "next/router";
import UseAuth from "../service/hooks/useAuth";

export default function userPage() {
	const { user } = UseAuth()

	return (
		<>
			<TopBar />

			<div className="w-full h-screen text-white">
				<GradientSm padding_top="pt-20" start>
					<div className="flex gap-6 justify-center items-center ml-5">
						<Image src={avatar} width={100} alt="avatar" />
						<div className="flex flex-col justify-start text-xl">
							<p>{user.name !== '' ? user.name : 'Nome de usuário'}</p>
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
					<p className="text-2xl font-semibold mt-8 ml-5">Informações:</p>

					<InfoContent />
					<InfoContent />
					<InfoContent />
					<InfoContent />

					<button onClick={() => Router.push('/login')} className="w-28 ml-5 flex items-center justify-center gap-2 bg-white text-rosa my-10 py-3 px-6 rounded-lg lg:hover:opacity-100 lg:opacity-95 transition-opacity">
						Sair <Power weight="bold" />
					</button>
				</BottomLg>
			</div>
		</>
	)
}
