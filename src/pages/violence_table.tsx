import Router from "next/router";
import { ArrowBendUpLeft } from "phosphor-react";
import Bottom from "../components/Bottom";
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

            {/* flex flex-col justify-center lg:justify-start w-full h-screen text-white lg:pt-24 lg:pl-20 */}

            <div className="w-full h-screen text-white">
                <Bottom height="100%" flex="col" padding_top="20" items="start">
                    <div className="flex flex-col justify-center lg:justify-start w-full text-white lg:pl-20 p-6">
                        { alerta_amarelo.map((alerta, i) => {
                            return(
                                <TableSquare color="amarelo" text={`${alerta}`} />
                            )
                        }) }

                        { alerta_laranja.map((alerta, i) => {
                            return(
                                <TableSquare color="laranja" text={`${alerta}`} />
                            )
                        }) }

                        { alerta_vermelho.map((alerta, i) => {
                            return(
                                <TableSquare color="vermelho" text={`${alerta}`} />
                            )
                        }) }
                    </div>
                    
                    <div className="w-full flex items-center justify-center pb-10">
                        <button onClick={() => Router.push('/result/test')} className="flex items-center gap-2 bg-white text-rosa text-xl py-3 px-6 rounded-lg lg:hover:opacity-100 lg:opacity-95 transition-opacity shadow-md">
                            Voltar <ArrowBendUpLeft className="text-xl" />
                        </button>
                    </div>
                </Bottom>
            </div>
        </>
    )
}