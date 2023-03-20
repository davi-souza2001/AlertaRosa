interface BackgroundProps{
	children: any
	className?: string
}

export default function Background(props: BackgroundProps) {
    return(
		<div className={`w-full bg-background ${props.className}`}>
			{props.children}
		</div>
    )
}