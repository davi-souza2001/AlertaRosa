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
		</>
	)
}
