import Link from "next/link";

export default function MobileMenu({ close }: { close: () => void }) {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-10 text-2xl">
      <Link href="/about" onClick={close}>About</Link>
      <Link href="/projects" onClick={close}>Projects</Link>
      <Link href="/skills" onClick={close}>Skills</Link>
    </div>
  );
}
