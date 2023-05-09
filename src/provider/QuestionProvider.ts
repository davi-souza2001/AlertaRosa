import { addDoc, collection } from "firebase/firestore"
import { ProviderQuestionProps } from "../core/ProviderQuestion"

import { QuestionProps } from "../core/Question"
import { db } from "../firebase/config"

export class QuestionProvider implements ProviderQuestionProps {

	private questions: QuestionProps[] = [
		{
			id: 0,
			enunciation: 'Você tem medo de expressar sua opinião, expressar seus sentimentos ou pedir algo que precisa?',
			categorie: 'yellow'
		},
		{
			id: 1,
			enunciation: 'Seu parceiro faz comentários depreciativos sobre você?',
			categorie: 'yellow'
		},
		{
			id: 2,
			enunciation: 'Seu parceiro tenta controlar todos os detalhes do seu relacionamento?',
			categorie: 'yellow'
		},
		{
			id: 3,
			enunciation: 'Seu parceiro é exigente ou muito ciumento?',
			categorie: 'yellow'
		},
		{
			id: 4,
			enunciation: 'Você perdeu o contato com seus amigos ou familiares?',
			categorie: 'yellow'
		},
		{
			id: 5,
			enunciation: 'Você tem medo do temperamento do seu parceiro?',
			categorie: 'yellow'
		},
		{
			id: 6,
			enunciation: 'Você se sente seguida ou perseguida?',
			categorie: 'yellow'
		},
		{
			id: 7,
			enunciation: 'Ele o tenta afastar de amigos, parentes e vizinhos?',
			categorie: 'yellow'
		},
		{
			id: 8,
			enunciation: 'Sente-se isolada, acuada?',
			categorie: 'yellow'
		},
		{
			id: 9,
			enunciation: 'Ele diz que você não precisa trabalhar e/ou estudar?',
			categorie: 'yellow'
		},
		{
			id: 10,
			enunciation: 'Você tem medo de ficar sozinha com seu namorado, marido ou companheiro?',
			categorie: 'orange'
		},
		{
			id: 11,
			enunciation: 'Seu parceiro joga ou quebra as coisas quando está com raiva?',
			categorie: 'orange'
		},
		{
			id: 12,
			enunciation: 'Ele destrói seus objetos, roupas, fotos, documentos, móveis ou seus instrumentos de trabalho?',
			categorie: 'orange'
		},
		{
			id: 13,
			enunciation: 'Ele tem envolvimento com criminosos e lhe ameaça dizendo que alguém fará o "serviço sujo" por ele?',
			categorie: 'red'
		},
		{
			id: 14,
			enunciation: 'Seu parceiro já abusou fisicamente de você?',
			categorie: 'red'
		},
		{
			id: 15,
			enunciation: 'Seu parceiro te pressiona a se envolver em atividades sexuais desconfortáveis?',
			categorie: 'red'
		},
		{
			id: 16,
			enunciation: 'As brigas e agressões estão ficando mais frequentes e mais graves?',
			categorie: 'red'
		},
		{
			id: 17,
			enunciation: 'Durante as brigas ele parece ficar sem controle?',
			categorie: 'red'
		},
		{
			id: 18,
			enunciation: 'Ele faz questão de lhe contar que tem uma arma ou a exibe para você?',
			categorie: 'red'
		},
		{
			id: 19,
			enunciation: 'Maltrata ou mata seus animais de estimação?',
			categorie: 'red'
		},
		{
			id: 20,
			enunciation: 'Quando você tenta se separar ele fica telefonando, faz escândalo "na porta" da sua casa ou trabalho pedindo mais uma chance?',
			categorie: 'red'
		},
		{
			id: 21,
			enunciation: 'Ele ameaça seus parentes e amigos?',
			categorie: 'red'
		},
		{
			id: 22,
			enunciation: 'Ele diz que se você não for dele não será de mais ninguém?',
			categorie: 'red'
		},
		{
			id: 23,
			enunciation: 'Você já foi vítima de violência doméstica ou familiar?',
			categorie: 'red'
		},
		{
			id: 24,
			enunciation: 'Você acredita que o agressor tem consciência de que praticou um crime com a violência?',
			categorie: 'red'
		},
		{
			id: 25,
			enunciation: 'Você participaria de uma prática restaurativa?',
			categorie: 'red'
		},
		{
			id: 26,
			enunciation: 'Você sofreu dano Psicológico?',
			categorie: 'red'
		},
		{
			id: 27,
			enunciation: 'Você sofreu dano Moral?',
			categorie: 'red'
		},
		{
			id: 28,
			enunciation: 'Você sofreu dano material?',
			categorie: 'red'
		},
		{
			id: 29,
			enunciation: 'Você sofreu dano físico?',
			categorie: 'red'
		}
	]

	async create() {
		this.questions.map(async (question) => {
			await addDoc(collection(db, "questions"), question)
		})

		console.log('Submitted')
	}
}
