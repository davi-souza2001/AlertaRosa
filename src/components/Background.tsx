interface BackgroundProps{
	children: any
	className?: string
}

export default function Background(props: BackgroundProps) {
    return(
		<div className={`w-full bg-background ${props.className} pb-2`}>
			{props.children}
		</div>
    )
}