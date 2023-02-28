import MainBox from "../components/MainBox"
import Sections from "../components/Sections"
import { TopBar } from "../components/TopBar"

export default function Home() {
	return (
		<>
			<TopBar/>

			<div className="pt-24">
				<div className="h-44 w-full flex items-center justify-center">
					<MainBox />
				</div>

				<Sections title="Explore" />

				<Sections title="Melhores Quiz" />

				<Sections title="Melhores Tópicos" />
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
