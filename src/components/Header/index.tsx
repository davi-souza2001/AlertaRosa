import Image from 'next/image'
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
} from '@chakra-ui/react'
import { HiChevronDown } from "react-icons/hi"

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
			<div className={styles.contentMobile}>
				<Menu>
					<MenuButton as={Button} style={{
						backgroundColor: '#684aae',
						width: '130px',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: '30px'
					}}>
						<div className={styles.contentIntoMobile}>
							<Image src={Test} height={50} width={50} style={{ borderRadius: "100%" }} />
							<HiChevronDown />
						</div>
					</MenuButton>
					<MenuList style={{
						backgroundColor: '#150633',
						border: 'none',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						<h1>asd</h1>
					</MenuList>
				</Menu>
			</div>
		</div>
	)
}
