import Router from "next/router";
import { ArrowBendUpLeft } from "phosphor-react";
import TableSquare from "../components/TableSquare";
import { TopBar } from "../components/TopBar";

const alerta_amarelo = [
    'Chantagear',
    'Mentir e enganar',
    'Ignorar',
    'Ciúmes excessivos',
    'Ofender e humilhar',
    'Intimidar e ameaçar',
    'Proibir e controlar',
]

const alerta_laranja = [
    'Destruir bens pessoais',
    'Machucar e agredir',
    'Empurrar',
    'Golpear',
    'Chutar',
]

const alerta_vermelho = [
    'Confinar e prender',
    'Ameaçar com armas',
    'Ameçar de morte',
    'Abusar sexualmente',
    'Espancar e mutilar',
    'Matar - Feminicídio',
]

export default function Violence_Table(){
    return(
        <>
            <TopBar/>

            <div className="w-full h-screen text-white">
                <div className="flex flex-col justify-center lg:justify-start w-full bg-background text-white lg:pl-20 px-6 pt-24">
                    { alerta_amarelo.map((alerta) => {
                        return(
                            <TableSquare text={`${alerta}`} bg="bg-[#FFD56A]"/>
                        )
                    }) }

                    { alerta_laranja.map((alerta) => {
                        return(
                            <TableSquare text={`${alerta}`} bg='bg-[#FF9D43]'/>
                        )
                    }) }

                    { alerta_vermelho.map((alerta) => {
                        return(
                            <TableSquare text={`${alerta}`} bg='bg-[#E86161]' />
                        )
                    }) }
                </div>

                <div className="w-full flex items-center justify-center py-10 bg-background">
                    <button onClick={() => Router.push('/result/test')} className="flex items-center gap-2 bg-white text-rosa text-xl py-3 px-6 rounded-lg lg:hover:opacity-100 lg:opacity-95 transition-opacity shadow-md">
                        Voltar <ArrowBendUpLeft className="text-xl" />
                    </button>
                </div>
            </div>
        </>
    )
}
