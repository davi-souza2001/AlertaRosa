import Image from "next/image"
import Router from "next/router"
import { TopBar } from "../../components/TopBar"

import GirlIcon from '../../../public/girlform.svg'
import { Check } from "phosphor-react"
import UseRoom from "../../service/hooks/useRoom"
import UseAuth from "../../service/hooks/useAuth"
import GradientLg from "../../components/GradientLarge"
import BottomSm from "../../components/BottomSmall"

export default function StartQuestions() {
	const { createRoom } = UseRoom()
	const { user } = UseAuth()

	function handleCreateRoom() {
		createRoom({
			caterogie: 'test',
			player: user.email,
			answers: []
		})
		Router.push('/questions/all')
	}
	return (
		<>
			<TopBar />

			<div className="w-full h-screen text-white">
				<GradientLg flex="col" padding_top="pt-20">
					<div className="w-full flex flex-col items-center justify-center text-2xl font-semibold">
						<Image src={GirlIcon} alt='Imagem de mulher com coração' height={180} width={180} />
						<h1 className="mt-5">Bem-vinda ao Formulário!</h1>
					</div>

					<div className="w-full lg:w-[50%] flex items-center justify-center text-center p-5">
						<p>
							Nosso formulário é personalizado com perguntas baseadas no violentômetro para ajudá-la a identificar os diferentes níveis de violência em seu relacionamento. 
							Ao final do questionário, você receberá uma análise dos resultados, podendo identificar em que nível de risco você está. Além disso, você terá a opção de visualizar sua tabela no violentômetro para entender melhor o seu resultado e as possíveis implicações.
						</p>
					</div>
				</GradientLg>

				<BottomSm items='center'>
					<div className="w-full h-full flex items-center justify-center">
						<button onClick={() => handleCreateRoom()} className="flex items-center gap-2 bg-rosa text-white py-3 px-6 rounded-lg lg:hover:opacity-100 lg:opacity-95 transition-opacity">
							Começar <Check weight="bold" />
						</button>
					</div>
				</BottomSm>
			</div>
		</>
	)
}
