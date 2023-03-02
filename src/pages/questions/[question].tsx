import { Progress } from "@chakra-ui/react"
import { useState } from "react"
import { HiCheckCircle, HiXCircle } from "react-icons/hi"

import { TopBar } from "../../components/TopBar"

export default function Question() {
	const [checked, setChecked] = useState<'yes' | 'no' | ''>('')

	return (
		<div className="bg-indigo-500 md:h-screen">
			<TopBar />
			<div className=" flex w-full md:h-[90%] items-center justify-center">
				<div className="flex flex-col w-full md:w-[60%] h-full bg-white pt-[10vh] md:pt-0 gap-3 p-5 md:rounded-lg">
					<div className="h-10 w-full flex items-center justify-center">
						<Progress colorScheme='green' size='md' value={20} className="w-full ml-2 rounded-lg" />
						<p className="p-2">1/5</p>
					</div>
					<div className="h-52 w-full flex items-center justify-center text-center p-5 text-lg font-semibold">
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias veniam natus eveniet dolore. Eligendi cum similique excepturi maiores dolor? Unde, architecto delectus nesciunt voluptatem similique cum quaerat fugit explicabo repudiandae!</p>
					</div>
					<div className="h-44 w-full flex items-center justify-center flex-col text-center p-5 text-white">
						<div onClick={() => setChecked('yes')} className={`h-12 w-2/3 flex items-center justify-start rounded-md mb-7 ${checked === 'yes' ? 'bg-green-500 shadow-md font-semibold' : 'bg-indigo-500'} transition-all`}>
							{checked === 'yes' ? <HiCheckCircle className="text-white text-3xl mx-2 mr-5" /> : <p className="h-6 w-6 mx-2 mr-5 bg-white text-indigo-500 rounded-full">A</p>}
							<p>Sim</p>
						</div>
						<div onClick={() => setChecked('no')} className={`h-12 w-2/3 flex items-center justify-start rounded-md mb-7 bg-indigo-500 ${checked === 'no' ? 'bg-red-500 shadow-md font-semibold' : 'bg-indigo-500'} transition-all`}>
							{checked === 'no' ? <HiXCircle className="text-white text-3xl mx-2 mr-5" /> : <p className="h-6 w-6 mx-2 mr-5 bg-white text-indigo-500 rounded-full">B</p>}
							<p>Não</p>
						</div>
					</div>
					<div className="w-full flex items-center justify-center">
						<button disabled={checked === '' ? true : false} className={`text-white h-10 w-32 ${checked !== '' ? 'bg-indigo-500 opacity-100 shadow-md' : ' bg-indigo-500 opacity-50'} rounded-md transition-all`}>
							Continuar
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
