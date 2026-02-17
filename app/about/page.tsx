import SectionTitle from "../components/SectionTitle";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <section className="py-20">
      <Navbar />
      <SectionTitle text="About Me" />
   
      <div className="flex flex-col md:flex-row gap-12">
        <ImagePlaceholder width="w-full md:w-1/3" />

        <p className="md:w-2/3 text-lg leading-relaxed">
          I'm a developer who loves blending design and technology to create
          beautiful, functional interfaces. I enjoy working with React, Next.js,
          Tailwind, and building projects that feel intuitive and polished.
        </p>
      </div>
    </section>
  );
}
