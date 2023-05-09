interface Props {
	flex?: string
	padding_top?: string
	items?: string
	justify?: 'justify-center' | 'justify-start'
	children: any
	bg?: string
}

export default function BottomLg({ flex, padding_top, items, children, justify, bg }: Props) {
	return (
		<div className={`flex flex-${flex} w-full pt-${padding_top} bg-${bg ?? 'white'} items-${items} ${justify}`}>
			{children}
		</div>
	)
}
