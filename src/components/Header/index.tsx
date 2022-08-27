import Image from 'next/image'
import Test from '../../../public/images/testUser.jpg'
import styles from './Header.module.css'

export function Header() {
    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentTitle}>
                <h1>QuizDev</h1>
            </div>
            <div className={styles.contentOptions}>
                <p>Create Game</p>
                <p>Join a Game</p>
                <p>Ranking</p>
                <p>Rules</p>
            </div>
            <div className={styles.contentProfile}>
                <div className={styles.contentIntoProfile}>
                    <span>Davi Souza</span>
                    <Image src={Test} height={50} width={50} style={{ borderRadius: "100%" }} />
                </div>
            </div>
        </div>
    )
}