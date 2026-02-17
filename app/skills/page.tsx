import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import Navbar from "../components/Navbar";
export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <section className="py-20">
      
      <SectionTitle text="Skills" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
       
      </div>
    </section>
  );
}
