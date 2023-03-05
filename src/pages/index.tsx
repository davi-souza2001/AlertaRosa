import Bottom from "../components/Bottom"
import MainBox from "../components/MainBox"
import Sections from "../components/Sections"
import { TopBar } from "../components/TopBar"

export default function Home() {
	return (
		<>
			<TopBar />

			<MainBox />
			
			<Sections title="Explore" />
			<Sections title="Melhores Quiz" />
			<Sections title="Melhores Tópicos" />
		</>
	)
}
