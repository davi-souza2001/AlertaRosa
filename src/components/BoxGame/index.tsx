import styles from './boxGame.module.css'

interface BoxGameProps {
	title: string
	inputGame: string
	typeBox?: 'create' | 'join'
	submit: any
}

export function BoxGame(props: BoxGameProps) {
	return (
		<div className={styles.contentCreateGame}>
			<div className={styles.contentCreateGameBox}>
				<h1>{props.title}</h1>
				<form onSubmit={(e) => props.submit(e)}>
					<input type="text" placeholder={props.inputGame} />
					{props.typeBox === 'create' && <input type="number" placeholder='Players' />}
					<button type={'submit'}>Create</button>
				</form>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab repellat vel quam cum maiores corporis optio iste nihil porro. Eveniet suscipit ducimus, vel facilis inventore ad ullam accusamus excepturi!</p>
			</div>
		</div>
	)
}
