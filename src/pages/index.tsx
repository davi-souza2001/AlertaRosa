import { HiArrowNarrowRight } from "react-icons/hi"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { BoxCategorie } from "../components/BoxCategorie"
import MainBox from "../components/MainBox"

export default function Home() {
	return (
		<div className="pt-24">
			<div className="h-44 w-full flex items-center justify-center">
				<MainBox />
			</div>
			<div className='h-20 w-full flex items-center justify-between'>
				<p className="ml-5 font-semibold text-xl">Discover</p>
				<p className="mr-5 flex items-center justify-center text-indigo-500">View all <HiArrowNarrowRight /> </p>
			</div>
			<div className="h-60">
				<Carousel showArrows={false} showIndicators={false} centerMode centerSlidePercentage={55}>
					<BoxCategorie />
					<BoxCategorie />
					<BoxCategorie />
				</Carousel>
			</div>

		</div>
	)
}
