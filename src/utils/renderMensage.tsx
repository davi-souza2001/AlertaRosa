import { AnswersListProps } from "../pages/questions/[categorie]";

export function renderMensage(list: AnswersListProps[]): string {
	const total: number = list.length
	const redQuestions: AnswersListProps[] = []
	const orangeQuestions: AnswersListProps[] = []
	const yellowQuestions: AnswersListProps[] = []

	list.map(question => {
		question.categorie === 'red' && redQuestions.push(question)
		question.categorie === 'yellow' && yellowQuestions.push(question)
		question.categorie === 'orange' && orangeQuestions.push(question)
	})

	const redPercentage = (redQuestions.length / total) * 100
	const orangePercentage = (orangeQuestions.length / total) * 100
	const yellowPercentage = (yellowQuestions.length / total) * 100
	const percentages = [redPercentage, orangePercentage, yellowPercentage]

	const maxValue = percentages.reduce((prev, current) => prev > current ? prev : current)

	if (maxValue === redPercentage) {
		return 'red'
	} else if (maxValue === orangePercentage) {
		return 'orange'
	} else if (maxValue === yellowPercentage) {
		return 'yellow'
	} else {
		return 'invalid'
	}
}
