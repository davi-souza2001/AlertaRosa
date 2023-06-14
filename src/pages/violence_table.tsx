import { useEffect, useState } from "react";
import Image from "next/image";
import Router from "next/router";
import { ArrowBendUpLeft } from "phosphor-react";

import { TopBar } from "../components/TopBar";
import UseAuth from "../service/hooks/useAuth";

import Tabela from '../../public/Tabela.svg'

export default function Violence_Table() {
	const [noOneYes, setNoOneYes] = useState(false)
	const { user, getPercentages, loading, setLoading } = UseAuth()

	useEffect(() => {
		setLoading(true)

		getPercentages(user.email).then((percentages) => {
			if (percentages.orangePorcentage === 0 && percentages.redPorcentage === 0 && percentages.yellowPorcentage === 0) {
				setNoOneYes(true)
			}
		})

		setLoading(false)
	}, [user])

	return (
		<div className="bg-background">
			<TopBar />

			<div className="w-full h-screen text-white bg-background">
				<div className="flex flex-col justify-center lg:justify-start w-full bg-background text-white text-xl lg:pl-20 px-6 pt-24">
					{noOneYes ? (
						<>
							Você não tem respostas com sim, portanto, acreditamos que você não se encaixa em nenhum quadro de alerta. Porém, fique a vontade para saber mais sobre nossa plataforma!
						</>
					) : (
						`Suas respostas foram ${Math.round(user.percentages?.yellowPorcentage ?? 0)}% para o alerta amarelo,
							${Math.round(user.percentages?.orangePorcentage ?? 0)}% para o alerta laranja e
							${Math.round(user.percentages?.redPorcentage ?? 0)}% para o alerta vermelho.`
					)}
					<div className="my-5 w-full">
						<Image src={Tabela} alt="Tabela violentometro" />
					</div>
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
