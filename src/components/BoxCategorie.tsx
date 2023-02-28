import Router from "next/router"

interface Props {
	image: string
	content: string
}

export function BoxCategorie() {
	return (
		<div className="h-56 w-48 rounded-lg border-slate-300" onClick={() => Router.push('/startQuestions/test')}>
			<div className="h-3/5 w-full rounded-t-lg bg-indigo-500">
				teste
			</div>
			<div className="h-2/5 w-full rounded-b-lg bg-slate-50 border-b-4 border-x-2 border-slate-300">
				Alo
			</div>
		</div>
	)
}
