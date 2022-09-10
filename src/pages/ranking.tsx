import { BoxRanking } from "../components/BoxRanking"
import { Header } from "../components/Header"

import styles from '../styles/ranking.module.css'

export default function ranking() {
	return (
		<div className={styles.contentGeral}>
			<Header />
			<div className={styles.contentAreaBox}>
				<div className={styles.contentBox}>
					<h1>Players Ranking 🏆</h1>
					<BoxRanking rank="first" />
					<p>Soon...</p>
					{/* <BoxRanking rank="second" />
					<BoxRanking rank="third" /> */}
				</div>
			</div>
		</div>
	)
}
