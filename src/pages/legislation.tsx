import Image from "next/image"

import BottomLg from "../components/BottomLarge"
import GradientSm from "../components/GradientSmall"
import { TopBar } from "../components/TopBar"
import GirlIcon from '../../public/girlDocument.svg'

export default function Legislation() {
	return (
		<div className="bg-background">
			<TopBar />
			<div className="w-full h-screen text-white">
				<GradientSm padding_top="pt-20">
					<div className='w-full flex items-center justify-center gap-3'>
						<Image src={GirlIcon} alt='Imagem de mulher com resultado' width={160} />
					</div>
				</GradientSm>

				<BottomLg items='start' bg="background">
					<div className="flex flex-col gap-5">
						<div className="flex flex-col ml-5 my-5 gap-5">
							<p className="text-xl font-semibold text-roxo">O que é lei Maria da Penha?</p>
							<div className="flex flex-col gap-2 text-lg font-normal">
								<p>A Lei Maria da Penha estabelece medidas protetivas para mulheres que sofrem violência doméstica e familiar, como a possibilidade de afastar o agressor do lar, a proibição de se aproximar da vítima, a suspensão da posse de arma de fogo e a garantia de atendimento prioritário na rede de saúde. A lei também prevê a criação de juizados especializados em violência doméstica e familiar e a implementação de programas de prevenção e educação.</p>
								<p>Além disso, a Lei Maria da Penha prevê penas mais rigorosas para os agressores, que podem ser presos em flagrante ou ter prisão preventiva decretada caso descumpram as medidas protetivas ou cometam novas agressões. A lei também ampliou a definição de violência doméstica e familiar contra a mulher, incluindo não apenas a violência física, mas também a psicológica, sexual, patrimonial e moral.</p>
								<p>A Lei Maria da Penha é considerada uma importante conquista na luta pelos direitos das mulheres e pela prevenção e combate à violência de gênero. A lei é uma referência para outras legislações em todo o mundo e tem sido fundamental para conscientizar a sociedade sobre o problema da violência contra a mulher e garantir a proteção e a segurança das vítimas.</p>
							</div>
							<p className="text-xl font-semibold text-roxo">Viôlencia doméstica e domiciliar</p>
							<div className="flex flex-col gap-2 text-lg font-normal">
								<p>A violência doméstica e familiar tratada neste documento encontra-se definida na Lei nº 11.340/2006 – Lei Maria da Penha –, que estabelece (...) a violência doméstica e familiar contra a mulher [como] qualquer ação ou omissão baseada no gênero que lhe cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial: I - no âmbito da unidade doméstica, compreendida como o espaço de convívio permanente de pessoas, com ou sem vínculo familiar, inclusive as esporadicamente agregadas; II - no âmbito da família, compreendida como a comunidade formada por indivíduos que são ou se consideram aparentados, unidos por laços naturais, por afinidade ou por vontade expressa; III - em qualquer relação íntima de afeto, na qual o agressor conviva ou tenha convivido com a ofendida, independentemente de coabitação. (artigo 5º)</p>
								<p className="text-xl font-semibold text-roxo">A agressão contra a mulher pode assumir as seguintes formas:</p>
								<p>a) Física, entendida como qualquer conduta que ofenda sua integridade física ou saúde corporal (empurrar, bater, atirar objetos, sacudir, esbofetear, estrangular, chutar, envenenar, ferir com qualquer tipo de arma), condutas estas caracterizadoras dos crimes de homicídio, aborto, induzimento ao suicídio, lesão corporal.</p>
								<p>b) Psicológica ou Emocional, entendida como qualquer conduta que lhe cause dano emocional e diminuição da auto-estima. A violência psicológica consiste em um comportamento (não-físico) específico por parte do agressor, num dado momento ou situação. Muitas vezes, o tratamento desumano, tal como rejeição, intimidação, depreciação, xingamento, indiferença, discriminação, desrespeito e isolamento de amigos e parentes, deixa marcas visíveis na mulher, levando-a a graves estados psicológicos e emocionais, muitas vezes estados que se tornam irrecuperáveis.</p>
								<p>c)  Sexual, entendida como qualquer conduta que  constranja  presenciar,  manter ou  participar de relação sexual não desejada, mediante intimidação, ameaça, coação ou uso da força. Fazer chantagem, pegar à força, humilhar uma pessoa e ter com ela relação sexual é conduta reconhecida por lei como agressão punível (crime contra a liberdade sexual), ainda que haja casamento, união estável ou namoro. </p>
								<p>d)  Patrimonial, entendida como qualquer conduta que configure retenção, subtração, destruição parcial ou total de bens pertencentes à ofendida, ou quando por medo, coagida ou induzida  a erro, a mulher transfere bens ao agressor ou ainda, quando o agressor retém ou tira o dinheiro da vítima ou esconde seus objetos pessoais.</p>
								<p>e)  Moral, entendida como qualquer conduta que atinja a honra e a imagem das mulheres, em forma de calúnia (acusando-a falsamente de ter cometido crime), difamação (relatando fatos ofensiva à sua pessoa) ou injúria (ofendendo-a diretamente).</p>
							</div>
						</div>
					</div>
				</BottomLg>
			</div>
		</div>
	)
}
