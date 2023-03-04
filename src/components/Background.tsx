interface BackgroundProps{
	children: any
	className?: string
}

export default function Background(props: BackgroundProps) {
    return(
		<div className={`w-screen h-screen bg-background ${props.className}`}>
			{props.children}
		</div>
    )
}