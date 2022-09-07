import Image from 'next/image'

import logoTitle from '../../public/images/logoTitle.svg'
import logoGoogle from '../../public/images/logoGoogle.png'

import styles from '../styles/login.module.css'
import UseAuth from '../service/hooks/useAuth'

export default function login() {
	const { loginGoogle } = UseAuth()

	return (
		<div className={styles.contentGeral}>
			<div className={styles.contentLeft}>
				<div className={styles.contentImage}>
					<Image src={logoTitle} />
					<h1>The quiz game made for devs!</h1>
				</div>
				<div className={styles.contentDescription}>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ab beatae blanditiis temporibus eveniet quibusdam voluptatum autem assumenda labore non. Quo fuga nobis doloribus suscipit illo debitis quam adipisci cupiditate!</p>
				</div>
			</div>
			<div className={styles.contentRight}>
				<h1>Login</h1>
				<div className={styles.contentLogin}>
					<h2>Continue with</h2>
					<div className={styles.contentBoxLoginPlatform} onClick={loginGoogle}>
						<Image src={logoGoogle} height={30} width={30} />
						<p>Sign in with Google</p>
					</div>
				</div>
			</div>
		</div>
	)
}
