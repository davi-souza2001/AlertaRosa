import Router from "next/router";
import { ArrowBendUpLeft } from "phosphor-react";
import TableSquare from "../components/TableSquare";
import { TopBar } from "../components/TopBar";
import UseAuth from "../service/hooks/useAuth";

const alerta_amarelo = [
	'Chantagear',
	'Mentir e enganar',
	'Ignorar',
	'Ciúmes excessivos',
	'Ofender e humilhar',
	'Intimidar e ameaçar',
	'Proibir e controlar',
]

const alerta_laranja = [
	'Destruir bens pessoais',
	'Machucar e agredir',
	'Empurrar',
	'Golpear',
	'Chutar',
]

const alerta_vermelho = [
	'Confinar e prender',
	'Ameaçar com armas',
	'Ameçar de morte',
	'Abusar sexualmente',
	'Espancar e mutilar',
	'Matar - Feminicídio',
]

export default function Violence_Table() {
	const { user } = UseAuth()

	return (
		<div className="bg-background">
			<TopBar />

			<div className="w-full h-screen text-white bg-background">
				<div className="flex flex-col justify-center lg:justify-start w-full bg-background text-white lg:pl-20 px-6 pt-24">
					{
						`Suas respostas foram ${Math.round(user.percentages?.yellowPorcentage ?? 0)}% para o alerta amarelo,
						${Math.round(user.percentages?.orangePorcentage ?? 0)}% para o alerta laranja e
						${Math.round(user.percentages?.redPorcentage ?? 0)}% para o alerta vermelho.`
					}
					{alerta_amarelo.map((alerta) => {
						return (
							<TableSquare text={`${alerta}`} bg="bg-[#FFD56A]" />
						)
					})}

					{alerta_laranja.map((alerta) => {
						return (
							<TableSquare text={`${alerta}`} bg='bg-[#FF9D43]' />
						)
					})}

					{alerta_vermelho.map((alerta) => {
						return (
							<TableSquare text={`${alerta}`} bg='bg-[#E86161]' />
						)
					})}
				</div>

				<div className="w-full flex items-center justify-center py-10 bg-background">
					<button onClick={() => Router.push('/')} className="flex items-center gap-2 bg-rosa text-white text-xl py-3 px-6 rounded-lg lg:hover:opacity-100 lg:opacity-95 transition-opacity shadow-md">
						Voltar <ArrowBendUpLeft className="text-xl" />
					</button>
				</div>
			</div>
		</div>
	)
}
