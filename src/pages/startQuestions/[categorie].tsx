import Image from "next/image"
import Router from "next/router"
import { TopBar } from "../../components/TopBar"

import GirlIcon from '../../../public/girl_diary.svg'
import { Check } from "phosphor-react"

export default function StartQuestions() {
	return (
		<div className="bg-indigo-500 md:h-screen">
			<TopBar/>
			<div className="flex  w-full h-[90%] items-center justify-center md:p-5">
				<div className="w-full md:w-[60%] h-full md:h-[60%] pt-[10vh] md:pt-0 md:p-5 md:rounded-lg bg-white flex flex-col items-center justify-center p-2 gap-3">
					<div className="w-full flex flex-col items-center justify-center text-2xl font-semibold">
						<Image src={GirlIcon} alt='Imagem de mulher vendo formulário' height={180} width={180} />
						<h1 className="text-indigo-500 mt-5">Bem-vinda ao Formulário!</h1>
					</div>
					<div className="w-full flex items-center justify-center text-center">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni dolorum harum culpa voluptatum doloribus quis ex libero pariatur ipsam dolore, quod incidunt eius autem id, alias mollitia explicabo magnam.</p>
					</div>
					<div className="w-full flex items-center justify-center">
						<button onClick={() => Router.push('/questions/test')} className="flex items-center gap-2 bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-blue-400 transition-colors duration-300">Começar <Check weight="bold"/></button>
					</div>
				</div>
			</div>
		</div>
	)
}
