import Router from 'next/router'
import { useState } from 'react'

import { Header } from '../components/Header'

import styles from '../styles/joinRoom.module.css'

export default function JoinRoom() {
	const [idRoom, setIdRoom] = useState('')

	function handleJoinRoom() {
		if (idRoom.length !== 36) {
			alert('Invalid Id')
			return false
		} else {
			Router.push(`/room/${idRoom}`)
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
						handleJoinRoom()
					}}>
						<input type="text" placeholder='Room id' onChange={(e) => setIdRoom(e.target.value)} />
						<button type={'submit'}>Joins</button>
					</form>
				</div>
			</div>
		</div>
	)
}
