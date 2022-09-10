import styles from './boxquestion.module.css'

interface boxQuestionProps {
	text: string
	numberQuestion: number
}

export function BoxQuestion(props: boxQuestionProps) {
	return (
		<div className={styles.contentGeral}>
			<div className={styles.contentNumberQuestion}>
				<span>{props.numberQuestion}</span>
			</div>
			<div className={styles.contentAnswers}>
				<span>{props.text}</span>
			</div>
		</div>
	)
}
