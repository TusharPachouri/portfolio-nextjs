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
import { Spotlight } from "@/components/ui/Spotlight";

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
      <div className="flex justify-between text-gray-300 mb-2">
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
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[40vh] w-[50vw] top-10 left-80" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="w-full max-w-6xl relative z-10 space-y-4">
        {/* Download Resume Button - Top of the Page */}
        <div className="flex justify-center">
          <Link href="/TusharPachouri_back_end_New.pdf">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
              Download My Resume
              <FaCloudDownloadAlt className="ml-2" />
            </div>
          </Link>
        </div>

        {/* Coding Skills and Language Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Coding Skills */}
          <div className="bg-gray-900/60 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
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
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
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
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
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
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
              <FaLaptopCode className="mr-3 text-blue-400" /> Basic Knowledge
            </h2>
            <ul className="text-gray-300 space-y-2 list-disc pl-5">
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

        {/* Education Section */}
        <div className="bg-gray-900/60 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
            <FaGraduationCap className="mr-3 text-blue-400" /> Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Lovely Professional University
              </h3>
              <p className="text-gray-300">B.Tech CSE | 2020 - 2024</p>
              <p className="text-gray-400 text-sm">
                Bachelor Degree in Computer Science Engineering with
                Specialization in Web Development
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Kendriya Vidyalaya Mathura Cantt
              </h3>
              <p className="text-gray-300">HSC (Class 12th) | 2019 - 2020</p>
              <p className="text-gray-400 text-sm">
                CBSE Board with 74.2% in PCM + Computer Science Stream
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Kendriya Vidyalaya Mathura Cantt
              </h3>
              <p className="text-gray-300">SSC (Class 10th) | 2017 - 2018</p>
              <p className="text-gray-400 text-sm">CBSE Board with 8.4 CGPA</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-gray-900/60 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
            <FaBriefcase className="mr-3 text-blue-400" /> Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Freelance Web Developer
              </h3>
              <p className="text-gray-300">
                Web Development | SEO | 2022 - Present
              </p>
              <p className="text-gray-400 text-sm">
                Transforming client visions into expertly crafted strategic and
                visual solutions, creating thoughtful experiences and propelling
                brands with soul and substance.
              </p>
            </div>
            {/* <div>
              <h3 className="text-xl font-semibold text-white">
                Co-Founder and Lead @ Net Impact
              </h3>
              <p className="text-gray-300">
                Lovely Professional University - Undergrad Chapter | 2018 - 2021
              </p>
              <p className="text-gray-400 text-sm">
                Leveraged a student community of over 30,000 to innovate and
                empower women in India for an inclusive future.
              </p>
            </div> */}
            {/* <div>
              <h3 className="text-xl font-semibold text-white">
                Design Lead @ Hult Prize Foundation
              </h3>
              <p className="text-gray-300">LPU Chapter | 2018 - 2019</p>
              <p className="text-gray-400 text-sm">
                Participated in an international community of changemakers
                committed to empowering social entrepreneurs to solve global
                challenges.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;

// Wave animation styles
const additionalStyles = `
@keyframes wave {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(0); }
}

.animate-wave {
  animation: wave linear infinite;
}
`;
