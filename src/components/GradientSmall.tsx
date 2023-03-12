interface Props{
    flex?: string
    padding_top?: string
    gap?: string
    children: any
		start?: boolean
}

export default function GradientSm({ flex, padding_top, gap, start, children }: Props){
    return(
        <div className={`flex flex-${flex} w-full ${start ? 'items-start justify-start' : 'items-center justify-center'} h-[30%] bg-gradient-to-b from-roxo to-rosa rounded-b-lg ${padding_top}`}>
            <div className={`flex flex-${flex} items-center justify-center h-full gap-${gap}`}>
                { children }
            </div>
        </div>
    )
}
