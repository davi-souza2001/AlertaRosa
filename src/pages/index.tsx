import Router from "next/router"
import Image from "next/image"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import MainBox from "../components/MainBox"
import { TopBar } from "../components/TopBar"

import GirlFlower from '../../public/girlFlower.svg'
import { BoxCategorie } from "../components/BoxCategorie"

import GirlPhone from '../../public/girlPhone.svg'
import GirlLegislation from '../../public/girlDocument.svg'
import GirlQuestion from '../../public/girlQuestion.svg'
import GirlCommunity from '../../public/girlCommunity.svg'
import Davi from '../../public/Davi.jpeg'
import Papa from '../../public/Papa.png'
import Vini from '../../public/Vini.png'
import Juli from '../../public/Juli.jpg'

export default function Home() {
	return (
		<>
			<TopBar />

			<MainBox />

			<div className='h-20 w-full'>
				<p className="font-semibold text-xl pt-5 px-5 text-roxo">Formulário</p>
			</div>
			<div className='h-44 w-full flex items-start justify-start lg:hidden'>
				<div className="h-full w-[90%] flex items-center justify-around text-white text-left text-xs mx-5 p-5 gap-5 rounded-lg rounded-tl-none shadow-lg bg-rosa" onClick={() => Router.push('/startQuestions/questions')}>
					<Image alt="mulher com flor" src={GirlFlower} height={100} width={100} />
					<p>Realize um formulário personalizado de acordo com o violentômetro. Antes de começar, você receberá uma explicação sobre o processo e o que esperar do teste.</p>
				</div>
			</div>
			<div className='hidden h-56 w-full lg:flex justify-center'>
				<div className="h-full w-[80%] border-2 border-transparent hover:border-roxo transition-all flex items-center justify-around text-white text-left text-lg ml-5 p-10 gap-5 rounded-lg rounded-tl-none bg-rosa shadow-lg cursor-pointer" onClick={() => Router.push('/startQuestions/questions')}>
					<Image alt="mulher com flor" src={GirlFlower} height={200} width={200} />
					<p>Realize um formulário personalizado de acordo com o violentômetro. Antes de começar, você receberá uma explicação sobre o processo e o que esperar do teste.</p>
				</div>
			</div>

			<div className='h-20 w-full flex items-center justify-between px-5 z-0'>
				<p className="font-semibold text-xl text-roxo">Explore</p>
			</div>
			<div className="h-60 px-5">
				<div className="lg:hidden">
					<Carousel showStatus={false} showArrows={true} showIndicators={false} centerMode centerSlidePercentage={70}>
						<BoxCategorie image={GirlPhone} content="Contatos Úteis" link="/contacts" />
						<BoxCategorie image={GirlQuestion} content="Dúvidas Frequentes" link="/AskedQuestions" />
						<BoxCategorie image={GirlLegislation} content="Legislação" link="/legislation" />
						<BoxCategorie image={GirlCommunity} content="Comunidades" link="/legislation" />
					</Carousel>
				</div>

				<div className="hidden lg:flex items-center justify-evenly w-full">
					<BoxCategorie image={GirlPhone} content="Contatos Úteis" link="/contacts" />
					<BoxCategorie image={GirlQuestion} content="Dúvidas Frequentes" link="/AskedQuestions" />
					<BoxCategorie image={GirlLegislation} content="Legislação" link="/legislation" />
					<BoxCategorie image={GirlCommunity} content="Comunidades" link="/" />
				</div>
			</div>

			<div className='h-20 w-full flex items-center justify-between px-5 z-0'>
				<p className="font-semibold text-xl text-roxo">Sobre nós</p>
			</div>
			<div className="h-60 px-5">
				<div className="lg:hidden">
					<Carousel showStatus={false} showArrows={true} showIndicators={false} centerMode centerSlidePercentage={70}>
						<BoxCategorie image={Davi} content="Davi Souza" />
						<BoxCategorie image={Vini} content="Vinicius Rodrigues" />
						<BoxCategorie image={Papa} content="Paloma Alves" />
						<BoxCategorie image={Juli} content="Juliete Sérvio" />
					</Carousel>
				</div>
				<div className="hidden lg:flex items-center justify-evenly w-full">
					<BoxCategorie image={Davi} content="Davi Souza" />
					<BoxCategorie image={Vini} content="Vinicius Rodrigues" />
					<BoxCategorie image={Papa} content="Paloma Alves" />
					<BoxCategorie image={Juli} content="Juliete Sérvio" />
				</div>
			</div>
		</>
	)
}
