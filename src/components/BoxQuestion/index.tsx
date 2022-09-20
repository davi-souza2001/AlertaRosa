import { MouseEventHandler } from 'react'

import styles from './boxquestion.module.css'

interface boxQuestionProps {
	text: string
	numberQuestion: number
	onClick?: MouseEventHandler<HTMLDivElement>
	selected: boolean
}

export function BoxQuestion(props: boxQuestionProps) {
	return (
		<div className={styles.contentGeral} onClick={props.onClick}>
			<div className={styles.contentNumberQuestion}>
				<span>{props.numberQuestion}</span>
			</div>
			<div className={props.selected ? styles.contentAnswersSelected : styles.contentAnswers}>
				<span>{props.text}</span>
			</div>
		</div>
	)
}
