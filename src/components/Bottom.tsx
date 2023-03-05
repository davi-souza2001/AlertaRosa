interface Props{
    height: string
    flex?: string
    padding_top?: string
    items?: string
    children: any
}

export default function Bottom({ height, flex, padding_top, items, children }: Props){
    return(
        <div className={`flex flex-${flex} w-full h-[${height}] pt-${padding_top} bg-background items-${items} justify-center`}>
            { children }
        </div>
    )
}