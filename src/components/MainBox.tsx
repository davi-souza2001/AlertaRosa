import GirlIcon from '../../public/girllove.svg'
import Image from "next/image"

// utilizar depois para poder mudar imagem ou texto da caixa :)
interface Props {
	content: string
	image: string
}

export default function MainBox() {
	return (
		<div className="h-full w-full flex items-center justify-center bg-gradient-to-t bg-[#9461E8] from-[#DD61E8] text-white gap-1 p-2 rounded-b-lg">
			<div className='p-2 rounded-3xl w-[50%]'>
				<Image src={GirlIcon} alt='Imagem de mulher com coração' height={180} width={180} />
			</div>
			<p className="w-[50%] text-left text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias laborum quis harum magnam</p>
		</div>
	)
}
