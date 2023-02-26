import { BoxRanking } from "../components/BoxRanking"
import { Header } from "../components/Header"
import UseAuth from "../service/hooks/useAuth"

import styles from '../styles/ranking.module.css'

export default function Ranking() {
	const { rankingUsers } = UseAuth()

	function getRanking(index: number): string {
		if (index === 0) {
			return 'first'
		} else if (index === 1) {
			return 'second'
		} else if (index === 2) {
			return 'third'
		}

		return ''
	}

	return (
		<div className={styles.contentGeral}>
			<Header />
			<div className={styles.contentAreaBox}>
				<div className={styles.contentBox}>
					<h1>Players Ranking 🏆</h1>
					{rankingUsers.map((user, index) => {
						return (
							<BoxRanking
								rank={getRanking(index)}
								name={user.name}
								photo={user.photo}
								key={index}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}
