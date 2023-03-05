import Image from "next/image"
import Router from "next/router"
import { Eye } from "phosphor-react"

import { TopBar } from "../../components/TopBar"
import GirlIcon from '../../../public/girlresult.svg'
import Gradient from "../../components/Gradient"
import Bottom from "../../components/Bottom"

export default function Result() {
	return (
		<>
			<TopBar />
			<div className="w-full h-screen text-white">
				<Gradient height="30%" padding_top="pt-20">
					<div className="w-full flex flex-col items-center justify-center text-2xl font-semibold p-2 lg:p-6">
						<Image src={GirlIcon} alt='Imagem de mulher com coração' width={200} />
						<h1 className="mt-5">Seu resultado!</h1>
					</div>
				</Gradient>

				<Bottom height="70%" items='center'>
					<div className="flex flex-col text-white gap-5">
						<div className="flex flex-col ml-5 my-5 gap-5">
							<p className="text-xl font-semibold">O que fazer?</p>
							<p className="text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni dolorum harum culpa voluptatum doloribus quis ex libero pariatur ipsam dolore, quod incidunt eius autem id, alias mollitia explicabo magnam.</p>
						</div>

						<div className="flex flex-col ml-5 gap-5">
							<p className="text-lg font-semibold">Deseja visualizar seu violentômetro?</p>

							<button onClick={() => Router.push('/violence_table')} className="flex w-40 items-center gap-2 bg-white text-rosa py-3 px-6 rounded-lg lg:hover:opacity-100 lg:opacity-95 transition-opacity shadow-md">
								Visualizar <Eye className="text-xl" />
							</button>
						</div>
					</div>
				</Bottom>
			</div>
		</>
	)
}
