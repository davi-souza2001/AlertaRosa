import Image from "next/image"
import Link from "next/link"
import Router from "next/router"
import { Eye } from "phosphor-react"

import GirlIcon from '../../public/girlresult.svg'
import BottomLg from "../components/BottomLarge"
import { BoxCategorie } from "../components/BoxCategorie"
import GradientSm from "../components/GradientSmall"
import { TopBar } from "../components/TopBar"

export default function AllQuiz() {
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
						<p className="text-xl font-semibold mt-5 p-3">Aqui estão todos os formulários que você pode responder: </p>
						<div className="flex flex-col items-center justify-center ml-5 my-5 gap-5 lg:grid lg:grid-cols-4">
							<BoxCategorie />
							<BoxCategorie />
							<BoxCategorie />
							<BoxCategorie />
							<BoxCategorie />
							<BoxCategorie />
							<BoxCategorie />
							<BoxCategorie />
							<BoxCategorie />
						</div>
					</div>
				</BottomLg>
			</div>
		</>
	)
}
