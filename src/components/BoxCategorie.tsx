import Router from "next/router"

interface BoxCategorieProps {
	image?: string
	content: string
	link?: string
}

export function BoxCategorie(props: BoxCategorieProps) {
	return (
		<div className="h-52 w-48 rounded-lg lg:border-2 lg:border-transparent lg:hover:border-roxo cursor-pointer transition-all" onClick={() => props.link && Router.push(props.link)}>
			<div className="h-3/5 w-full rounded-t-lg bg-rosa">
				teste
			</div>
			<div className="h-2/5 w-full flex items-center justify-center rounded-b-lg bg-slate-50 text-black">
				{props.content}
			</div>
		</div>
	)
}
