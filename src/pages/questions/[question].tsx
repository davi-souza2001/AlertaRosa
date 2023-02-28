import { Progress } from "@chakra-ui/react"
import { useState } from "react"
import { HiCheckCircle } from "react-icons/hi"

import { TopBar } from "../../components/TopBar"

export default function Question() {
	const [checked, setChecked] = useState<'yes' | 'no' | ''>('')

	return (
		<div>
			<TopBar />
			<div className="h-10 w-full flex items-center justify-center">
				<Progress colorScheme='green' size='md' value={20} className="w-full ml-2 rounded-lg" />
				<p className="p-2">1/5</p>
			</div>
			<div className="h-52 w-full flex items-center justify-center text-center p-5 text-lg font-semibold">
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias veniam natus eveniet dolore. Eligendi cum similique excepturi maiores dolor? Unde, architecto delectus nesciunt voluptatem similique cum quaerat fugit explicabo repudiandae!</p>
			</div>
			<div className="h-44 w-full flex items-center justify-center flex-col text-center p-5 font-semibold">
				<div onClick={() => setChecked('yes')} className={`h-12 w-2/3 flex items-center justify-start rounded-md mb-7 bg-indigo-400 ${checked === "yes" && 'bg-green-500'}`}>
					{checked === 'yes' ? <HiCheckCircle className="text-white text-3xl mr-3" /> : <p className="h-6 w-6 mx-2 mr-5 bg-indigo-500 rounded-full">A</p>}
					<p>Sim</p>
				</div>
				<div onClick={() => setChecked('no')} className={`h-12 w-2/3 flex items-center justify-start rounded-md mb-7 bg-indigo-400 ${checked === "no" && 'bg-green-500'}`}>
					{checked === 'no' ? <HiCheckCircle className="text-white text-3xl mr-3" /> : <p className="h-6 w-6 mx-2 mr-5 bg-indigo-500 rounded-full">B</p>}
					<p>Não</p>
				</div>
			</div>
			<div className="h-20 w-full font-semibold flex items-center justify-center">
				<button disabled={checked === '' ? true : false} className={`h-10 w-32 bg-slate-300 rounded-md ${checked !== '' && 'bg-green-500 font-semibold text-white'}`}>
					Continuar
				</button>
			</div>
		</div>
	)
}
