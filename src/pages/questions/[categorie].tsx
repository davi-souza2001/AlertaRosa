import { Progress } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { HiCheckCircle, HiXCircle } from "react-icons/hi"

import { TopBar } from "../../components/TopBar"
import { ProviderRoom } from "../../core/ProviderRoom"
import { RoomProvider } from "../../provider/RoomProvider"
import { QuestionProps } from "../../core/Question"
import GradientLg from "../../components/GradientLarge"
import BottomSm from "../../components/BottomSmall"

export default function Question() {
	const [checked, setChecked] = useState<'yes' | 'no' | ''>('')
	const [questions, setQuestions] = useState<QuestionProps[]>([])
	const [questionNumber, setQuestionNumber] = useState(0)
	const categorie = useRouter().query.categorie
	const roomProvider = new ProviderRoom(new RoomProvider())

	async function test() {
		if (categorie) {
			const list = await roomProvider.getQuestions(categorie as string)
			setQuestions(list)
		}
	}

	function renderQuestions() {
		return (
			<div className="h-52 w-full flex items-center justify-center text-center p-5 text-lg font-semibold">
				<p>{questions[questionNumber]?.enunciation}</p>
			</div>
		)
	}

	function nextQuestion() {
		setQuestionNumber(state => state + 1)
	}

	useEffect(() => {
		test()
	}, [categorie])

	return (
		<div>
			<TopBar />

			<div className="w-full h-screen text-white">
				<GradientLg flex="col" padding_top="pt-20">
					<div className="h-10 w-full flex items-center justify-center">
						<Progress colorScheme='green' size='md' value={20} className="w-full ml-2 rounded-lg" />
						<p className="p-2">1/5</p>
					</div>

					{renderQuestions()}

					<div className="h-44 w-96 flex items-center justify-center flex-col text-center p-5 text-white">
						<div onClick={() => setChecked('yes')} className={`h-12 w-2/3 flex items-center justify-start rounded-md mb-7 ${checked === 'yes' ? 'bg-verde shadow-md font-semibold' : 'bg-background'} transition-all lg:cursor-pointer`}>
							{checked === 'yes' ? <HiCheckCircle className="text-white text-3xl mx-2 mr-5" /> : <p className="h-6 w-6 mx-2 mr-5 bg-white text-background rounded-full">A</p>}
							<p>Sim</p>
						</div>
						<div onClick={() => setChecked('no')} className={`h-12 w-2/3 flex items-center justify-start rounded-md mb-7 ${checked === 'no' ? 'bg-vermelho shadow-md font-semibold' : 'bg-background'} transition-all lg:cursor-pointer`}>
							{checked === 'no' ? <HiXCircle className="text-white text-3xl mx-2 mr-5" /> : <p className="h-6 w-6 mx-2 mr-5 bg-white text-background rounded-full">B</p>}
							<p>Não</p>
						</div>
					</div>
				</GradientLg>

				<BottomSm items='center'>
					<div className="w-full h-full flex items-center justify-center mt-10">
						<button onClick={() => nextQuestion()} disabled={checked === '' ? true : false} className={`text-rosa h-10 w-32 bg-white rounded-md ${checked !== '' ? 'opacity-100 shadow-md' : 'opacity-50'} transition-all`}>
							Continuar
						</button>
					</div>
				</BottomSm>
			</div>
		</div>
	)
}
