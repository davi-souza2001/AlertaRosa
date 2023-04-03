import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { Eye, EyeClosed } from "phosphor-react"
import { useState } from "react"

interface Props {
	type: 'text' | 'password' | 'tel'
	icon: any
	placeholder?: any
	value: any
	valueChange: (value: any) => void
}

export default function Inputf({ type, icon, placeholder, value, valueChange }: Props) {
	const [show, setShow] = useState(false)
	const handleClick = () => setShow(!show)

	function formatPhoneNumber(phoneNumber: string) {
		const cleaned = phoneNumber.replace(/\D/g, '')
		const regex = /^(\d{2})(\d{4,5})(\d{4})$/
		if (!regex.test(cleaned)) {
			return null
		}
		const formatted = cleaned.replace(regex, '($1) $2-$3')
		return formatted;
	}

	function handleChangeValue(value: any) {
		if (type === "tel") {
			if (value.length === 11) {
				const formattedNumber = formatPhoneNumber(value)
				valueChange(formattedNumber)
			} else {
				valueChange(value)
			}
		} else {
			valueChange(value)
		}
	}

	return (
		<div className="flex w-full h-12 justify-center items-center rounded-md bg-white text-background">
			<div className="text-roxo text-2xl w-16 h-full shadow-md flex justify-center items-center">
				{icon}
			</div>

			{type === "text" && (
				<InputGroup size='md' className="h-full flex items-center justify-center pr-3">
					<Input placeholder={placeholder} value={value ?? ''} onChange={e => handleChangeValue(e.target.value)} />
				</InputGroup>
			)}

			{type === "tel" && (
				<InputGroup size='md' className="h-full flex items-center justify-center pr-3">
					<Input type='tel' placeholder='DDD + Número' value={value ?? ''} onChange={e => handleChangeValue(e.target.value)} />
				</InputGroup>
			)}

			{type === "password" && (
				<InputGroup size='md' className="h-full flex items-center justify-center pr-3">
					<Input
						type={show ? 'text' : 'password'}
						placeholder='Senha'
						value={value ?? ''}
						onChange={e => handleChangeValue(e.target.value)}
					/>
					<InputRightElement width='4.5rem' marginTop={"1"}>
						<Button size='lg' background='transparent' onClick={handleClick}>
							{show ? <Eye/> : <EyeClosed/>}
						</Button>
					</InputRightElement>
				</InputGroup>
			)}
		</div>
	)
}
