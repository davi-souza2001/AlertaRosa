import { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { HiMenu } from 'react-icons/hi'

import Logo from '../../public/logosimple.svg'
import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react'

export function TopBar() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<div className='h-20 w-full flex items-center justify-between'>
			<div className='h-full w-full flex items-center font-medium text-xl px-5 bg-white border-b-4 border-indigo-500 shadow-md'>
				<div className='flex w-[70%] gap-2 cursor-pointer' onClick={() => Router.push('/')}>
					<Image src={Logo} alt='Logo do quiz' height={30} width={30}/>
					<div className='flex items-end'>
						<p>Alerta</p>
						<p className='text-base font-light text-pink-600'>Rosa</p>
					</div>
				</div>

				<div className='h-full w-[30%] flex items-center justify-end'>
					<Menu>
						<MenuButton as={Button} rightIcon={<HiMenu className='mr-2 text-2xl' onClick={(e) => handleClick(e)} />} />
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
