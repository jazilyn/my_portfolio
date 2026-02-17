"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-amber-700 w-full flex justify-between items-center py-6 px-6 md:px-12 lg:px-24">
      <Image src={logo} alt="Logo" width={40} height={40} className="rounded-full " /> 
      <Link href="/" className="text-xl font-semibold ">
        JV
      </Link>

     
      <div className="hidden md:flex gap-8 text-lg">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/skills">Skills</Link>
      </div>

      
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setOpen(!open)}
      >
        <span className="w-6 h-[2px] bg-black"></span>
        <span className="w-6 h-[2px] bg-black"></span>
        <span className="w-6 h-[2px] bg-black"></span>
      </button>

      {open && <MobileMenu close={() => setOpen(false)} />}
    </nav>
  );
}
