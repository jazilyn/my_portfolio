import link from "next/link";

export default function Button({text}: {text: string}) { 
    return(
        <button className = "myButton">
            {text}
        </button>
    )
}
