import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { NextPage } from "next";
import Link from "next/link";
import {
  FaUser,
  FaBriefcase,
  FaCloudDownloadAlt,
  FaMedal,
  FaHeart,
  FaLocationArrow,
} from "react-icons/fa";

const Resume: NextPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center min-h-screen mx-auto sm:px-10 px-5 py-36">
      <div className="w-full max-w-5xl">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Summary Section */}
            <div className="bg-gray-900/60 rounded-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
                Personal Summary
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I’m Tushar Pachouri, a backend developer specializing in
                building scalable solutions with the MERN stack, Python, and
                Next.js. My focus lies in crafting innovative, user-centric
                applications that bring ideas to life and deliver impactful
                results.
              </p>
            </div>

            {/* Achievements Section */}
            <div className="bg-gray-900/60 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
                Achievements
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FaHeart, number: "94+", title: "Happy Clients" },
                  { icon: FaBriefcase, number: "127+", title: "Projects Done" },
                  {
                    icon: FaCloudDownloadAlt,
                    number: "503+",
                    title: "Files Downloaded",
                  },
                  { icon: FaMedal, number: "12+", title: "Awards Won" },
                ].map((achievement, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-center"
                  >
                    <div className="text-4xl text-blue-400 mb-2">
                      <achievement.icon />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-gray-300">{achievement.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/about">
              <MagicButton
                title="View Portfolio"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="w-full sm:w-auto from-blue-500 to-purple-600 hover:from-blue hover:to-purple duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
      
    </main>
    
  );
};

export default Resume;
