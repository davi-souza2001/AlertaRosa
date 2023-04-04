import Image from "next/image"
import Router from "next/router"

interface BoxCategorieProps {
	image: any
	content: string
	link?: string
}

export function BoxCategorie(props: BoxCategorieProps) {
	return (
		<div className="h-52 w-48 rounded-lg lg:border-2 lg:border-transparent lg:hover:border-roxo cursor-pointer transition-all" onClick={() => props.link && Router.push(props.link)}>
			<div className="flex h-4/5 w-full justify-center items-center p-5 rounded-t-lg bg-rosa">
				<Image src={props.image} alt="imagem container" className="rounded-lg" />
			</div>
			<div className="h-1/5 w-full flex items-center justify-center rounded-b-lg bg-slate-50 text-black">
				{props.content}
			</div>
		</div>
	)
}
