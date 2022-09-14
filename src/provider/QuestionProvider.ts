import { addDoc, collection } from "firebase/firestore"

import { QuestionProps } from "../core/Question"
import { db } from "../firebase/config"

export class QuestionProvider {

	private questions: QuestionProps[] = [
		{
			id: 0,
			enunciation: 'A função fetch() do JavaScript serve para:',
			answer: [
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'Percorrer cursores de consultas de banco de dados.',
					correct: false
				},
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'Acessar e manipular partes do pipelina HTTP.',
					correct: true
				},
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'Filtrar dados da memória de acordo com os parâmetros.',
					correct: false
				}
			]
		},
		{
			id: 1,
			enunciation: `Qual método Javscript permite o agrupamento de todos os elementos de um Array em
		uma string com a possibilidade de definir o caractere de concatenação? `,
			answer: [
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'join()',
					correct: true
				},
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'ToString()',
					correct: false
				},
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'ToChar()',
					correct: false
				}
			]
		},
		{
			id: 2,
			enunciation: 'Assinale a alternativa correta com relação à Template Literals:',
			answer: [
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'Bibliotecas Javascript de back-end voltadas primariamente à implementação de APIs REST.',
					correct: false
				},
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'Recurso Javascript que possibilita a interpolação e a substituição de variáveis em strings.',
					correct: true
				},
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'Bibliotecas Bootstrap voltadas à aceleração da construção de sites responsivos e voltados à mobile.',
					correct: false
				}
			]
		},
		{
			id: 3,
			enunciation: `Em Javascript existem diferentes tipos de operadores, marque a alternativa que contém
		somente operadores relacionais?`,
			answer: [
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'Typeof, In',
					correct: false
				},
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: '<=, >=, <<, >>',
					correct: false
				},
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'In, Instanceof',
					correct: true
				}
			]
		},
		{
			id: 4,
			enunciation: `Javascript é uma linguagem que tem bastante problemas de compatibilidade entre navegadores,
		e é de comum conhecimento que existem navegadores que se encaixam melhor à linguagem. Qual dos
		navegadores abaixo tem o maior problema de compatibilidade com Javascript?`,
			answer: [
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'Google Chrome.',
					correct: false
				},
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'Mozilla Firefox.',
					correct: false
				},
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'Internet Explorer.',
					correct: true
				}
			]
		},
		{
			id: 5,
			enunciation: `O comando "document.getElementById('demo').innerHTML = Date()", numa página web na qual
		esse código seja aplicado, o elemento que é compatível com a estrutura do comando para receber a data
		corrente é:`,
			answer: [
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: '<p "demo">H</p>',
					correct: false
				},
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: '<p id="demo">H</p>',
					correct: true
				},
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: '<p  class="demo">H</p>',
					correct: false
				}
			]
		},
		{
			id: 6,
			enunciation: `Na linguagem JavaScript, ao invocar o método getElementsByClassName, do objeto
		document, será retornado:`,
			answer:
				[
					{
						id: Math.floor(Date.now() * Math.random()).toString(36),
						value: '<p "demo">H</p>',
						correct: false
					},
					{
						id: Math.floor(Date.now() * Math.random()).toString(36),
						value: '<p id="demo">H</p>',
						correct: true
					},
					{
						id: Math.floor(Date.now() * Math.random()).toString(36),
						value: '<p  class="demo">H</p>',
						correct: false
					}
				]
		},
		{
			id: 7,
			enunciation: `JavaScript é uma linguagem que sofre muito com compatibilidade entre navegadores.
		A jQuery sofre com o mesmo problema. Animações, manipulação de DOM e outra tarefas corriqueiras
		são mais complexas e menos produtivas ao usar o jQuery.`,
			answer: [
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'Sim',
					correct: true
				},
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'Não',
					correct: false
				}
			]
		}
	]

	async handleSubmitQuestions() {
		const questions = this.questions

		questions.map(async (question) => {
			await addDoc(collection(db, "questions"), question)
		})

		console.log('Submitted')
	}
}
