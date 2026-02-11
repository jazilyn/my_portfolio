export default function Navbar({me, cut1, cut2, cut3, src, alt}: {me: string, cut1: string, cut2: string, cut3: string, src:string, alt:string}) { 
    return(
        <div className = "flex items-center justify-between px-2 py-5"> 
            <h3> {me}</h3>
            <h4> {cut1} </h4>
            <h4> {cut2} </h4>
            <h4> {cut3} </h4>
        
        </div>
    )
}