import { Header } from '../components/Header';

import styles from '../styles/createGame.module.css'

export default function createGame() {
	return (
		<div className={styles.contentGeral}>
			<Header />
			<div className={styles.contentCreateGame}>
				<div className={styles.contentCreateGameBox}>
					<h1>Create game</h1>
					<form>
						<input type="text" placeholder='Name game' />
					</form>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab repellat vel quam cum maiores corporis optio iste nihil porro. Eveniet suscipit ducimus, vel facilis inventore ad ullam accusamus excepturi!</p>
				</div>
			</div>
		</div>
	)
}
