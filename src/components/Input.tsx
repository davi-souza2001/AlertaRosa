interface Props{
    type: any
    icon: any
    placeholder: any
}

export default function Input({ type, icon, placeholder }: Props){
    return(
        <div className="flex w-full h-12 justify-center items-center text-background">
            <div className="text-roxo text-2xl bg-white w-16 h-full shadow-md rounded-l-lg flex justify-center items-center">
                { icon }
            </div>

            <input
                type={type}
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
