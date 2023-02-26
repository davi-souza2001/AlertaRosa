import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

import GirlIcon from '../../public/girllove.svg'

import { TopBar } from "../components/TopBar"
import { BoxCategorie } from "../components/BoxCategorie"

export default function Home() {
	return (
		<div>
			<TopBar />
			<div className="h-44 w-full flex items-center justify-center">
				<div className="h-full w-11/12 flex items-center justify-between rounded-lg bg-slate-300">
					<Image src={GirlIcon} alt='Imagem de mulher com coração' height={180} width={180} />
					<p className="text-left ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias laborum quis harum magnam</p>
				</div>
			</div>
			<div className='h-20 w-full flex items-center justify-between'>
				<p className="ml-5 font-semibold">Discover</p>
				<p className="mr-5 flex items-center justify-center text-indigo-500">View all <HiArrowNarrowRight/> </p>
			</div>
			<div>
				<BoxCategorie/>
				<BoxCategorie/>
				<BoxCategorie/>
			</div>
		</div>
	)
}
