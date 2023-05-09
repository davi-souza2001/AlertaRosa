import Image from "next/image"
import Link from "next/link"
import { Eye } from "phosphor-react"

import GirlIcon from '../../public/girlQuestion.svg'
import BottomLg from "../components/BottomLarge"
import GradientSm from "../components/GradientSmall"
import { TopBar } from "../components/TopBar"

export default function AskedQuestions() {
	return (
		<div className="bg-background">
			<TopBar />
			<div className="w-full h-screen text-white">
				<GradientSm padding_top="pt-20">
					<div className='w-full flex items-center justify-center gap-3'>
						<Image src={GirlIcon} alt='Imagem de mulher com dúvida' width={160} />
					</div>
				</GradientSm>

				<BottomLg items='start'>
					<div className="flex flex-col gap-5 bg-background">
						<div className="flex flex-col ml-5 my-5 gap-5">
							<p className="text-xl font-semibold text-roxo">O que é a violência contra mulher?</p>
							<p className="text-lg font-normal">A violência contra a mulher é qualquer ação ou conduta, baseada no gênero feminino, que cause morte, dano físico, sexual ou psicológico, tanto na esfera pública como na privada.</p>
						</div>
						<div className="flex flex-col ml-5 my-5 gap-5">
							<p className="text-xl font-semibold text-roxo">O que é o Alerta Rosa?</p>
							<p className="text-lg font-normal">Alerta Rosa, é uma plataforma de conscientização e prevenção da violência contra a mulher. Através de recursos educativos e informações, a plataforma busca aumentar a conscientização sobre o problema e fornecer recursos para ajudar as mulheres a se protegerem e a buscar ajuda em caso de violência.</p>
						</div>
						<div className="flex flex-col ml-5 my-5 gap-5">
							<p className="text-xl font-semibold text-roxo">O que é o violentômetro?</p>
							<p className="text-lg font-normal">O violentômetro é uma ferramenta que ajuda a identificar diferentes níveis de violência em um relacionamento, desde comportamentos abusivos até violência física e sexual. Ele é usado para ajudar as vítimas de violência a identificarem situações de risco e tomarem medidas para se protegerem, além de ser uma ferramenta importante para conscientização e prevenção da violência contra a mulher.</p>
						</div>
						<div className="flex flex-col ml-5 my-5 gap-5">
							<p className="text-xl font-semibold text-roxo">Quer tirar dúvidas?</p>
							<p className="text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni dolorum harum culpa voluptatum doloribus quis ex libero pariatur ipsam dolore, quod incidunt eius autem id, alias mollitia explicabo magnam.</p>
						</div>
						<div className="flex flex-col ml-5 gap-5">

							<Link className="w-44 ml-5 flex justify-center items-center gap-2 bg-rosa text-white my-10 py-3 px-6 rounded-lg lg:hover:opacity-100 lg:opacity-95 transition-opacity" href={'https://github.com/davi-souza2001/QuizDev'} target='_blank'>
								Sobre nós <Eye className="text-xl" />
							</Link>
						</div>
					</div>
				</BottomLg>
			</div>
		</div>
	)
}
