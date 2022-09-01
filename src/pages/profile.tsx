import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import Image from 'next/image'

import Test from '../../public/images/testUser.jpg'
import { Header } from '../components/Header'
import styles from '../styles/profile.module.css'

export default function profile() {
	return (
		<div className={styles.contentGeral}>
			<Header />
			<div className={styles.contentAreaExperience}>
				<div className={styles.contentProgressBar}>
					<CircularProgress value={90} size={'150px'}>
						<CircularProgressLabel>90%</CircularProgressLabel>
					</CircularProgress>
				</div>
				<div className={styles.contentLevelAndExperience}>
					<h1>Level: 123</h1>
					<p>Experiencie</p>
				</div>
			</div>
			<div className={styles.contentAreaUser}>
				<div className={styles.contentUser}>
					<Image src={Test} height={70} width={70} style={{ borderRadius: "9999px" }} />
					<h2>Davi Souza</h2>
				</div>
			</div>
			<div className={styles.contentLogout}>
				<div className={styles.contentButtonLogout}>
					<button>Logout</button>
				</div>
			</div>
		</div>
	)
}
