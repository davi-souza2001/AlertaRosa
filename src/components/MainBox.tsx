import GirlIcon from '../../public/girllove.svg'
import Image from "next/image"
import GradientSm from './GradientSmall'
import UseAuth from '../service/hooks/useAuth'

interface Props {
	content: string
	image: string
}

export default function MainBox() {
	const { user } = UseAuth()

	return (
		<GradientSm flex='row' padding_top='pt-20'>
			<div className='w-full flex items-center justify-center text-white'>
				<div className='w-[40%] p-2 lg:p-6 rounded-3xl'>
					<Image src={GirlIcon} alt='Imagem de mulher com coração' height={180} width={180} />
				</div>
				<p className="w-[60%] text-left lg:text-2xl">Bem vinda, {user.name}</p>
			</div>
		</GradientSm>
	)
}
