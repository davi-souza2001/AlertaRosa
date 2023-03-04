import { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { HiMenu } from 'react-icons/hi'
import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react'

import Logo from '../../public/logosimple.svg'

export function TopBar() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<div className='h-20 w-full flex items-center justify-between'>
			<div className='h-full w-full flex items-center font-medium text-xl px-5 bg-roxo'>
				<div className='flex w-[70%] gap-2 cursor-pointer' onClick={() => Router.push('/')}>
					<Image src={Logo} alt='Logo do quiz' height={30} width={30} />
					<div className='flex items-end'>
						<p className='text-white'>Alerta</p>
						<p className='text-base font-medium text-rosa'>Rosa</p>
					</div>
				</div>

				<div className='h-full w-[30%] flex items-center justify-end'>
					<Menu>
						<MenuButton >
							<HiMenu className='h-8 w-14 mr-2 text-xl text-white' onClick={(e) => handleClick(e)} />
						</MenuButton>
						<MenuList>
							<div className='text-base font-normal'>
								<div className='h-5 w-full flex items-center justify-start mx-5 my-5 cursor-pointer'>
									<p>Minha Conta</p>
								</div>

								<div className='flex w-full justify-center items-center'>
									<div className='h-[1px] bg-slate-500 w-[90%] rounded-md' />
								</div>

								<div className='h-5 w-full flex items-center justify-start mx-5 my-5 text-red-500 cursor-pointer'>
									<p>Sair</p>
								</div>
							</div>
						</MenuList>
					</Menu>
				</div>
			</div>
		</div>
	)
}
