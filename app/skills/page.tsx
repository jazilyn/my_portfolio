import Image from "next/image";
import star1 from '../../public/Star 1.png';
import star2 from '../../public/Star 2.png';
import laptop from '../../public/Rectangle 21.png';


export default function SkillsPage() {
  return (
    <div className="w-full min-h-screen bg-[#f3e9dd] px-6 py-16 flex flex-col items-center">

     
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-start md:items-center gap-8 mb-16">

      
        <div className="flex items-center justify-center">
          <Image src={star1} alt="Star 1" width={200} height={200}/>
        </div>

       
        <div className="flex-1 bg-[#b7e4c7] p-6 rounded-xl border-2 border-white shadow-md text-[#2d2d2d]">
          <ul className="space-y-2 text-lg leading-relaxed">
            <li>• Curiosity and continuous learning</li>
            <li>• Tools to consider: ideation and design scope ahead of feedback</li>
            <li>• Problem-solving mindset</li>
            <li>• Technology: breaking down problems and scoping and defining solutions</li>
            <li>• Communication</li>
            <li>• Explaining ideas clearly to teammates and writing clear commit messages</li>
          </ul>
        </div>
      </div>

      
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-start md:items-center gap-8 mb-16">

     
        <div className="flex items-center justify-center pl-40">
          <Image src={laptop} alt="Laptop" width={300} height={300}/>
        </div>

      
        <div className="flex items-center justify-center">
          <Image src={star2} alt="Star 2" width={200} height={200} />
        </div>
      </div>

     
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-start md:items-center gap-8">

     
        <div className="flex items-center justify-center">
          <Image src={star1} alt="Star 1" width={200} height={200}/>
        </div>

     
        <div className="flex-1 bg-[#b7e4c7] p-6 rounded-xl border-2 border-white shadow-md text-[#2d2d2d]">
          <ul className="space-y-2 text-lg leading-relaxed">
            <li>• HTML, CSS, Responsive Web Design</li>
            <li>• Events and grid, media queries, and accessibility</li>
            <li>• Design Tools</li>
            <li>• A deep understanding of spacing, grid, color theory</li>
            <li>• Figma: including hierarchy, components, auto-layouts</li>
            <li>• Component awareness, reading and creating Figma documentation</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
