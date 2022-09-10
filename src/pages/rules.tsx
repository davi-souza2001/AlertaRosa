import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { CheckCircleIcon } from '@chakra-ui/icons'

import { Header } from "../components/Header"

import styles from '../styles/rules.module.css'

export default function rules() {
	return (
		<div className={styles.contentGeral}>
			<Header />
			<div className={styles.contentRules}>
				<List spacing={4}>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color='green.500' style={{ marginTop: '40px' }} />
						The questions here are for fun and studies, nothing more.
					</ListItem>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color='green.500' style={{ marginTop: '40px' }} />
						Although any game, always keep respect with other players!
					</ListItem>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color='green.500' style={{ marginTop: '40px' }} />
						Room span is permanent ban!
					</ListItem>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color='green.500' style={{ marginTop: '40px' }} />
						Let's play! 🚀
					</ListItem>
				</List>
			</div>
		</div>
	)
}
