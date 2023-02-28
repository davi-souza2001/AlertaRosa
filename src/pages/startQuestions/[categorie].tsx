import { TopBar } from "../../components/TopBar"

export default function StartQuestions() {
	return (
		<div className="h-full w-full">
			<TopBar/>
			<div className="h-96 w-full flex flex-col items-center justify-center p-2">
				<div className="h-1/3 w-full flex items-center justify-center text-2xl font-semibold">
					<h1>Bem-vinda ao Formulário!</h1>
				</div>
				<div className="h-1/3 w-full flex items-center justify-center text-center">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni dolorum harum culpa voluptatum doloribus quis ex libero pariatur ipsam dolore, quod incidunt eius autem id, alias mollitia explicabo magnam.</p>
				</div>
				<div className="h-1/3 w-full flex items-center justify-center">
					<button className="bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">Começar</button>
				</div>
			</div>
		</div>
	)
}
