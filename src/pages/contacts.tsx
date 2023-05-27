import BottomLg from "../components/BottomLarge";
import GradientSm from "../components/GradientSmall";
import InfoContent from "../components/InfoContent";
import { TopBar } from "../components/TopBar";

import GirlIcon from '../../public/girlPhone.svg'
import Image from "next/image";

export default function Contacts() {
	return (
		<>
			<TopBar />

			<div className="w-full h-screen text-white bg-background">
				<GradientSm padding_top="pt-20">
					<div className='w-full flex items-center justify-center gap-3'>
						<Image src={GirlIcon} alt='Imagem de mulher com celular' className="flex lg:hidden" width={160} />
						<Image src={GirlIcon} alt='Imagem de mulher com celular' className="lg:flex hidden" width={180} />
					</div>
				</GradientSm>

				<BottomLg flex="col" justify="justify-start" bg="background">
					<p className="text-2xl font-semibold mt-8 ml-5 text-roxo">Informações:</p>

					<InfoContent name="MPPE" contact="(81) 99232.3667" local="Av. Visconde de Suassuna, 99, Salas B-04/05, Santo Amaro – Recife. CEP: 50050-540" />
					<InfoContent name="Vara de Violência Doméstica e Familiar Contra Mulher de Camaragibe" contact="(81) 3181 9299 / (81) 3181 9300 / vmulher.camaragibe@tjpe.jus.br" local="Av. Visconde de Suassuna, 99, Salas B-04/05, Santo Amaro – Recife. CEP: 50050-540" />
					<InfoContent name="Central de Atendimento à Mulher" contact="Disque 180" />
					<InfoContent name="Polícia Militar" contact="Disque 190" />
					<InfoContent name="Ouvidoria da Mulher do Estado de Pernambuco" local="Avenida Cais do Apolo, nº 222, 3º andar, Centro, Recife. Horário de atendimento: das 8h às 18h, dias úteis" contact="0800 2818187" />
					<InfoContent name="1ª Delegacia de Polícia Especializada da Mulher" local="Rua do Pombal, Praça do Campo. Santo Amaro. Recife." contact="(81) 3184.3352" />
					<InfoContent name="2ª Delegacia de Polícia Especializada da Mulher" local="Estrada da Batalha, s/n°. Prazeres. Jaboatão dos Guararapes." contact="(81) 3184.3444/3445" />
					<InfoContent name="3ª Delegacia de Polícia Especializada da Mulher" local="Rua Castro Alves, nº 57. Centro. Petrolina." contact="(87) 3866.6625" />
					<InfoContent name="4ª Delegacia de Polícia Especializada da Mulher" local="Rua Dalton Santos, nº 115. São Francisco. Caruaru." contact="(81) 3719.9106" />
					<InfoContent name="5ª Delegacia de Polícia Especializada da Mulher" local="Praça Frederico Ludgren, s/n°. Paulista" contact="(81) 3184.7072" />
					<InfoContent name="9ª Delegacia de Polícia Especializada da Mulher" local="Rua Frei Caneca, nº 460. Heliópolis. Garanhuns" contact="(81) 3761.8507" />
					<InfoContent name="Instituto Médico Legal" local="Rua do Pombal, nº 455. Santo Amaro. Recife." contact="(81) 3222.5814" />
					<InfoContent name="Vara de Violência Doméstica e Familiar Contra Mulher de Jaboatão dos Guararapes" local="Endereço: Rua do Jangadeiro, 127 - Candeias. CEP 54430-315." contact="(81) 3181-5833" />
					<InfoContent name="1ª Vara de Violência Doméstica e Familiar Contra Mulher de Recife" local="Endereço: Avenida Des. Guerra Barreto, s/n, Ilha Joana Bezerra (Fórum Des. Rodolfo Aureliano, 4º andar - Ala Norte)" contact="(81) 3181.0620 / 0737" />
					<InfoContent name="Centro de Atendimento às Mulheres em Situação de Violência Doméstica e Sexista" local="Centro de Referência Clarice Lispector Rua Bernardo Guimarães, nº 470. Boa Vista. " contact="(81) 3355.3008 / (81) 3355.3009 / (81) 3355.3010" />
					<InfoContent name="Centro de Atendimento às Mulheres em Situação de Violência Doméstica e Sexista - Jaboatão" local="Centro de Referência Maristela Justus Rua Travessa São João, nº 64. " contact="(81) 3468.2485" />
					<InfoContent name="Centro de Atendimento às Mulheres em Situação de Violência Doméstica e Sexista - Olinda" local="Centro de Referência Márcia Dangremon. Rua Maria Ramos, nº 131. Bairro" contact="(81) 3429.2707/0800.2812008" />
				</BottomLg>
			</div>
		</>
	)
}
