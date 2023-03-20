import Image from "next/image"

import BottomLg from "../components/BottomLarge"
import GradientSm from "../components/GradientSmall"
import { TopBar } from "../components/TopBar"
import GirlIcon from '../../public/girlDocument.svg'

export default function Legislation(){
	return (
		<>
			<TopBar />
			<div className="w-full h-screen text-white">
				<GradientSm padding_top="pt-20">
					<div className='w-full flex items-center justify-center gap-3'>
						<Image src={GirlIcon} alt='Imagem de mulher com resultado' width={160} />
					</div>
				</GradientSm>

				<BottomLg items='start'>
					<div className="flex flex-col text-white gap-5">
						<div className="flex flex-col ml-5 my-5 gap-5">
							<p className="text-xl font-semibold">O que é lei Maria da Penha?</p>
							<p className="text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni dolorum harum culpa voluptatum doloribus quis ex libero pariatur ipsam dolore, quod incidunt eius autem id, alias mollitia explicabo magnam.</p>
						</div>
					</div>
				</BottomLg>
			</div>
		</>
	)
}
