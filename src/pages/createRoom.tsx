import Router from 'next/router'
import { useState } from 'react'

import { Header } from '../components/Header'
import UseAuth from '../service/hooks/useAuth'
import UseRoom from '../service/hooks/useRoom'

import styles from '../styles/createRoom.module.css'

export default function createRoom() {
	const { create } = UseRoom()
	const { user } = UseAuth()
	const [title, setTitle] = useState('')
	const [playersLength, setPlayersLength] = useState(0)

	async function handleSubmitNewRoom() {
		if (playersLength <= 0) {
			alert('Players number could not be 0')
			return
		} else if (playersLength > 2) {
			alert('Players number could not be more 2')
			return
		} else if (title.length > 20) {
			alert('Invalid title size')
			return
		}

		const room = {
			id: crypto.randomUUID(),
			title,
			leader: user.email,
			playersLength: playersLength,
			players: [
				{
					email: user.email,
					photo: user.photo,
					name: user.name
				}
			],
			playing: false,
			questionNumber: 0
		}

		create(room, user.email)

		Router.push(`/room/${room.id}`)
	}

	return (
		<div className={styles.contentGeral}>
			<Header />
			<div className={styles.contentCreateGame}>
				<div className={styles.contentCreateGameBox}>
					<h1>Create Room</h1>
					<form onSubmit={(e) => {
						e.preventDefault()
						handleSubmitNewRoom()
					}}>
						<input type="text" placeholder='Room name' onChange={(e) => setTitle(e.target.value)} />
						<input type="number" placeholder='Players' onChange={(e) => setPlayersLength(+e.target.value)} />
						<button type={'submit'}>Create</button>
					</form>
					<p>Create a room to play with your friends! Or if you prefer, play single played too!</p>
				</div>
			</div>
		</div>
	)
}
