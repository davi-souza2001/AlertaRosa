import { AnswersListProps } from "../pages/questions/[categorie]";

interface RenderMensageProps {
	value: string
	redPercentage: number
	orangePercentage: number
	yellowPercentage: number
}

export function renderMensage(list: AnswersListProps[]): RenderMensageProps {
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
		return {
			value: 'red',
			redPercentage,
			orangePercentage,
			yellowPercentage
		}
	} else if (maxValue === orangePercentage) {
		return {
			value: 'orange',
			redPercentage,
			orangePercentage,
			yellowPercentage
		}
	} else if (maxValue === yellowPercentage) {
		return {
			value: 'yellow',
			redPercentage,
			orangePercentage,
			yellowPercentage
		}
	} else {
		return {
			value: 'invalid',
			redPercentage,
			orangePercentage,
			yellowPercentage
		}
	}
}
