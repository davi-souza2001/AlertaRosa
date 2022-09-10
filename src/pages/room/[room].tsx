import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import UseAuth from '../../service/hooks/useAuth'
import { playProps, RoomProps } from '../../core/Room'
import { ProviderRoom } from '../../core/ProviderRoom'
import { Header } from '../../components/Header'
import { BeforeGame } from '../../components/BeforeGame'
import { BoxQuestion } from '../../components/BoxQuestion'
import { RoomProvider } from '../../provider/RoomProvider'

import logoQuestion from '../../../public/images/logoQuestion.svg'
import styles from '../../styles/room.module.css'
import UseRoom from '../../service/hooks/useRoom'
import { QuestionProps } from '../../core/Question'

export default function Room() {
	const id = useRouter().query.room
	const providerRooms = new ProviderRoom(new RoomProvider())
	const { setLoading, user } = UseAuth()
	const { roomRealTime } = UseRoom()
	const [playing, setPlaying] = useState(false)
	const [room, setRoom] = useState<RoomProps>({
		id: '',
		leader: '',
		players: [{
			email: '',
			name: '',
			photo: ''
		}],
		playersLength: 0,
		playing: false,
		title: ''
	})
	const [questions, setQuestions] = useState<QuestionProps[]>([])
	const [renderedQuestion, setRenderedQuestion] = useState<QuestionProps>({
		enunciation: '',
		answer: []
	})
	const [questionNumber, setQuestionNumber] = useState(1)

	async function checkIfExists(id: string) {
		const roomExists = await providerRooms.sign(id as string ?? '')
		!roomExists && Router.replace('/')
		roomExists && setRoom(roomExists)
	}

	async function enterTheRoom(player: playProps, email: string) {
		await providerRooms.enterPlayingTheRoom(player, email)
	}

	async function getQuestions() {
		const questionsFound = await providerRooms.getQuestions()
		setQuestions(questionsFound)
		setRenderedQuestion(questionsFound[0])
	}

	async function handleNextQuestion() {
		setQuestionNumber(state => state + 1)
		console.log(questionNumber)
		console.log(questions.length)
		if (questionNumber === questions.length - 1) {
			setPlaying(false)
			setQuestionNumber(1)
			setRenderedQuestion(questions[0])
		} else {
			setRenderedQuestion(questions[questionNumber])
		}
	}

	useEffect(() => {
		setLoading(true)
		getQuestions()
		if (id) {
			checkIfExists(id as string)
		}
		setLoading(false)

	}, [id])

	return (
		<div className={styles.contentGeral}>
			<Header />
			{playing ? (
				<div className={styles.contentGeralQuestionBox}>
					<div className={styles.contentQuestionBox}>
						<div className={styles.contentQuestion}>
							<div className={styles.contentQuestionNow}>
								<h1>{renderedQuestion.enunciation ?? ''}</h1>
							</div>
							<Image src={logoQuestion} height={60} width={100} style={{ width: '20%', marginRight: '10px' }} />
						</div>
						<div className={styles.contentTimer}>
							<CountdownCircleTimer
								duration={60}
								size={100}
								isPlaying
								colors={['#3c2765', '#F7B801', '#A30000', '#A30000']}
								colorsTime={[30, 20, 10, 5]}
							>
								{({ remainingTime }) => remainingTime}
							</CountdownCircleTimer>
						</div>
						<div className={styles.contentAreaAnswers}>
							<BoxQuestion text={renderedQuestion.answer[0].value ?? ''} numberQuestion={1} />
							<BoxQuestion text={renderedQuestion.answer[1].value ?? ''} numberQuestion={2} />
							<BoxQuestion text={renderedQuestion.answer[2].value ?? ''} numberQuestion={3} />
						</div>
						<div className={styles.contentSubmitAnswer}>
							<button onClick={handleNextQuestion}>Submit 🚀</button>
						</div>
					</div>
				</div>
			) : (
				<BeforeGame
					title={room.title ?? ''}
					namePLayerOne={roomRealTime.players[0].name ?? room.players[0].name}
					photoPlayerOne={roomRealTime.players[0].photo ?? room.players[0].photo}
					namePLayerTwo={roomRealTime.players[1]?.name ?? room.players[1]?.name}
					photoPlayerTwo={roomRealTime.players[1]?.photo ?? room.players[1]?.photo}
					players={room.playersLength ?? 0}
					enterTheRoom={() => enterTheRoom({
						email: user.email,
						name: user.name,
						photo: user.photo
					},
						room.leader
					)}
					leader={room.leader === user.email ? true : false}
					onClick={() => setPlaying(true)} />
			)}
		</div>
	)
}
