import MainBox from "../components/MainBox"
import Sections from "../components/Sections"
import { TopBar } from "../components/TopBar"

export default function Home() {
	return (
		<>
			<TopBar />
			<div className="flex items-center justify-center md:p-5 w-full bg-indigo-500">
				<div className="pt-5 w-full md:w-[50%] bg-white md:p-5 md:rounded-lg">
					<div className="h-44 w-full flex items-center justify-center">
						<MainBox />
					</div>
					<Sections title="Explore" />
					<Sections title="Melhores Quiz" />
					<Sections title="Melhores Tópicos" />
				</div>
			</div>
		</>
	)
}
