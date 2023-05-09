interface Props {
	flex?: string
	padding_top?: string
	items?: string
	bg?: string
	children: any
}

export default function BottomSm({ flex, padding_top, items, children, bg }: Props) {
	return (
		<div className={`flex flex-${flex} w-full h-[20%] pt-${padding_top} bg-${bg ?? 'white'} items-${items} justify-center`}>
			{children}
		</div>
	)
}
