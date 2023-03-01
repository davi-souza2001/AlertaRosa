import { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { HiMenu } from 'react-icons/hi'

import Logo from '../../public/logotipo.png'
import { Button, ListIcon, Menu, MenuButton, MenuList } from '@chakra-ui/react'

export function TopBar() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div className='h-20 w-full flex items-center justify-between'>
			<div className='h-full w-full flex items-center font-medium text-xl px-5 bg-white border-b-4 border-indigo-500 shadow-md'>
				<div className='flex w-[70%] gap-2'>
					<Image src={Logo} alt='Logo do quiz' height={30} width={30} onClick={() => Router.push('/')}/>
					<div className='flex items-end'>
						<p className=''>Alerta</p>
						<p className='text-base font-light text-pink-600'>Rosa</p>
					</div>
				</div>

				<div className='h-full w-[30%] flex items-center justify-end'>
					<Menu>
						<MenuButton as={Button} rightIcon={<HiMenu className='mr-2 text-2xl' onClick={(e) => handleClick(e)} />} />
						<MenuList>
							<div className='h-5 -full flex items-center justify-start mx-5 my-5'>
								<p>Minha Conta</p>
							</div>
							<div className='h-5 -full flex items-center justify-start mx-5 my-5'>
								<p>Sair</p>
							</div>
						</MenuList>
					</Menu>
				</div>
			</div>
		</div>
	)
}
