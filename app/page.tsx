import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
// import Image from "next/image";
import Link from 'next/link';
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaBlog, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "About", link: "/about", icon: <FaUser /> },
            { name: "Resume", link: "/resume", icon: <FaFileAlt /> },
            { name: "Portfolio", link: "/portfolio", icon: <FaBriefcase /> },
            { name: "Blog", link: "/blog", icon: <FaBlog /> },
            { name: "Contact", link: "/contact", icon: <FaEnvelope /> }
          ]} />
        <Hero />
      </div>
    </main>
  );
}
