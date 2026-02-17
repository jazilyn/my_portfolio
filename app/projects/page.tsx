import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="py-20">
      <SectionTitle text="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProjectCard
          title="Project Title"
          description="Project."
        />
      </div>
    </section>
  );
}
