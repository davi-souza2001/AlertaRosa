import Image from 'next/image'

import { playProps } from '../../core/Room'

import signRoom from '../../../public/images/signRoom.svg'
import styles from './aftergame.module.css'

interface AfterGameProps {
	players: playProps[]
}

export function AfterGame(props: AfterGameProps) {

	function renderMedal() {
		if (props.players[1]) {
			return props.players[0].score > props.players[1]?.score ? '🥇' : '🥈'
		} else {
			return '🥇'
		}
	}

	function renderRanking() {
		if (props.players[1]) {
			if (props.players[0].score > props.players[1].score) {
				return (
					<>
						<div className={styles.contentPlayer}>
							<Image alt='Image User' src={props.players[0].photo ?? signRoom} height={60} width={60} style={{
								borderRadius: '999px',
							}} />
							<span>{props.players[0].name}</span>
							<p>🥇</p>
						</div>
						<div className={styles.contentPlayer}>
							<Image alt='Image User' src={props.players[1].photo ?? signRoom} height={60} width={60} style={{
								borderRadius: '999px',
							}} />
							<span>{props.players[1].name}</span>
							<p>🥈</p>
						</div>
					</>
				)
			} else {
				return (
					<>
						<div className={styles.contentPlayer}>
							<Image alt='Image User' src={props.players[1].photo ?? signRoom} height={60} width={60} style={{
								borderRadius: '999px',
							}} />
							<span>{props.players[1].name}</span>
							<p>🥇</p>
						</div>
						<div className={styles.contentPlayer}>
							<Image alt='Image User' src={props.players[0].photo ?? signRoom} height={60} width={60} style={{
								borderRadius: '999px',
							}} />
							<span>{props.players[0].name}</span>
							<p>🥈</p>
						</div>
					</>
				)
			}
		} else {
			return (
				<div className={styles.contentPlayer}>
					<Image alt='Image User' src={props.players[0].photo ?? signRoom} height={60} width={60} style={{
						borderRadius: '999px',
					}} />
					<span>{props.players[0].name}</span>
					<span>{renderMedal()}</span>
				</div>
			)
		}
	}

	return (
		<div className={styles.contentCreateGame}>
			<div className={styles.contentCreateGameBox}>
				<div className={styles.contentTitle}>
					<h1>Ranking</h1>
				</div>
				<div className={styles.contentPlayersArea}>
					{renderRanking()}
				</div>
			</div>
		</div>
	)
}
