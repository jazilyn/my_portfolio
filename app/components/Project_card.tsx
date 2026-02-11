import Image from "next/image";


export default function Project_card({title, date, info, src, alt}: {title: string, date:string, info:string, src:string, alt:string}) {
    return(
            <div>
            <h2> {title} </h2>
            <h3 > {date} </h3>
            <p> {info} </p>
            <Image 
            src = {src}
            alt = {alt}
            width = {497}
            height = {229}
            />
            
            </div>
    )
}
