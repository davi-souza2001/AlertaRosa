import { Progress } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Router, { useRouter } from "next/router"

import { TopBar } from "../../components/TopBar"
import { ProviderRoom } from "../../core/ProviderRoom"
import { RoomProvider } from "../../provider/RoomProvider"
import { QuestionProps } from "../../core/Question"
import GradientLg from "../../components/GradientLarge"
import BottomSm from "../../components/BottomSmall"
import { renderMensage } from "../../utils/renderMensage"
import UseAuth from "../../service/hooks/useAuth"

export interface answersListProps {
	id: string
	categorie: string
}

export default function Question() {
	const [checked, setChecked] = useState<'yes' | 'no' | ''>('')
	const [questions, setQuestions] = useState<QuestionProps[]>([])
	const [questionNumber, setQuestionNumber] = useState(0)
	const [answersList, setAnswersList] = useState<answersListProps[]>([])
	const categorie = useRouter().query.categorie
	const roomProvider = new ProviderRoom(new RoomProvider())
	const { user, setLoading } = UseAuth()

	async function getQuestions() {
		if (categorie) {
			const list = await roomProvider.getQuestions()
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

	async function nextQuestion() {
		if (checked === "yes") {
			setAnswersList([...answersList, {
				id: questions[questionNumber].id.toString(),
				categorie: questions[questionNumber].categorie
			}])
		}
		if (questionNumber + 2 > questions.length) {
			setLoading(true)
			const result = renderMensage(answersList)
			await roomProvider.sendResult(result, user)
			Router.push(`/result/${result}`).then(() => {
				setLoading(false)
			})
		} else {
			setQuestionNumber(state => state + 1)
			setChecked('')
		}
	}

	useEffect(() => {
		getQuestions()
	}, [])

	return (
		<div className="bg-background h-screen">
			<TopBar />

			<div className="w-full text-white bg-background">
				<GradientLg flex="col" padding_top="pt-20">
					<div className="h-10 w-96 flex items-center justify-center">
						{/* @ts-ignore */}
						<Progress colorScheme='green' size='md' value={questionNumber / questions.length * 100} className="w-full ml-2 rounded-lg" />
						<p className="p-2">{questionNumber}/{questions.length}</p>
					</div>

					{renderQuestions()}

					<div className="h-44 w-96 flex items-center justify-center flex-col text-center p-5 text-white">
						<div onClick={() => setChecked('yes')} className={`h-12 w-2/3 flex items-center justify-start rounded-md mb-7 bg-background ${checked === 'yes' ? 'opacity-100 shadow-md font-semibold' : 'opacity-80'} transition-all lg:cursor-pointer`}>
							<p className="h-6 w-6 mx-2 mr-5 bg-white text-background rounded-full">A</p>
							<p>Sim</p>
						</div>
						<div onClick={() => setChecked('no')} className={`h-12 w-2/3 flex items-center justify-start rounded-md mb-7 bg-background ${checked === 'no' ? 'opacity-100 shadow-md font-semibold' : 'bg-background opacity-80'} transition-all lg:cursor-pointer`}>
							<p className="h-6 w-6 mx-2 mr-5 bg-white text-background rounded-full">B</p>
							<p>Não</p>
						</div>
					</div>
				</GradientLg>

				<BottomSm items='center' bg="background">
					<div className="w-full h-full flex items-center justify-center mt-10">
						<button onClick={() => nextQuestion()} disabled={checked === '' ? true : false} className={`text-white h-10 w-32 bg-rosa rounded-md ${checked !== '' ? 'opacity-100 shadow-md' : 'opacity-50'} transition-all`}>
							Continuar
						</button>
					</div>
				</BottomSm>
			</div>
		</div>
	)
}
