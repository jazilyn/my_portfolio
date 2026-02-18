export default function Footer() {
  return (
    <footer className="w-full bg-blue-400 py-10 px-6 flex flex-col items-center text-center border-t border-[#d8d2c4] mt-20">

      <h2  className="heading2 text-2xl font-semibold mb-2">Jazilyn Velasco</h2>
      <p className=" paragraph text-lg mb-6">Web Designer & Coder</p>

   
      <div className="flex gap-6 text-lg">
        <a href="#" className="underline hover:opacity-70">Gmail</a>
        <a href="#" className="underline hover:opacity-70">GitHub</a>
      </div>

      <p className=" paragraph text-sm mt-6 opacity-70">© 2026 Jazilyn Velasco</p>
    </footer>
  );
}
