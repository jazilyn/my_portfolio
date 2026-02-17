type ProjectCardProps = {
  title: string;
  description: string;
};

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <div className="w-full h-40 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
        IMAGE
      </div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-lg">{description}</p>
    </div>
  );
}
