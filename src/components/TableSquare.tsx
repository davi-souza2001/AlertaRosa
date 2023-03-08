interface Props {
	text: string
	bg?: 'bg-[#FFD56A]' | 'bg-[#FF9D43]' | 'bg-[#E86161]'
}

export default function TableSquare({ text, bg }: Props) {
	return (
		<div className="flex items-center justify-start text-lg gap-3 my-3">
			<div className={`flex w-36 h-10 ${bg} rounded-lg`} />
			<p>{text}</p>
		</div>
	)
}
