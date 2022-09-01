import styles from './boxquestion.module.css'

export function BoxQuestion() {
	return (
		<div className={styles.contentGeral}>
			<div className={styles.contentNumberQuestion}>
				<span>1</span>
			</div>
			<div className={styles.contentAnswers}>
				<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
			</div>
		</div>
	)
}
