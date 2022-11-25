import Image from 'next/image'

import Test from '../../../public/images/testUser.jpg'
import styles from './BoxRanking.module.css'

interface BoxRankingProps {
	rank: string
	name: string
	photo: string
}

export function BoxRanking(props: BoxRankingProps) {
	return (
		<div className={styles.contentGeral}>
			<div className={styles.contentImage}>
				<Image alt='Image User' src={props.photo ?? Test} height={35} width={35} style={{ borderRadius: '9999px', marginRight: '10px' }} />
			</div>
			<h1>{props.name}</h1>
			<p>{props.rank === 'first' && '🥇'}</p>
			<p>{props.rank === 'second' && '🥈'}</p>
			<p>{props.rank === 'third' && '🥉'}</p>
		</div>
	)
}
