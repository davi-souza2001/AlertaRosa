import { TopBar } from "../components/TopBar"
import Image from "next/image"

import GirlIcon from '../../public/girllove.svg'

export default function Home() {
	return (
		<div>
			<TopBar/>
			<div className="h-44 w-full flex items-center justify-center">
				<div className="h-full w-11/12 flex items-center justify-between rounded-lg bg-slate-300">
					<Image src={GirlIcon} alt='Imagem de mulher com coração' height={180} width={180}/>
					<p className="text-left ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias laborum quis harum magnam</p>
				</div>
			</div>
		</div>
	)
}
