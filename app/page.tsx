import Image from "next/image";

export default function Home() {
  return (
    <div>



      <div className = "flex items-center justify-between px-2 py-5"> 
        <h1> J.V </h1>
        <ul className = "flex gap-6"> 
          <li> About Me </li>
          <li> Skills </li>
          <li> Projects </li>  
        </ul>
      </div>



        <h2 className = "heading1"> hey there! </h2>
        <h3> I’m Jazilyn Velasco, a web designer and 
        coder located in beautiful Newark, NJ. </h3>


        <h3> I use programs like Figma and
             VSCode to create accessible 
             and aesthetic pleasing sites.
             I love Pokemon, music, 
             spicy snacks and a good show. </h3>



<div> 
<hr/>
  <p> This is my style sheet </p> 
  <h1 className = "heading1"> Heading 1 </h1>
  <h2 className="heading2"> Heading 2 </h2>
  <h3 className = "heading3"> Heading 3 </h3>
  <h4 className = "heading4"> Heading 4 </h4>
  <p className = "paragraph"> Paragraph </p> 

</div>


    </div>
  );
}
