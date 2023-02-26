import Image from 'next/image'
import Logo from '../../public/testUser.jpg'

export function TopBar(){
	return (
		<div className='h-20 w-full flex items-center'>
			<div className='h-full w-36 flex items-center justify-around font-medium text-2xl'>
				<Image src={Logo} alt='Logo do quiz' height={30} width={30}/>
				<p className='ml-[-30px]'>Quiz</p>
			</div>
		</div>
	)
}
