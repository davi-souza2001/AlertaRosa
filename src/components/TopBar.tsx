import { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { HiMenu } from 'react-icons/hi'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import Logo from '../../public/logotipo.png'

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
			<div className='h-full w-1/2 flex items-center font-medium text-2xl pl-5 bg-slate-50 shadow-md'>
				<div className='flex w-[50%] gap-2' onClick={() => Router.push('/')}>
					<Image src={Logo} alt='Logo do quiz' height={30} width={30} className="rounded-md" />
					<p>Quiz</p>
				</div>
			</div>
			<div className='h-full w-1/2 flex items-center justify-end text-4xl'>
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
					<MenuItem onClick={handleClose}>Profile</MenuItem>
					<MenuItem onClick={handleClose}>My account</MenuItem>
					<MenuItem onClick={handleClose}>Logout</MenuItem>
				</Menu>
			</div>
		</div>
	)
}
