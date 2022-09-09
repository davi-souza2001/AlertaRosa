import Router from 'next/router'
import { useState } from 'react'

import { Header } from '../components/Header'
import { ProviderRoom } from '../core/ProviderRoom'
import { RoomProvider } from '../provider/RoomProvider'

import styles from '../styles/joinRoom.module.css'

export default function joinRoom() {
	const [idRoom, setIdRoom] = useState('')
	const providerRooms = new ProviderRoom(new RoomProvider())

	async function checkIfExists() {
		if (idRoom) {
			const exists = await providerRooms.sign(idRoom)
			!exists ? alert('Room not found') : Router.push(`/room/${idRoom}`)
		} else {
			alert('Id undefined')
		}
	}

	return (
		<div className={styles.contentGeral}>
			<Header />
			<div className={styles.contentCreateGame}>
				<div className={styles.contentCreateGameBox}>
					<h1>Join Room</h1>
					<form onSubmit={(e) => {
						e.preventDefault()
						checkIfExists()
					}}>
						<input type="text" placeholder='Room id' onChange={(e) => setIdRoom(e.target.value)} />
						<button type={'submit'}>Joins</button>
					</form>
				</div>
			</div>
		</div>
	)
}
