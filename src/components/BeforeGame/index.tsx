import Image from 'next/image'
import { MouseEventHandler } from 'react'

import signRoom from '../../../public/images/signRoom.svg'
import styles from './beforegame.module.css'

interface beforegameprops {
	players: number
	title: string
	photoPlayerOne: string
	namePLayerOne: string
	photoPlayerTwo?: string
	namePLayerTwo?: string
	leader: boolean
	enterTheRoom: MouseEventHandler<HTMLImageElement>
	onClick: MouseEventHandler<HTMLButtonElement>
}

export function BeforeGame(props: beforegameprops) {
	return (
		<div className={styles.contentCreateGame}>
			<div className={styles.contentCreateGameBox}>
				<h1>{props.title}</h1>
				<div className={styles.contentPlayer}>
					<Image src={props.photoPlayerOne ?? signRoom} height={50} width={50} style={{
						borderRadius: '999px'
					}} />
					<span>{props.namePLayerOne ?? ''}</span>
				</div>
				{props.players === 2 && (
					<div className={styles.contentPlayer}>
						<Image src={props.photoPlayerTwo ?? signRoom} height={50} width={50} style={{
							borderRadius: '9999px',
							cursor: 'pointer'
						}}
							onClick={props.enterTheRoom}
						/>
						<span>{props.namePLayerTwo ?? 'Enter the room'}</span>
					</div>
				)}
				{props.leader && (
					<div className={styles.contentButton}>
						<button onClick={props.onClick}>Start</button>
					</div>
				)}
			</div>
		</div>
	)
}
