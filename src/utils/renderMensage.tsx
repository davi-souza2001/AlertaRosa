import { AnswersListProps } from "../pages/questions/[categorie]";

export function renderMensage(list: AnswersListProps[]): string{
	const redQuestions: AnswersListProps[] = []
	const orangeQuestions: AnswersListProps[] = []
	const yellowQuestions: AnswersListProps[] = []

	list.map(question => {
		question.categorie === 'red' && redQuestions.push(question)
		question.categorie === 'yellow' && yellowQuestions.push(question)
		question.categorie === 'orange' && orangeQuestions.push(question)
	})

	if(redQuestions.length >= 2){
		return 'red'
	} else if(orangeQuestions.length >= 3){
		return 'orange'
	} else{
		return 'yellow'
	}
}
