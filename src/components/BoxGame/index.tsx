import styles from './boxGame.module.css'

interface BoxGameProps {
	title: string
	inputGame: string
}

export function BoxGame(props: BoxGameProps) {
	return (
		<div className={styles.contentCreateGame}>
			<div className={styles.contentCreateGameBox}>
				<h1>{props.title}</h1>
				<form>
					<input type="text" placeholder={props.inputGame} />
				</form>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab repellat vel quam cum maiores corporis optio iste nihil porro. Eveniet suscipit ducimus, vel facilis inventore ad ullam accusamus excepturi!</p>
			</div>
		</div>
	)
}
