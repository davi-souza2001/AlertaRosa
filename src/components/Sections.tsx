import { HiArrowNarrowRight } from "react-icons/hi"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { BoxCategorie } from "../components/BoxCategorie"

interface Props {
	title: string
}

export default function Sections({ title }: Props) {
	return (
		<>
			<div className='h-20 w-full flex items-center justify-between px-5 z-0 text-white'>
				<p className="font-semibold text-xl">{title}</p>
				<p className="flex items-center justify-center text-[#9461E8]">Ver tudo <HiArrowNarrowRight /> </p>
			</div>

			<div className="h-60 px-5">
				<Carousel showStatus={false} showArrows={true} showIndicators={false} centerMode centerSlidePercentage={70}>
					<BoxCategorie />
					<BoxCategorie />
					<BoxCategorie />
				</Carousel>
			</div>
		</>
	)
}
