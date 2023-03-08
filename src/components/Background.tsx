interface BackgroundProps{
	children: any
	className?: string
}

export default function Background(props: BackgroundProps) {
    return(
		<div className={`w-full bg-background ${props.className} pb-10`}>
			{props.children}
		</div>
    )
}