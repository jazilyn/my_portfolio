type HeroProps = {
  title: string;
  highlight: string;
  description: string;
};

export default function Hero({ title, highlight, description }: HeroProps) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 gap-12">
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title} <span className="text-[#b8a9c9]">{highlight}</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-md">
          {description}
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 rounded-xl flex items-center justify-center">
          IMAGE
        </div>
      </div>
    </section>
  );
}
