import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import Image from "next/image";
import p1 from '../../public/Frame 5.png';
import p2 from '../../public/Frame 10.png';
import p3 from '../../public/Frame 12.png';
import p4 from '../../public/image 4.png';


export default function Projects() {
  return (
    <section className="py-20 bg-orange-200">
    
      
      <SectionTitle text="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
       
       <ProjectCard 
       title="Movie Theater Booking System" 
       description="A team project built using HTML/CSS to create a unique and accessible site." 
       source={p1} />

       <ProjectCard 
       title="Compsci Cluster" 
       description="A team project built using HTMl/CSS to crate a unique page for the Computer Science Cluster at THS." 
       source={p2} />

       <ProjectCard 
       title="OurBlooms" 
       description="I project I built using HTML/CSS for a flower shop." 
       source={p3} />
       
       
       <ProjectCard 
       title="Tea Cozy"
        description="I project I built for a tea shop." 
        source={p4} />
          
      </div>
    </section>
  );
}
