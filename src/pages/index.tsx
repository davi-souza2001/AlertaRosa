import { Header } from '../components/Header'
import logoTitle from '../../public/images/logoTitle.svg'
import styles from '../styles/index.module.css'
import Image from 'next/image'
import Router from 'next/router'

export default function Home() {
	return (
		<div className={styles.contentGeral}>
			<Header />
			<div className={styles.contentTitle}>
				<Image src={logoTitle} width={1200} height={400} />
			</div>
			<div className={styles.contentSubTitle}>
				<p>The quiz game made for devs!</p>
			</div>
			<div className={styles.contentMoreInformation}>
				<p>Everything is ready for fun learning!</p>
			</div>
			<div className={styles.contentCreateGame}>
				<div className={styles.contentIntoCreateGame}>
					<p onClick={() => Router.push('/createGame')}>Create a new game 🎮</p>
				</div>
			</div>
		</div>
	)
}
