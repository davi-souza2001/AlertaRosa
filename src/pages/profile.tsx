import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import Image from 'next/image'

import { Header } from '../components/Header'

import styles from '../styles/profile.module.css'
import UseAuth from '../service/hooks/useAuth'

export default function Profile() {
	const { logout, user } = UseAuth()

	return (
		<div className={styles.contentGeral}>
			<Header />
			<div className={styles.contentAreaExperience}>
				<div className={styles.contentProgressBar}>
					<CircularProgress value={user.xp} size={'150px'}>
						<CircularProgressLabel>{user.xp}%</CircularProgressLabel>
					</CircularProgress>
				</div>
				<div className={styles.contentLevelAndExperience}>
					<h1>Level 01</h1>
				</div>
			</div>
			<div className={styles.contentAreaUser}>
				<div className={styles.contentUser}>
					{user.photo !== '' ? (
						<Image src={user.photo} height={70} width={70} style={{ borderRadius: "9999px" }} />
					) : false}
					<h2>{user.name !== '' ? user.name : ''}</h2>
				</div>
			</div>
			<div className={styles.contentLogout}>
				<div className={styles.contentButtonLogout}>
					<button onClick={logout}>Logout</button>
				</div>
			</div>
		</div>
	)
}
