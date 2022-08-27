import { Header } from '../components/Header'
import logoTitle from '../../public/images/logoTitle.svg'
import styles from '../styles/index.module.css'
import Image from 'next/image'

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
    </div>
  )
}