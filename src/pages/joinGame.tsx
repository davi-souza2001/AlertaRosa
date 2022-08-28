import { BoxGame } from '../components/BoxGame'
import { Header } from '../components/Header'

import styles from '../styles/joinGame.module.css'

export default function joinGame() {
	return (
		<div className={styles.contentGeral}>
			<Header />
			<BoxGame title='Join a Game' inputGame='Id Game'/>
		</div>
	)
}
