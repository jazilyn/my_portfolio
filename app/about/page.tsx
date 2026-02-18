import Image from "next/image";
import intro from '../../public/intro.png';
import pr from '../../public/Rectangle 18.png';
import pokemon from '../../public/dratini 2.png';

export default function AboutPage() {
  return (
    <div className=" bg-orange-200 flex flex-col w-full">

  
      <section className="w-fulltext-white py-20 px-6 flex flex-col items-center text-center">
        <pre className="text-lg md:text-2xl font-mono">
{`System.out.println(
  "Gotta Catch 'Em All");`}
        </pre>

       
        <div className=" rounded-xl flex items-center justify-center">
          <Image src={pokemon} alt="Pokemon" width={400} height={400}/>
        
        </div>
      </section>

    
      <section className="w-full py-20 px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">

        
        <div className="flex items-center justify-center">
          <Image src={intro} alt="Profile Picture" width={192} height={192} className="rounded-full"/>
        </div>

   
        <div className="flex flex-col max-w-xl">
          <h2 className="text-4xl font-bold mb-4">hey there!</h2>
          <p className="text-lg leading-relaxed">
            I'm <span className="font-semibold">Jacilyn Velasco</span>, a web designer and coder 
            located in beautiful Newark, NJ.
          </p>
        </div>
      </section>

      
      <section className="w-full py-20 px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">

    
        <div className="flex flex-col max-w-xl text-lg leading-relaxed">
          <p>
            I use programs like <span className="font-semibold">Figma</span> and 
            <span className="font-semibold"> VSCode</span> to create accessible and aesthetically 
            pleasing sites.
          </p>
          <p className="mt-4">
            I love Pokémon, music, spicy snacks, and a good show.
          </p>
        </div>

      
        <div className="flex items-center justify-center pl-40">
          <Image src={pr} alt="Profile Picture" width={400} height={400}/>
        </div>
      </section>
    </div>
  );
}
