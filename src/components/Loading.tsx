import { ArrowClockwise } from "phosphor-react"
import UseAuth from "../service/hooks/useAuth"

interface LoadingProps {
	children: any
}

export function Loading(props: LoadingProps) {
	const { loading } = UseAuth()

	return (
		<>
			{loading ? (
				<div className="h-screen w-screen flex flex-col items-center justify-center bg-indigo-500 text-white gap-2">
					<ArrowClockwise className="animate-spin text-3xl"/>
					<p className="md:text-2xl">Carregando...</p>
				</div>
			) : props.children}
		</>
	)
}
