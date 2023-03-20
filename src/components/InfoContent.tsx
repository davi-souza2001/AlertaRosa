import { MapPin, Phone } from "phosphor-react";

interface InfoContentProps {
	name: string
	local?: string
	contact: string
}

export default function InfoContent(props: InfoContentProps) {
	return (
		<div className="flex flex-col justify-start my-3 ml-5">
			<div className="h-[1px] rounded-full w-[90%] lg:w-[70%] bg-white" />
			<div className="text-xl font-bold my-2">
				{props.name}:
			</div>

			{props.local && (
				<div className="flex items-start justify-center flex-col gap-2 text-xl mb-2">
					<div className="flex items-center justify-center">
						<MapPin className="mx-2" />
						<p className="font-semibold">Local:</p>
					</div>
					<p className="mx-2 font-light">{props.local}</p>
				</div>
			)}
			<div className="flex items-start justify-center flex-col gap-2 text-xl">
				<div className="flex items-center justify-center">
					<Phone className="mx-2" />
					<p className="font-semibold">Contato(s):</p>
				</div>
				<p className="mx-2 font-light">{props.contact}</p>
			</div>
		</div>
	)
}
