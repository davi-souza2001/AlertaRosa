import Image from "next/image"
import Router from "next/router"
import { Check } from "phosphor-react"

import { TopBar } from "../../components/TopBar"
import GirlIcon from '../../../public/girl_diary.svg'

export default function Result() {
	return (
		<div>
			<TopBar />
			<div className="h-full w-full flex flex-col items-center justify-center  gap-3">
				<div className="w-full flex flex-col items-center justify-center text-2xl font-semibold bg-gradient-to-t bg-[#9461E8] from-[#DD61E8]">
					<Image src={GirlIcon} alt='Imagem de mulher com coração' height={180} width={180} />
					<h1 className="text-indigo-500 mt-5 pb-5">Seu resultado!</h1>
				</div>
				<div className="text-white">
					<p className="ml-5 mb-5 text-2xl font-semibold">O que fazer?</p>
					<p className="ml-5 mb-10 text-xl font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni dolorum harum culpa voluptatum doloribus quis ex libero pariatur ipsam dolore, quod incidunt eius autem id, alias mollitia explicabo magnam.</p>
					<p className="ml-5 mb-5 text-xl font-normal">Deseja visualizar seu violentômetro?</p>
					<div className="ml-5">
						<button onClick={() => Router.push('/questions/test')} className="flex items-center gap-2 bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
							Verificar <Check weight="bold" />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
