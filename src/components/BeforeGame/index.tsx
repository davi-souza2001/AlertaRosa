import Image from 'next/image'

import logoQuestion from '../../../public/images/logoQuestion.svg'
import styles from './beforegame.module.css'

interface beforegameprops {
	title: string
	onClick: Function
	players: number
}

export function BeforeGame(props: beforegameprops) {
	return (
		<div className={styles.contentCreateGame}>
			<div className={styles.contentCreateGameBox}>
				<h1>{props.title}</h1>
				<div className={styles.contentPlayer}>
					<Image src={logoQuestion} height={40} width={60} style={{
						marginLeft: '10px'
					}} />
					<span>Davi Souza</span>
				</div>
				{props.players === 2 && (
					<div className={styles.contentPlayer}>
						<Image src={logoQuestion} height={40} width={60} style={{
							marginLeft: '10px'
						}} />
						<span>Davi Souza</span>
					</div>
				)}
				<div className={styles.contentButton}>
					<button onClick={() => props.onClick}>Start</button>
				</div>
			</div>
		</div>
	)
}
