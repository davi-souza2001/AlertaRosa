interface Props{
    type: any
    icon: any
    id?: any
}

export default function Input({ type, icon, id }: Props){
    return(
        <div className="flex w-full h-12 justify-center items-center my-3">
            <div className="text-indigo-500 text-2xl bg-white w-12 h-full shadow-md rounded-l-lg flex justify-center items-center">
                { icon }
            </div>

            <input 
                type={type} 
                className="
                    bg-white
                    w-full 
                    p-3
                    shadow-md
                    rounded-r-lg 
                    focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 focus:outline-none 
                    transition-all
                " 
                required
            />
        </div>
    )
}