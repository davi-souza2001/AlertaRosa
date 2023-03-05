import Image from "next/image"
import Router from "next/router"
import { TopBar } from "../../components/TopBar"

import GirlIcon from '../../../public/girlform.svg'
import { Check } from "phosphor-react"
import UseRoom from "../../service/hooks/useRoom"
import UseAuth from "../../service/hooks/useAuth"
import Gradient from "../../components/Gradient"
import Bottom from "../../components/Bottom"

export default function StartQuestions() {
	const { createRoom } = UseRoom()
	const { user } = UseAuth()

	function handleCreateRoom() {
		createRoom({
			caterogie: 'test',
			player: user.email,
			answers: []
		})
		Router.push('/questions/test')
	}
	return (
		<>
			<TopBar />

			<div className="w-full h-screen text-white">
				<Gradient height="80%" flex="col" padding_top="pt-20">
					<div className="w-full flex flex-col items-center justify-center text-2xl font-semibold">
						<Image src={GirlIcon} alt='Imagem de mulher com coração' height={180} width={180} />
						<h1 className="mt-5">Bem-vinda ao Formulário!</h1>
					</div>
					
					<div className="w-full lg:w-[50%] flex items-center justify-center text-center p-5">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni dolorum harum culpa voluptatum doloribus quis ex libero pariatur ipsam dolore, quod incidunt eius autem id, alias mollitia explicabo magnam.</p>
					</div>
				</Gradient>

				<Bottom height="20%" items='center'>
					<div className="w-full h-full flex items-center justify-center mt-10">
						<button onClick={() => handleCreateRoom()} className="flex items-center gap-2 bg-white text-rosa py-3 px-6 rounded-lg lg:hover:opacity-100 lg:opacity-95 transition-opacity">
							Começar <Check weight="bold" />
						</button>
					</div>
				</Bottom>
			</div>
		</>
	)
}
