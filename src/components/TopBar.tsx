import Image from 'next/image'
import Router from 'next/router'
import { HiMenu } from 'react-icons/hi'
import Logo from '../../public/logotipo.png'

export function TopBar() {
	return (
		<div className='h-20 w-full flex items-center justify-between'>
			<div className='h-full w-1/2 flex items-center font-medium text-2xl pl-5 bg-slate-50 shadow-md'>
				<div className='flex w-[50%] gap-2' onClick={() => Router.push('/')}>
					<Image src={Logo} alt='Logo do quiz' height={30} width={30} className="rounded-md" />
					<p>Quiz</p>
				</div>
			</div>
			<div className='h-full w-1/2 flex items-center justify-end text-4xl'>
				<HiMenu className='mr-2'/>
			</div>
		</div>
	)
}
