import { MapPin, Phone } from "phosphor-react";

export default function InfoContent(){
    return(
        <div className="flex flex-col justify-start my-3">
            <div className="flex items-center gap-2 text-xl">
                <MapPin/>
                <p>Localização</p>
            </div>

            <div className="flex items-center gap-2">
                <Phone/>
                <p className="underline">Contato</p>
            </div>
        </div>
    )
}