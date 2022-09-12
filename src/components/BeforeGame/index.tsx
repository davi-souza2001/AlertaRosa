import Image from 'next/image'

import signRoom from '../../../public/images/signRoom.svg'
import styles from './beforegame.module.css'

export function BeforeGame() {
	return (
		<div className={styles.contentCreateGame}>
			<div className={styles.contentCreateGameBox}>
				<h1>Algo</h1>
				<div className={styles.contentPlayer}>
					<Image src={signRoom} height={50} width={50} style={{
						borderRadius: '999px'
					}} />
					<span>as'</span>
				</div>
				{/* {props.players === 2 && (
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
				)} */}
			</div>
		</div>
	)
}
