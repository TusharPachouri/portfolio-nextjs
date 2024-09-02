import { Spotlight } from "@/components/ui/Spotlight";
import { NextPage } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const About: NextPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full h-full">
        <div className="flex">
          <div className="flex-1"></div>
          <div className="flex-1">
            <div className="pb-20 pt-36">
              <div>
                <Spotlight
                  className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                  fill="white"
                />
                <Spotlight
                  className="h-[80vh] w-[50vw] top-10 left-full"
                  fill="purple"
                />
                <Spotlight
                  className="left-80 top-28 h-[80vh] w-[50vw]"
                  fill="blue"
                />
              </div>
              <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
              </div>
              <div className="flex items-end justify-start relative my-20 z-10 px-4">
                <Link
                  href="/TusharPachouri_back_end_New.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                  Download My Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
