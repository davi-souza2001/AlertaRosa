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

	return (
		<div className={styles.contentGeral}>
			<Header />
			{playing ? (
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
				<BeforeGame />
			)}
		</div>
	)
}
