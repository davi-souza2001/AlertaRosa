import Image from 'next/image'
import { MouseEventHandler } from 'react'

import signRoom from '../../../public/images/signRoom.svg'
import { playProps } from '../../core/Room'
import styles from './beforegame.module.css'

interface BeforeGameProps {
	title: string
	leader: boolean
	players: playProps[]
	roomLength: number
	enterTheRoom: () => Promise<void>
	onClick: MouseEventHandler<HTMLButtonElement>
	playing: boolean
}

export function BeforeGame(props: BeforeGameProps) {
	return (
		<div className={styles.contentCreateGame}>
			<div className={styles.contentCreateGameBox}>
				<h1>{props.title}</h1>
				<div className={styles.contentPlayer}>
					<Image src={props.players[0].photo ?? signRoom} height={50} width={50} style={{
						borderRadius: '999px'
					}} />
					<span>{props.players[0].name}</span>
				</div>
				{props.players.length === 2 && (
					<div className={styles.contentPlayer}>
						<Image src={props.players[1].photo ?? ''} height={50} width={50} style={{
							borderRadius: '9999px',
							cursor: 'pointer'
						}}
						/>
						<span>{props.players[1].name}</span>
					</div>
				)}
				{props.roomLength === 2 && props.players.length !== 2 ? (
					<div className={styles.contentPlayer}>
						<Image src={signRoom} height={50} width={50} style={{
							borderRadius: '9999px',
							cursor: 'pointer'
						}}
							onClick={props.enterTheRoom}
						/>
						<span>Enter the room</span>
					</div>
				) : false}
				{props.leader && !props.playing && (
					<div className={styles.contentButton}>
						<button onClick={props.onClick}>Start</button>
					</div>
				)}
				{props.playing && (
					<div className={styles.gamerWinGeral}>
						<div className={styles.gamerWin}>
							<div className={styles.gamerWinPhoto}>
								<Image src={props.players[0].photo ?? ''} height={30} width={30} style={{
									borderRadius: '999px'
								}} />
							</div>
							<div>
								<p>{props.players[0].name}</p>
							</div>
							<div>
								<p>Ganhou {props.players[0].score} pontos 🏆</p>
							</div>
						</div>
						{props.players[1] && (
							<div className={styles.gamerWin}>
								<div className={styles.gamerWinPhoto}>
									<Image src={props.players[1].photo ?? ''} height={30} width={30} style={{
										borderRadius: '999px'
									}} />
								</div>
								<div>
									<p>{props.players[1].name}</p>
								</div>
								<div>
									<p>Ganhou {props.players[1].score} pontos 🏆</p>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	)
}
