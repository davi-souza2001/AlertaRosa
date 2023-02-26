import Image from 'next/image'

import logoTitle from '../../public/images/logoTitle.svg'
import logoGoogle from '../../public/images/logoGoogle.png'

import UseAuth from '../service/hooks/useAuth'
import styles from '../styles/login.module.css'

export default function Login() {
	const { loginGoogle } = UseAuth()

	return (
			<div className={styles.contentGeral}>
				<div className={styles.contentLeft}>
					<div className={styles.contentImage}>
						<Image alt='Logo' src={logoTitle} />
						<h1>The quiz game made for devs!</h1>
					</div>
					<div className={styles.contentDescription}>
						<p>Welcome to QuizDev! The game made for devs. Here you can learn and have fun by testing your skills. And the best! You can also call friends to have fun with you, forming rooms and hours of fun!</p>
					</div>
				</div>
				<div className={styles.contentRight}>
					<div className={styles.contentLogoMobile}>
						<Image alt='Logo' src={logoTitle} />
					</div>
					<h1>Login</h1>
					<div className={styles.contentLogin}>
						<h2>Continue with</h2>
						<div className={styles.contentBoxLoginPlatform} onClick={loginGoogle}>
							<Image alt='Logo' src={logoGoogle} height={30} width={30} />
							<p>Sign in with Google</p>
						</div>
					</div>
				</div>
			</div>
	)
}
