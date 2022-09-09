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

	async function checkIfExists(id: string) {
		const roomExists = await providerRooms.sign(id as string ?? '')
		!roomExists && Router.replace('/')
		roomExists && setRoom(roomExists)
	}

	async function enterTheRoom(player: playProps, id: string) {
		await providerRooms.enterPlayingTheRoom(player, id)
	}

	useEffect(() => {
		setLoading(true)
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
								<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ex qui explicabo iste molestias vitae assumenda expedita sed placeat doloremque officia ipsa, nostrum ut necessitatibus ad repellendus est doloribus tempora?</h1>
							</div>
							<Image src={logoQuestion} height={60} width={100} style={{ width: '20%', marginRight: '10px' }} />
						</div>
						<div className={styles.contentTimer}>
							<CountdownCircleTimer
								duration={30}
								size={100}
								isPlaying
								colors={['#3c2765', '#F7B801', '#A30000', '#A30000']}
								colorsTime={[30, 20, 10, 5]}
							>
								{({ remainingTime }) => remainingTime}
							</CountdownCircleTimer>
						</div>
						<div className={styles.contentAreaAnswers}>
							<BoxQuestion />
							<BoxQuestion />
							<BoxQuestion />
						</div>
						<div className={styles.contentSubmitAnswer}>
							<button>Submit 🚀</button>
						</div>
					</div>
				</div>
			) : (
				<BeforeGame
					title={room.title ?? ''}
					namePLayerOne={room.players[0].name}
					photoPlayerOne={room.players[0].photo}
					namePLayerTwo={room.players[1]?.name}
					photoPlayerTwo={room.players[1]?.photo}
					players={room.playersLength ?? 0}
					enterTheRoom={() => enterTheRoom({
						email: user.email,
						name: user.name,
						photo: user.photo
					},
						id as string ?? ''
					)}
					onClick={() => setPlaying(true)} />
			)}
		</div>
	)
}
