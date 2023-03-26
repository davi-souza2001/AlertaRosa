interface Props {
	type: 'text' | 'password' | 'number' | 'tel'
	icon: any
	placeholder: any
	value: any
	valueChange: (value: any) => void
}

export default function Input({ type, icon, placeholder, value, valueChange }: Props) {
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
		<div className="flex w-full h-12 justify-center items-center text-background">
			<div className="text-roxo text-2xl bg-white w-16 h-full shadow-md rounded-l-lg flex justify-center items-center">
				{icon}
			</div>

			<input
				type={type}
				value={value ?? ''}
				onChange={e => handleChangeValue(e.target.value)}
				placeholder={placeholder}
				className="
           bg-white
           w-full lg:w-64
           p-3
           shadow-md
           rounded-r-lg
           focus:border-roxo focus:ring-roxo focus:ring-1 focus:outline-none
          transition-all
        "
				required
			/>
		</div>
	)
}
