import { useState } from "react"
import Image from "next/image"
import Router from "next/router"
import { TopBar } from "../../components/TopBar"

import GirlIcon from '../../../public/girlform.svg'
import { Check } from "phosphor-react"
import UseRoom from "../../service/hooks/useRoom"
import UseAuth from "../../service/hooks/useAuth"
import GradientLg from "../../components/GradientLarge"
import BottomSm from "../../components/BottomSmall"
import { textOne, textTwo } from "../../utils/renderTexts"

export default function StartQuestions() {
	const { createRoom } = UseRoom()
	const { user } = UseAuth()
	const [textNumber, setTextNumber] = useState(0)

	function handleCreateRoom() {
		createRoom({
			caterogie: 'test',
			player: user.email,
			answers: []
		})
		Router.push('/questions/all')
	}
	return (
		<div className="bg-background">
			<TopBar />

			<div className="w-full h-screen text-white">
				<GradientLg flex="col" padding_top="pt-20">
					<div className="w-full flex flex-col items-center justify-center text-2xl font-semibold">
						<Image src={GirlIcon} alt='Imagem de mulher com coração' height={180} width={180} />
						<h1 className="mt-5">Bem-vinda ao Formulário!</h1>
					</div>

					<div className="w-full lg:w-[50%] flex flex-col items-center justify-center text-center p-5">
						{textNumber === 0 ? (
							<>
								<p>
									{textOne}
								</p>
								<strong
									onClick={() => setTextNumber(1)}
									className="mt-2 text-xl font-semibold cursor-pointer">
									Ler mais
								</strong>
							</>
						) : (
							<>
								<p>
									{textTwo}
								</p>
								<strong
									onClick={() => setTextNumber(0)}
									className="mt-2 text-xl font-semibold cursor-pointer">
									Voltar
								</strong>
							</>
						)}
					</div>
				</GradientLg>

				<BottomSm items='center' bg="background">
					<div className="w-full h-full flex items-center justify-center">
						<button onClick={() => handleCreateRoom()} className="flex items-center gap-2 bg-rosa text-white py-3 px-6 rounded-lg lg:hover:opacity-100 lg:opacity-95 transition-opacity">
							Começar <Check weight="bold" />
						</button>
					</div>
				</BottomSm>
			</div>
		</div>
	)
}
