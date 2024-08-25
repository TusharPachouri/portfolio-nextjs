import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
// import Image from "next/image";
import Link from 'next/link';
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems ={[
          {name: "Home", link: "/", icon: <FaHome />},
          {name: "About", link: "/about", icon: <FaHome />},
          {name: "Resume", link: "/resume", icon: <FaHome />},
          {name: "Portfolio", link: "/portfolio", icon: <FaHome />},
          {name: "Blog", link: "/blog", icon: <FaHome />},
          {name: "Contact", link: "/contact", icon: <FaHome />}
        ]}/>
        <Hero />
      </div>
    </main>
  );
}
