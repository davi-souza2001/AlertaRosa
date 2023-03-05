interface Props{
    height: string
    flex?: string
    padding_top?: string
    gap?: string
    children: any
}

export default function Gradient({ height, flex, padding_top, gap, children }: Props){
    return(
        <div className={`flex flex-${flex} w-full items-center justify-center h-[${height}] bg-gradient-to-b from-roxo to-rosa rounded-b-lg ${padding_top}`}>
            <div className={`flex flex-${flex} items-center justify-center h-full gap-${gap}`}>
                { children }
            </div>
        </div>
    )
}