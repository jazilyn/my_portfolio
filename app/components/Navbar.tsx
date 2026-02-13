import Image from "next/image";

export default function Navbar({me, cut1, cut2, cut3, src, alt}: {me: string, cut1: string, cut2: string, cut3: string, src:string, alt:string}) { 
    return(
        <div className = "flex items-center justify-between px-2 py-5"> 
           <Image src={src} alt={alt} width={77} height={77} />
             <h4> {me} </h4>
            <ul className = "flex gap-6">
            <li className = "heading4"> {cut1} </li>
            <li className = "heading4"> {cut2} </li>
            <li className = "heading4"> {cut3} </li>
            </ul>
        
        </div>
    )
}
