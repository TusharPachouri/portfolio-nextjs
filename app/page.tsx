import Hero from "@/components/Hero";
import About from "./about/page";
import PortfolioLoader from "@/components/ui/PortfolioLoader";
// import { FloatingNav } from "@/components/ui/FloatingNavbar";
// import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";
import ChatwootWidget from "@/components/ui/ChatwootWidget";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <PortfolioLoader> */}
        <ChatwootWidget />
        <Hero />
        {/* </PortfolioLoader> */}
      </div>
    </main>
  );
}
