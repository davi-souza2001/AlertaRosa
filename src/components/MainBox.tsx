import GirlIcon from '../../public/girllove.svg'
import Image from "next/image"

// utilizar depois para poder mudar imagem ou texto da caixa :)
interface Props{
    content: string
    image: string
}

export default function MainBox(){
    return(
        <div className="h-full w-11/12 flex items-center justify-center rounded-lg bg-indigo-500 border-b-4 border-indigo-700 text-white gap-1 p-2">
            <div className='bg-gradient-to-r from-indigo-200 to-indigo-500 p-2 rounded-3xl w-[50%]'>
                <Image src={GirlIcon} alt='Imagem de mulher com coração' height={180} width={180} />
            </div>
            <p className="w-[50%] text-left text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias laborum quis harum magnam</p>
        </div>
    )
}