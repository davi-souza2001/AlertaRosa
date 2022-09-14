import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { RoomProps } from '../../core/Room'
import { Header } from '../../components/Header'
import { BeforeGame } from '../../components/BeforeGame'
import { BoxQuestion } from '../../components/BoxQuestion'

import logoQuestion from '../../../public/images/logoQuestion.svg'
import styles from '../../styles/room.module.css'
import UseRoom from '../../service/hooks/useRoom'
import { QuestionProps } from '../../core/Question'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import UseAuth from '../../service/hooks/useAuth'

export default function Room() {
	const id = useRouter().query.room
	const { user } = UseAuth()
	const { getRoom, joinRoom, startGame, getQuestion } = UseRoom()
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
		title: '',
		questionNumber: 0,
		question: {
			answer: [],
			enunciation: '',
			id: 0
		}
	})
	const [questions, setQuestions] = useState<QuestionProps | null>(null)

	async function getRoomValues() {
		const roomFound = await getRoom(id as string ?? '')

		if (roomFound.leader) {
			onSnapshot(doc(db, "rooms", roomFound.leader), (doc) => {
				setRoom(doc.data() as RoomProps)
			})
		}
	}

	async function enterTheRoom() {
		await joinRoom(room.leader, {
			email: user.email,
			name: user.name,
			photo: user.photo
		})
	}

	async function getNowQuestion() {
		const question = await getQuestion(room)

	}

	useEffect(() => {
		getRoomValues()

	}, [id])

	useEffect(() => {
		getNowQuestion()

	}, [room])

	return (
		<div className={styles.contentGeral}>
			<Header />
			{room.playing ? (
				<div className={styles.contentGeralQuestionBox}>
					<div className={styles.contentQuestionBox}>
						<div className={styles.contentQuestion}>
							<div className={styles.contentQuestionNow}>
								<h1>Algo</h1>
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
							<BoxQuestion
								text={'algo'}
								numberQuestion={1}
							/>
							<BoxQuestion
								text={'algo'}
								numberQuestion={2}
							/>
							<BoxQuestion
								text={'algo'}
								numberQuestion={3}
							/>
						</div>
						<div className={styles.contentSubmitAnswer}>
							<button>Submit 🚀</button>
						</div>
					</div>
				</div>
			) : (
				<BeforeGame
					title={room.title}
					leader={room.leader === user.email ? true : false}
					players={room.players}
					enterTheRoom={enterTheRoom}
					roomLength={room.playersLength}
					onClick={() => startGame(room.leader)}
				/>
			)}
		</div>
	)
}
