import Image from "next/image";
import Button from "./components/Button";
import Button_danger from "./components/Button_danger";
import Project_card from "./components/Project_card";
import person from "../public/globe.svg";
import Navbar from "./components/Navbar";
import logo from "../public/logo.png"; 

export default function Home() {
  return (
    <div>


<Navbar me = {"J.V"} cut1 = {"About Me"} cut2 = {"Skills"} cut3 = {"Projects"} src = {"logo"} alt = {"Profile Picture"}/> 
        


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

    <Project_card title = {"Movie Theater Site"} date = {"10/7/25"} info = {"A team project"} src = {person} alt ={"Project image"} /> 

    </div>
  );
}
