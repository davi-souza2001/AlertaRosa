import { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { HiMenu } from 'react-icons/hi'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import Logo from '../../public/logotipo.png'
import { UserCircle } from 'phosphor-react'

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
				<div className='flex w-[70%] gap-2' onClick={() => Router.push('/')}>
					<Image src={Logo} alt='Logo do quiz' height={30} width={30} />
					<div className='flex items-end'>
						<p className=''>Alerta</p>
						<p className='text-base font-light text-pink-600'>Rosa</p>
					</div>
				</div>

				<div className='h-full w-[30%] flex items-center justify-end text-4xl'>
					<HiMenu className='mr-2' onClick={(e) => handleClick(e)} />
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						<MenuItem onClick={handleClose}>
							<div className='flex items-center gap-2'>
								{/* depois colocar uns ícones pra ficar mais bonito :) */}
								{/* <UserCircle className='text-xl'/> */}
								<p>Perfil</p>
							</div>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<p>Minha Conta</p>
						</MenuItem>

						<div className='flex w-full justify-center items-center'>
							<div className='w-[90%] h-[1px] bg-slate-400 rounded-full' />
						</div>

						<MenuItem onClick={handleClose}>
							<p className="text-red-600">Sair</p>
						</MenuItem>
					</Menu>
				</div>
			</div>
		</div>
	)
}
