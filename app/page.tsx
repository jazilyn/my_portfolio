import star1 from '../public/Star 1.png';
import Image from 'next/image';


export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 gap-12">
      
     
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-[#b8a9c9]">Jazilyn</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-md">
          A developer and designer passionate about building clean, modern, and
          meaningful digital experiences.
        </p>
      </div>

      
      <div className="flex-1 flex justify-center">
        <div className="flex items-center justify-center">
          <Image src={star1} alt="Star 1" width={300} height={300} className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>
    </section>
  );
}
