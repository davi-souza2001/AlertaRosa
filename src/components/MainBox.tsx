import GirlIcon from '../../public/girllove.svg'
import Image from "next/image"
import Gradient from './Gradient'

// utilizar depois para poder mudar imagem ou texto da caixa :)
interface Props {
	content: string
	image: string
}

export default function MainBox() {
	return (
		<Gradient height='20%' flex='row' padding_top='pt-20'>
			<div className='w-full flex items-center justify-center text-white'>
				<div className='w-[40%] p-2 lg:p-6 rounded-3xl'>
					<Image src={GirlIcon} alt='Imagem de mulher com coração' height={180} width={180} />
				</div>
				<p className="w-[60%] text-left text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias laborum quis harum magnam</p>
			</div>
		</Gradient>
	)
}
