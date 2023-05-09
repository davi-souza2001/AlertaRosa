import Image from "next/image"
import Router, { useRouter } from "next/router"
import { Eye } from "phosphor-react"

import { TopBar } from "../../components/TopBar"
import GirlIcon from '../../../public/girlresult.svg'
import GradientSm from "../../components/GradientSmall"
import BottomLg from "../../components/BottomLarge"

export default function Result() {
	const router = useRouter()
	const result = router.query.result
	return (
		<>
			<TopBar />
			<div className="w-full h-screen text-white">
				<GradientSm padding_top="pt-20">
					<div className='w-full flex items-center justify-center gap-3'>
						<div className='w-[50%] rounded-3xl'>
							<Image src={GirlIcon} alt='Imagem de mulher com resultado' width={200} />
						</div>
						<p className="w-[50%] text-lg font-semibold">Seu resultado!</p>
					</div>
				</GradientSm>

				<BottomLg items='start'>
					<div className="flex flex-col text-roxo gap-5">
						<div className="flex flex-col ml-5 my-5 gap-5">
							<p className="text-xl font-semibold">O que fazer?</p>
							<p className="text-lg font-normal">Deu {result}</p>
						</div>

						<div className="flex flex-col ml-5 gap-5">
							<p className="text-lg font-semibold">Deseja visualizar seu violentômetro?</p>

							<button onClick={() => Router.push('/violence_table')} className="flex w-40 items-center gap-2 bg-rosa text-white py-3 px-6 rounded-lg lg:hover:opacity-100 lg:opacity-95 transition-opacity shadow-md">
								Visualizar <Eye className="text-xl" />
							</button>
						</div>
					</div>
				</BottomLg>
			</div>
		</>
	)
}
