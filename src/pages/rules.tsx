import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { CheckCircleIcon } from '@chakra-ui/icons'

import { Header } from "../components/Header"

import styles from '../styles/rules.module.css'

export default function rules() {
	return (
		<div className={styles.contentGeral}>
			<Header />
			<div className={styles.contentRules}>
				<List spacing={3}>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color='green.500' style={{marginTop: '40px'}} />
						Lorem ipsum dolor sit amet, consectetur adipisicing elit
					</ListItem>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color='green.500' style={{marginTop: '40px'}}/>
						Assumenda, quia temporibus eveniet a libero incidunt suscipit
					</ListItem>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color='green.500' style={{marginTop: '40px'}}/>
						Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
					</ListItem>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color='green.500' style={{marginTop: '40px'}}/>
						Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
					</ListItem>
				</List>
			</div>
		</div>
	)
}
