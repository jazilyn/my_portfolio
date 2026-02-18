import Image, { StaticImageData } from 'next/image'



export default function ProjectCard({ title, description, source }: {title:string, description:string, source:string | StaticImageData}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <div className="w-full h-40 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
      <Image className="object-cover w-full h-full rounded-lg"
        src={source}
        alt={title}
        width={300}
        height={300} />
      </div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>

      <p className="text-lg">{description}</p>
    </div>
  );
}
