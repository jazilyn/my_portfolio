export default function Button_danger({text}: {text: string}) { 
    return(
        <button className = "bg-red-300 px-4 rounded-md text-white">
            {text}
        </button>
    )
}
