import Image from "next/image"
import Router from "next/router"
import { TopBar } from "../../components/TopBar"

import GirlIcon from '../../../public/girl_diary.svg'
import { Check } from "phosphor-react"
import UseRoom from "../../service/hooks/useRoom"
import UseAuth from "../../service/hooks/useAuth"

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
		<div>
			<TopBar />
			<div className="h-full w-full flex flex-col items-center justify-center p-2 gap-3">
				<div className="w-full flex flex-col items-center justify-center text-2xl font-semibold mt-[10vh]">
					<Image src={GirlIcon} alt='Imagem de mulher com coração' height={180} width={180} />
					<h1 className="text-indigo-500 mt-5">Bem-vinda ao Formulário!</h1>
				</div>
				<div className="w-full flex items-center justify-center text-center">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni dolorum harum culpa voluptatum doloribus quis ex libero pariatur ipsam dolore, quod incidunt eius autem id, alias mollitia explicabo magnam.</p>
				</div>
				<div className="w-full flex items-center justify-center">
					<button onClick={() => handleCreateRoom()} className="flex items-center gap-2 bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
						Começar <Check weight="bold" />
					</button>
				</div>
			</div>
		</div>
	)
}
