import UseAuth from "../service/hooks/useAuth"

interface LoadingProps {
	children: any
}

export function Loading(props: LoadingProps) {
	const { loading } = UseAuth()

	return (
		<>
			{loading ? (
				<div className="h-screen w-screen flex items-center justify-center bg-red-500">
					ola
				</div>
			) : props.children}
		</>
	)
}
