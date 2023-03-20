import Image from "next/image"
import Link from "next/link"
import { Eye } from "phosphor-react"

import GirlIcon from '../../public/girlresult.svg'
import BottomLg from "../components/BottomLarge"
import GradientSm from "../components/GradientSmall"
import { TopBar } from "../components/TopBar"

export default function AskedQuestions() {
	return (
		<>
			<TopBar />
			<div className="w-full h-screen text-white">
				<GradientSm padding_top="pt-20">
					<div className='w-full flex items-center justify-center gap-3'>
						<div className='w-[50%] rounded-3xl'>
							<Image src={GirlIcon} alt='Imagem de mulher com resultado' width={200} />
						</div>
						<p className="w-[50%] text-lg font-semibold">Informações!</p>
					</div>
				</GradientSm>

				<BottomLg items='start'>
					<div className="flex flex-col text-white gap-5">
						<div className="flex flex-col ml-5 my-5 gap-5">
							<p className="text-xl font-semibold">O que é a violencia contra mulher?</p>
							<p className="text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni dolorum harum culpa voluptatum doloribus quis ex libero pariatur ipsam dolore, quod incidunt eius autem id, alias mollitia explicabo magnam.</p>
						</div>
						<div className="flex flex-col ml-5 my-5 gap-5">
							<p className="text-xl font-semibold">O que é o alerta rosa?</p>
							<p className="text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni dolorum harum culpa voluptatum doloribus quis ex libero pariatur ipsam dolore, quod incidunt eius autem id, alias mollitia explicabo magnam.</p>
						</div>
						<div className="flex flex-col ml-5 my-5 gap-5">
							<p className="text-xl font-semibold">O que é o violentômetro?</p>
							<p className="text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni dolorum harum culpa voluptatum doloribus quis ex libero pariatur ipsam dolore, quod incidunt eius autem id, alias mollitia explicabo magnam.</p>
						</div>
						<div className="flex flex-col ml-5 my-5 gap-5">
							<p className="text-xl font-semibold">Quer tirar dúvidas?</p>
							<p className="text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni dolorum harum culpa voluptatum doloribus quis ex libero pariatur ipsam dolore, quod incidunt eius autem id, alias mollitia explicabo magnam.</p>
						</div>
						<div className="flex flex-col ml-5 gap-5">

							<Link className="bg-rosa h-10 w-36 flex items-center justify-around p-4 mb-10 rounded-md" href={'https://github.com/davi-souza2001/QuizDev'} target='_blank'>
								Sobre nós <Eye className="text-xl" />
							</Link>
						</div>
					</div>
				</BottomLg>
			</div>
		</>
	)
}
