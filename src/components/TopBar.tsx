import { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { HiMenu } from 'react-icons/hi'
import { Menu, MenuButton, MenuList } from '@chakra-ui/react'

import Logo from '../../public/logosimple.svg'
import UseAuth from '../service/hooks/useAuth'

export function TopBar() {
	const { logout } = UseAuth()
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<div className='fixed w-full z-50'>
			<div className='h-20 w-full flex items-center shadow-lg'>
				<div className='h-full w-full flex items-center justify-between font-medium text-xl px-5 bg-background'>
					<div className='flex gap-2 cursor-pointer' onClick={() => Router.push('/')}>
						<Image src={Logo} alt='Logo do quiz' height={30} width={30} />
						<div className='flex items-end'>
							<p className='text-white'>Alerta</p>
							<p className='text-base font-medium text-[#DD61E8]'>Rosa</p>
						</div>
					</div>

					<div className='text-white text-base font-light hidden lg:flex gap-2'>
						<div className='cursor-pointer hover:opacity-80 transition-all' onClick={() => Router.push('/')}>
							<p>Início |</p>
						</div>

						<div className='cursor-pointer hover:opacity-80 transition-all' onClick={() => Router.push('/contacts')}>
							<p>Contatos Úteis |</p>
						</div>

						<div className='cursor-pointer hover:opacity-80 transition-all' onClick={() => Router.push('/AskedQuestions')}>
							<p>Dúvidas Frequentes |</p>
						</div>

						<div className='cursor-pointer hover:opacity-80 transition-all' onClick={() => Router.push('/legislation')}>
							<p>Legislação |</p>
						</div>

						<div className='cursor-pointer hover:opacity-80 transition-all' onClick={() => Router.push('/userPage')}>
							<p>Minha Conta</p>
						</div>
					</div>

					<div className='h-full w-[30%] flex lg:hidden items-center justify-end'>
						<Menu>
							<MenuButton >
								<HiMenu className='h-8 w-14 mr-2 text-xl text-white' onClick={(e) => handleClick(e)} />
							</MenuButton>
							<MenuList>
								<div className='text-base font-normal'>
									<div className='h-5 w-full flex items-center justify-start mx-5 my-5 cursor-pointer' onClick={() => Router.push('/userPage')}>
										<p>Minha Conta</p>
									</div>

									<div className='h-5 w-full flex items-center justify-start mx-5 my-5 cursor-pointer' onClick={() => Router.push('/contacts')}>
										<p>Contatos Úteis</p>
									</div>

									<div className='h-5 w-full flex items-center justify-start mx-5 my-5 cursor-pointer' onClick={() => Router.push('/AskedQuestions')}>
										<p>Dúvidas Frequentes</p>
									</div>

									<div className='h-5 w-full flex items-center justify-start mx-5 my-5 cursor-pointer' onClick={() => Router.push('/legislation')}>
										<p>Legislação</p>
									</div>

									<div className='flex w-full justify-center items-center'>
										<div className='h-[1px] bg-slate-500 w-[90%] rounded-md' />
									</div>

									<div onClick={logout} className='h-5 w-full flex items-center justify-start mx-5 my-5 text-red-500 cursor-pointer'>
										<p>Sair</p>
									</div>
								</div>
							</MenuList>
						</Menu>
					</div>
				</div>
			</div>
		</div>
	)
}
