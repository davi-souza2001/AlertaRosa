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
							<div className="flex flex-col gap-2 text-lg font-normal">
								<p>A Lei Maria da Penha estabelece medidas protetivas para mulheres que sofrem violência doméstica e familiar, como a possibilidade de afastar o agressor do lar, a proibição de se aproximar da vítima, a suspensão da posse de arma de fogo e a garantia de atendimento prioritário na rede de saúde. A lei também prevê a criação de juizados especializados em violência doméstica e familiar e a implementação de programas de prevenção e educação.</p>
								<p>Além disso, a Lei Maria da Penha prevê penas mais rigorosas para os agressores, que podem ser presos em flagrante ou ter prisão preventiva decretada caso descumpram as medidas protetivas ou cometam novas agressões. A lei também ampliou a definição de violência doméstica e familiar contra a mulher, incluindo não apenas a violência física, mas também a psicológica, sexual, patrimonial e moral.</p>
								<p>A Lei Maria da Penha é considerada uma importante conquista na luta pelos direitos das mulheres e pela prevenção e combate à violência de gênero. A lei é uma referência para outras legislações em todo o mundo e tem sido fundamental para conscientizar a sociedade sobre o problema da violência contra a mulher e garantir a proteção e a segurança das vítimas.</p>
							</div>
						</div>
					</div>
				</BottomLg>
			</div>
		</>
	)
}
