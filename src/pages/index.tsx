import MainBox from "../components/MainBox"
import Sections from "../components/Sections"

export default function Home() {
	return (
		<div className="pt-24">
			<div className="h-44 w-full flex items-center justify-center">
				<MainBox />
			</div>

			<Sections title="Explore" />

			<Sections title="Melhores Quiz" />

			<Sections title="Melhores Tópicos" />
		</div>
	)
}
