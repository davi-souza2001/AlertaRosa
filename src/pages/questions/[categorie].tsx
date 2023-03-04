import { Progress } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { HiCheckCircle, HiXCircle } from "react-icons/hi"

import { TopBar } from "../../components/TopBar"
import { ProviderRoom } from "../../core/ProviderRoom"
import { RoomProvider } from "../../provider/RoomProvider"
import { QuestionProps } from "../../core/Question"

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
			<div className="flex flex-col gap-3 mt-[5vh]">
				<div className="h-10 w-full flex items-center justify-center">
					<Progress colorScheme='green' size='md' value={20} className="w-full ml-2 rounded-lg" />
					<p className="p-2">1/5</p>
				</div>
				{renderQuestions()}
				<div className="h-44 w-full flex items-center justify-center flex-col text-center p-5 text-white">
					<div onClick={() => setChecked('yes')} className={`h-12 w-2/3 flex items-center justify-start rounded-md mb-7 ${checked === 'yes' ? 'bg-green-500 shadow-md font-semibold' : 'bg-indigo-500'} transition-all`}>
						{checked === 'yes' ? <HiCheckCircle className="text-white text-3xl mx-2 mr-5" /> : <p className="h-6 w-6 mx-2 mr-5 bg-white text-indigo-500 rounded-full">A</p>}
						<p>Sim</p>
					</div>
					<div onClick={() => setChecked('no')} className={`h-12 w-2/3 flex items-center justify-start rounded-md mb-7 bg-indigo-500 ${checked === 'no' ? 'bg-red-500 shadow-md font-semibold' : 'bg-indigo-500'} transition-all`}>
						{checked === 'no' ? <HiXCircle className="text-white text-3xl mx-2 mr-5" /> : <p className="h-6 w-6 mx-2 mr-5 bg-white text-indigo-500 rounded-full">B</p>}
						<p>Não</p>
					</div>
				</div>
				<div className="w-full flex items-center justify-center">
					<button onClick={() => nextQuestion()} disabled={checked === '' ? true : false} className={`text-white h-10 w-32 bg-indigo-500 rounded-md opacity-50 ${checked !== '' && 'opacity-100 shadow-md'} transition-all`}>
						Continuar
					</button>
				</div>
			</div>
		</div>
	)
}
