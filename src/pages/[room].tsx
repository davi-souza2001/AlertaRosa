import { useRouter } from 'next/router'
import { Header } from '../components/Header'

import logoQuestion from '../../public/images/logoQuestion.svg'
import styles from '../styles/room.module.css'
import Image from 'next/image'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { BoxQuestion } from '../components/BoxQuestion'

export default function Room() {
	const id = useRouter().query.room

	return (
		<div className={styles.contentGeral}>
			<Header />
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
				</div>
			</div>
		</div>
	)
}
