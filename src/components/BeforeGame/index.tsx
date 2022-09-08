import Image from 'next/image'
import { MouseEventHandler } from 'react'

import logoQuestion from '../../../public/images/logoQuestion.svg'
import styles from './beforegame.module.css'

interface beforegameprops {
	players: number
	title: string
	photoPlayerOne: string
	namePLayerOne: string
	onClick: MouseEventHandler<HTMLButtonElement>
}

export function BeforeGame(props: beforegameprops) {
	return (
		<div className={styles.contentCreateGame}>
			<div className={styles.contentCreateGameBox}>
				<h1>{props.title}</h1>
				<div className={styles.contentPlayer}>
					<Image src={props.photoPlayerOne ?? logoQuestion} height={50} width={50} style={{
						borderRadius: '999px'
					}} />
					<span>{props.namePLayerOne ?? ''}</span>
				</div>
				{props.players === 2 && (
					<div className={styles.contentPlayer}>
						<Image src={logoQuestion} height={50} width={50} style={{
							borderRadius: '9999px'
						}} />
						<span>Davi Souza</span>
					</div>
				)}
				<div className={styles.contentButton}>
					<button onClick={props.onClick}>Start</button>
				</div>
			</div>
		</div>
	)
}
