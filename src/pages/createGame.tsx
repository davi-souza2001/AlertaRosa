import { BoxGame } from '../components/BoxGame'
import { Header } from '../components/Header'

import styles from '../styles/createGame.module.css'

export default function createGame() {
	return (
		<div className={styles.contentGeral}>
			<Header />
			<BoxGame title='Create Game' inputGame='Name game'/>
		</div>
	)
}
