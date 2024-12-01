import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Effects/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { NextPage } from "next";
import {
  FaUser,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaLanguage,
  FaPhone,
  FaEnvelope,
  FaBriefcase,
  FaHeart,
  FaMedal,
  FaCloudDownloadAlt,
} from "react-icons/fa";

const About: NextPage = () => {
  return (
    <main className="relative bg-black-100  flex justify-center items-center min-h-screen mx-auto sm:px-10 px-5 py-36">
      <div className="absolute inset-0 overflow-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[40vh] w-[50vw] top-10 left-1/2 -translate-x-1/2"
          fill="purple"
        />
        <Spotlight
          className="left-1/2 top-28 h-[80vh] w-[50vw] -translate-x-1/2"
          fill="blue"
        />
      </div>
      <div className="w-full max-w-5xl">
        <h1 className="text-5xl text-center font-bold uppercase text-white mb-12">
          About Me
        </h1>
        <div className="bg-gray-800/50  backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 ">
            {/* Personal Information Section */}
            <div className="bg-gray-900/60 rounded-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold uppercase text-white mb-6 border-b border-gray-700 pb-3">
                Personal Information
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <FaUser className="mr-3 text-blue-400" />
                    <div>
                      <span className="font-bold text-blue-400 text-sm block">
                        First Name
                      </span>
                      <span className="text-white font-medium">Tushar</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaUser className="mr-3 text-blue-400" />
                    <div>
                      <span className="font-bold text-blue-400 text-sm block">
                        Last Name
                      </span>
                      <span className="text-white font-medium">Pachouri</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <FaBirthdayCake className="mr-3 text-blue-400" />
                    <div>
                      <span className="font-bold text-blue-400 text-sm block">
                        Age
                      </span>
                      <span className="text-white font-medium">22</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaBirthdayCake className="mr-3 text-blue-400" />
                    <div>
                      <span className="font-bold text-blue-400 text-sm block">
                        Birthdate
                      </span>
                      <span className="text-white font-medium">
                        August 15, 2002
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <FaLanguage className="mr-3 text-blue-400" />
                    <div>
                      <span className="font-bold text-blue-400 text-sm block">
                        Languages
                      </span>
                      <span className="text-white font-medium">English</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-3 text-blue-400" />
                    <div>
                      <span className="font-bold text-blue-400 text-sm block">
                        Residence
                      </span>
                      <span className="text-white font-medium">India</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-3 text-blue-400" />
                    <div>
                      <span className="font-bold text-blue-400 text-sm block">
                        Email
                      </span>
                      <span className="text-white font-medium">
                        tusharpachouri001
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-3 text-blue-400" />
                    <div>
                      <span className="font-bold text-blue-400 text-sm block">
                        Phone
                      </span>
                      <span className="text-white font-medium">
                        +91-8218504473
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <FaBriefcase className="mr-3 text-blue-400" />
                    <div>
                      <span className="font-bold text-blue-400 text-sm block">
                        Freelance
                      </span>
                      <span className="text-white font-medium">Available</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaBriefcase className="mr-3 text-blue-400" />
                    <div>
                      <span className="font-bold text-blue-400 text-sm block">
                        Experience
                      </span>
                      <span className="text-white font-medium">3 Years</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-3 text-blue-400" />
                  <div>
                    <span className="font-bold text-blue-400 text-sm block">
                      Address
                    </span>
                    <span className="text-white font-medium">
                      9a/632, Murshadpur, Sadar Bazar, Mathura, 281001, Uttar
                      Pradesh, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-gray-900/60 rounded-lg p-6">
              <h2 className="text-2xl uppercase font-bold text-white mb-6 border-b border-gray-700 pb-3">
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
        </div>
      </div>
    </main>
  );
};

export default About;
