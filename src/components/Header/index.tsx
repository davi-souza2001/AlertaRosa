import Image from 'next/image'
import {
	Menu,
	MenuButton,
	MenuList,
	Button,
} from '@chakra-ui/react'
import { HiChevronDown } from "react-icons/hi"
import Router from 'next/router'

import Test from '../../../public/images/testUser.jpg'
import styles from './Header.module.css'
import UseAuth from '../../service/hooks/useAuth'

export function Header() {
	const { user } = UseAuth()

	return (
		<div className={styles.contentGeral}>
			<div className={styles.contentTitle}>
				<h1 onClick={() => Router.push('/')}>QuizDev</h1>
			</div>
			<div className={styles.contentOptions}>
				<p onClick={() => Router.push('/createRoom')}>Create Room</p>
				<p onClick={() => Router.push('/joinRoom')}>Join Room</p>
				<p onClick={() => Router.push('/ranking')}>Ranking</p>
				<p onClick={() => Router.push('/rules')}>Rules</p>
			</div>
			<div className={styles.contentProfile}>
				<div className={styles.contentIntoProfile} onClick={() => Router.push('/profile')}>
					<span>{user.name !== '' ? user.name : 'No user'}</span>
					{user.photo !== '' ? (
						<Image alt='Image User'	src={user.photo} height={50} width={50} style={{ borderRadius: "100%" }} />
					) : false}
				</div>
			</div>
			<div className={styles.contentMobile}>
				<Menu>
					<MenuButton as={Button} style={{
						backgroundColor: '#392664',
						width: '130px',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: '30px'
					}}>
						<div className={styles.contentIntoMobile}>
							<Image alt='Image User'	src={user.photo} height={50} width={50} style={{ borderRadius: "100%" }} />
							<HiChevronDown />
						</div>
					</MenuButton>
					<MenuList style={{ backgroundColor: '#150633', border: 'none' }}>
						<div className={styles.contentMenuList}>
							<p onClick={() => Router.push('/createRoom')}>Create Room</p>
							<p onClick={() => Router.push('/joinRoom')}>Join Room</p>
							<p onClick={() => Router.push('/ranking')}>Ranking</p>
							<p onClick={() => Router.push('/rules')}>Rules</p>
							<p onClick={() => Router.push('/profile')}>Profile</p>
						</div>
					</MenuList>
				</Menu>
			</div>
		</div>
	)
}
