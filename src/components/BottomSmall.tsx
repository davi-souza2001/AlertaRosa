interface Props{
    flex?: string
    padding_top?: string
    items?: string
    children: any
}

export default function BottomSm({ flex, padding_top, items, children }: Props){
    return(
        <div className={`flex flex-${flex} w-full h-[20%] pt-${padding_top} bg-background items-${items} justify-center`}>
            { children }
        </div>
    )
}
