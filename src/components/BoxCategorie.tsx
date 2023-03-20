import Router from "next/router"

interface BoxCategorieProps {
	image?: string
	content: string
}

export function BoxCategorie(props: BoxCategorieProps) {
	return (
		<div className="h-56 w-48 rounded-lg border-slate-300 cursor-pointer lg:hover:opacity-100 lg:opacity-95 transition-opacity" onClick={() => Router.push('/startQuestions/questions')}>
			<div className="h-3/5 w-full rounded-t-lg bg-rosa">
				teste
			</div>
			<div className="h-2/5 w-full flex items-center justify-center rounded-b-lg bg-slate-50">
				{props.content}
			</div>
		</div>
	)
}
