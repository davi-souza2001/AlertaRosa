import Router from "next/router"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import MainBox from "../components/MainBox"
import { TopBar } from "../components/TopBar"

import GirlFlower from '../../public/girlFlower.svg'
import { BoxCategorie } from "../components/BoxCategorie"

export default function Home() {
	return (
		<>
			<TopBar />

			<MainBox />

			<div className='h-20 w-full'>
				<p className="font-semibold text-white text-xl pt-5 px-5">Formulário - Violentômetro</p>
			</div>
			<div className='h-44 w-full flex items-start justify-start lg:hidden'>
				<div className="h-full w-96 flex items-center justify-around text-white text-left text-xs ml-5 mr-5 rounded-lg bg-rosa">
					<Image alt="mulher com flor" src={GirlFlower} height={150} width={150} />
					<p className="p-5">Aqui você pode fazer um formulário de acordo com os parâmetros do violentômetro. Antes de começar você vai ser explicada sobre como funcionar o processo e o que pode esperar desse teste.</p>
				</div>
			</div>
			<div className='hidden h-56 w-full lg:block'>
				<div className="h-full w-[800px] flex items-center justify-around text-white text-left text-lg ml-5 rounded-lg bg-rosa cursor-pointer" onClick={() => Router.push('/startQuestions/questions')}>
					<Image alt="mulher com flor" src={GirlFlower} height={200} width={200} />
					<p className="p-3">Aqui você pode fazer um formulário de acordo com os parâmetros do violentômetro. Antes de começar você vai ser explicada sobre como funcionar o processo e o que pode esperar desse teste.</p>
				</div>
			</div>

			<div className='h-20 w-full flex items-center justify-between px-5 z-0 text-white'>
				<p className="font-semibold text-xl">Explore</p>
			</div>
			<div className="h-60 px-5">
				<div className="lg:hidden">
					<Carousel showStatus={false} showArrows={true} showIndicators={false} centerMode centerSlidePercentage={70}>
						<BoxCategorie content="Contatos Úteis" />
						<BoxCategorie content="Dúvidas Frequentes" />
						<BoxCategorie content="Legislação" />
						<BoxCategorie content="Comunidades" />
					</Carousel>
				</div>
				<div className="hidden lg:block">
					<Carousel showStatus={false} showArrows={true} showIndicators={false} centerMode centerSlidePercentage={20}>
						<BoxCategorie content="Contatos Úteis" />
						<BoxCategorie content="Dúvidas Frequentes" />
						<BoxCategorie content="Legislação" />
						<BoxCategorie content="Comunidades" />
					</Carousel>
				</div>
			</div>

			<div className='h-20 w-full flex items-center justify-between px-5 z-0 text-white'>
				<p className="font-semibold text-xl">Sobre nós</p>
			</div>
			<div className="h-60 px-5">
				<div className="lg:hidden">
					<Carousel showStatus={false} showArrows={true} showIndicators={false} centerMode centerSlidePercentage={70}>
						<BoxCategorie content="Davi Souza" />
						<BoxCategorie content="Vini" />
						<BoxCategorie content="Paloma Alves" />
						<BoxCategorie content="Juliete Sérvio" />
					</Carousel>
				</div>
				<div className="hidden lg:block">
					<Carousel showStatus={false} showArrows={true} showIndicators={false} centerMode centerSlidePercentage={20}>
						<BoxCategorie content="Davi Souza" />
						<BoxCategorie content="Vini" />
						<BoxCategorie content="Paloma Alves" />
						<BoxCategorie content="Juliete Sérvio" />
					</Carousel>
				</div>
			</div>
		</>
	)
}
