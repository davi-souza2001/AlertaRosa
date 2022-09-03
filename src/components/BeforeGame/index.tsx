import Image from 'next/image'

import logoQuestion from '../../../public/images/logoQuestion.svg'
import styles from './beforegame.module.css'

interface beforegameprops {
	title: string
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
				<div className={styles.contentPlayer}>
					<Image src={logoQuestion} height={40} width={60} style={{
						marginLeft: '10px'
					}} />
					<span>Davi Souza</span>
				</div>
				<div className={styles.contentButton}>
					<button>Start</button>
				</div>
			</div>
		</div>
	)
}
