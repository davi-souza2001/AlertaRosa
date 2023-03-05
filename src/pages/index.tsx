import MainBox from "../components/MainBox"
import Sections from "../components/Sections"
import { TopBar } from "../components/TopBar"

export default function Home() {
	return (
		<>
			<TopBar />
			<div className="bg-[#2B2245]">
				<MainBox />
				<Sections title="Explore" />
				<Sections title="Melhores Quiz" />
				<Sections title="Melhores Tópicos" />
			</div>
		</>
	)
}
