import React from "react";
import Link from "next/link";
import {
  FaUser,
  FaBriefcase,
  FaCloudDownloadAlt,
  FaMedal,
  FaHeart,
  FaLocationArrow,
  FaGraduationCap,
  FaLaptopCode,
  FaCertificate,
} from "react-icons/fa";
import { Spotlight } from "@/components/ui/Effects/Spotlight";

interface AnimatedSkillBarProps {
  skill: string;
  percentage: number;
  color: string;
}

const AnimatedSkillBar: React.FC<AnimatedSkillBarProps> = ({
  skill,
  percentage,
  color,
}) => {
  return (
    <div className="mb-4">
      <div className="flex uppercase justify-between text-gray-300 mb-2">
        <span className="font-medium">{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transform origin-left animate-wave`}
          style={{
            width: `${percentage}%`,
            animationDuration: `${2 + Math.random()}s`,
          }}
        ></div>
      </div>
    </div>
  );
};

const Resume: React.FC = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center min-h-screen mx-auto sm:px-10 px-5 py-32">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-top-20 h-screen md:-left-20 max-md:left-0 max-md:top-20"
          fill="white"
        />
        <Spotlight className="h-[40vh] w-[50vw] top-10 left-80 sl:-left-20 max-md:left-0 max-md:top-40" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] md:-left-20 max-md:left-0 max-md:top-40" fill="blue" />
      </div>
      <div className="w-full max-w-6xl relative z-10 space-y-4">
        {/* Download Resume Button - Top of the Page */}
        <div className="flex justify-center">
          <Link href="/TusharPachouri_back_end_New.pdf">
            <div className="bg-gradient-to-r uppercase from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
              Download My Resume
              <FaCloudDownloadAlt className="ml-2" />
            </div>
          </Link>
        </div>

        {/* Existing Coding and Language Skills Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Coding Skills */}
          <div className="bg-gray-900/60 rounded-lg p-6">
            <h2 className="text-2xl uppercase font-bold text-white mb-6 border-b border-gray-700 pb-3">
              Coding Skills
            </h2>
            <AnimatedSkillBar
              skill="Next.js"
              percentage={97}
              color="bg-blue-500"
            />
            <AnimatedSkillBar
              skill="Web Development"
              percentage={96}
              color="bg-green-500"
            />
            <AnimatedSkillBar
              skill="JavaScript"
              percentage={91}
              color="bg-yellow-500"
            />
            <AnimatedSkillBar
              skill="Python"
              percentage={88}
              color="bg-purple"
            />
            <AnimatedSkillBar skill="C++" percentage={85} color="bg-red-500" />
          </div>

          {/* Language Skills */}
          <div className="bg-gray-900/60 rounded-lg p-6">
            <h2 className="text-2xl uppercase font-bold text-white mb-6 border-b border-gray-700 pb-3">
              Language Skills
            </h2>
            <AnimatedSkillBar
              skill="English"
              percentage={95}
              color="bg-blue-400"
            />
            <AnimatedSkillBar
              skill="Hindi"
              percentage={98}
              color="bg-green-400"
            />
          </div>
        </div>

        {/* Professional Skills and Basic Knowledge */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Professional Skills */}
          <div className="bg-gray-900/60 rounded-lg p-6">
            <h2 className="text-2xl font-bold uppercase text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
              <FaCertificate className="mr-3 text-blue-400" /> Professional
              Skills
            </h2>
            <div className="space-y-4">
              <AnimatedSkillBar
                skill="Web Development"
                percentage={91}
                color="bg-blue-500"
              />
              <AnimatedSkillBar
                skill="Web Design"
                percentage={96}
                color="bg-green-500"
              />
              <AnimatedSkillBar
                skill="SEO"
                percentage={96}
                color="bg-yellow-500"
              />
              <AnimatedSkillBar
                skill="Problem Solving"
                percentage={87}
                color="bg-purple"
              />
            </div>
          </div>

          {/* Basic Knowledge */}
          <div className="bg-gray-900/60 rounded-lg p-6">
            <h2 className="text-2xl uppercase font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
              <FaLaptopCode className="mr-3 text-blue-400" /> Basic Knowledge
            </h2>
            <ul className="text-gray-300 uppercase space-y-2 list-disc pl-5">
              <li>Presentation Software (PowerPoint, Keynote)</li>
              <li>Search Engine Marketing</li>
              <li>Mobile App Development (iOS & Android)</li>
              <li>Spreadsheets (Excel, Google Sheets)</li>
              <li>Email Communication</li>
              <li>Operating Systems (Windows, Linux, MacOS)</li>
              <li>Office Suites (Microsoft Office, G Suite)</li>
            </ul>
          </div>
        </div>

        {/* Education and Experience Side by Side */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Section with Line Texture */}
          <div className="bg-gray-900/60 rounded-lg p-6 relative overflow-hidden">
            {/* Line Texture */}
            {/* <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div> */}

            <h2 className="text-2xl uppercase font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center pl-4">
              <FaGraduationCap className="mr-3 text-blue-400" /> Education
            </h2>
            <div className="space-y-4 pl-4">
              {/* Lovely Professional University */}
              <div className="relative pl-5">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                <h3 className="text-xl uppercase font-semibold text-white">
                  Lovely Professional University
                </h3>
                <p className="text-gray-300">B.Tech CSE | 2020 - 2024</p>
                <p className="text-gray-400 text-sm">
                  Bachelor Degree in Computer Science Engineering with
                  Specialization in Web Development
                </p>
              </div>

              {/* Kendriya Vidyalaya */}
              <div className="relative pl-5">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                <h3 className="text-xl uppercase font-semibold text-white">
                  Kendriya Vidyalaya Mathura Cantt
                </h3>
                <p className="text-gray-300">HSC (Class 12th) | 2019 - 2020</p>
                <p className="text-gray-400 text-sm">
                  CBSE Board with 74.2% in PCM + Computer Science Stream
                </p>
              </div>

              <div className="relative pl-5">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                <h3 className="text-xl uppercase font-semibold text-white">
                  Kendriya Vidyalaya Mathura Cantt
                </h3>
                <p className="text-gray-300">SSC (Class 10th) | 2017 - 2018</p>
                <p className="text-gray-400 text-sm">
                  CBSE Board with 8.4 CGPA
                </p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-gray-900/60 rounded-lg p-6">
            <h2 className="text-2xl uppercase font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
              <FaBriefcase className="mr-3 text-blue-400" /> Experience
            </h2>
            <div className="space-y-4 pl-4">
              {/* Web Development Intern */}
              <div className="relative pl-5">
                <div className="absolute uppercase top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                <h3 className="text-xl font-semibold text-white">
                  Tata Consultancy Services
                </h3>
                <p className="text-gray-300">
                  System Engineer | August 2024 - present
                </p>
                <ul className="list-disc pl-8 text-gray-400 text-sm">
                  <li>Built, updated, and maintained websites</li>
                  <li>Collaborated on features to enhance user experience</li>
                  <li>Developed UI components using React</li>
                </ul>
              </div>

              {/* Full Stack Developer (Freelance) */}
              <div className="relative pl-5">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                <h3 className="text-xl uppercase font-semibold text-white">
                  Full Stack Developer (Freelance)
                </h3>
                <p className="text-gray-300">February 2022 - Present</p>
                <ul className="list-disc pl-8 text-gray-400 text-sm">
                  <li>Developed full stack applications with Node.js</li>
                  <li>Implemented JWT authentication for secure logins</li>
                  <li>Designed RESTful APIs for client applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
