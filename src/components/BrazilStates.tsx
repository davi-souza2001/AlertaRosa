import { MapPin } from 'phosphor-react'

export function BrazilStates(){
    return(
        <>
            <div className="flex w-full h-12 items-center rounded-lg border-[1px] bg-white text-roxo shadow-md">
                <div className="text-roxo text-2xl w-16 h-full flex justify-center items-center shadow-md">
                    <MapPin/>
                </div>

                <div className='flex items-center justify-center w-full h-full'>
                    <select className="px-2 w-full h-10 rounded-lg bg-white text-black font-light focus:outline-none border-[1px] border-gray-400 border-opacity-20">
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>             
                    </select>
                </div>
            </div>
        </>
    )
}