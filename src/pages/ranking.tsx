import { BoxRanking } from "../components/BoxRanking"
import { Header } from "../components/Header"
import UseAuth from "../service/hooks/useAuth"

import styles from '../styles/ranking.module.css'

export default function Ranking() {
	const { rankingUsers } = UseAuth()

	console.log(rankingUsers)

	return (
		<div className={styles.contentGeral}>
			<Header />
			<div className={styles.contentAreaBox}>
				<div className={styles.contentBox}>
					<h1>Players Ranking 🏆</h1>
					<BoxRanking rank="first" />
					<BoxRanking rank="second" />
					<BoxRanking rank="third" />
				</div>
			</div>
		</div>
	)
}
