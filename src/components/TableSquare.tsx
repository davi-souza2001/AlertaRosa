interface Props{
    color?: string
    text: string
}

export default function TableSquare({ color, text }: Props){
    return(
        <div className="flex items-center justify-start text-lg gap-3 my-3">
            <div className={`flex w-36 h-10 bg-${color} rounded-lg`}/>
            <p>{text}</p>
        </div>
    )
}