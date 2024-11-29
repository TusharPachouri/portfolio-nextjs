"use client";
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
import { useState } from "react";

const projects = [
  {
    title: "Nebula Blog",
    description:
      "Nebula Blog is an interactive platform for users to create, manage, and discover blog content, AI-powered content generation.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT",
      "Gemini AI",
      "Cloudinary",
    ],
    githubLink: "https://github.com/TusharPachouri/blog-website",
    liveLink: "https://nebula-blog.tusharpachouri.com/",
    image: "/ProjectImages/NebulaBlog.jpg",
  },
  {
    title: "3D Portfolio",
    description:
      "An interactive portfolio featuring 3D models and animations to showcase projects and skills dynamically.",
    technologies: [
      "Three.js",
      "Next.js",
      "React",
      "GLTF Models",
      "CSS Animations",
    ],
    githubLink: "https://github.com/TusharPachouri/portfolio-nextjs",
    liveLink: "https://tusharpachouri.com/",
    image: "/ProjectImages/3DPortfolio.jpg",
  },
  {
    title: "Video Streaming Application",
    description:
      "A secure platform for video streaming where users can upload videos, customize profiles, and interact with content.",
    technologies: [
      "Node.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Cloudinary",
      "RESTful APIs",
    ],
    githubLink: "https://github.com/TusharPachouri/Video-Streaming-Application",
    liveLink: "https://video-streaming-application.tusharpachouri.com/",
    image: "/ProjectImages/VideoStreaming.jpg",
  },
  {
    title: "DropDash",
    description:
      "A secure file-sharing platform that lets users upload, share, and manage files with enhanced security and scalability.",
    technologies: [
      "Flask",
      "Azure Blob Storage",
      "Azure Table Storage",
      "Azure CDN",
    ],
    githubLink: "https://github.com/TusharPachouri/DropDash",
    liveLink: "https://dropdash.vercel.app/",
    image: "/ProjectImages/DropDash.jpg",
  },

  {
    title: "RhythmReaper",
    description:
      "A Python app that fetches top tracks from Spotify and downloads them in MP3 format using Pytube, simplifying music library management.",
    technologies: ["Python", "Spotify API", "Pytube"],
    githubLink: "https://github.com/TusharPachouri/RhythmReaper",
    liveLink: "#",
    image: "/ProjectImages/RhythmReaper2.jpg",
  },
];

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  image: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Project Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center 
                transform ${isHovered ? "translate-y-0" : "translate-y-full"}
                transition-transform duration-300 p-6 text-white text-center`}
      >
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="mb-4 text-gray-200">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition"
          >
            GitHub
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio: NextPage = () => {
  const words = "Transforming Ideas into Innovative Digital Solutions";

  return (
    <main className="relative bg-black-100 w-full min-h-screen flex justify-center items-center">
      {/* Spotlight Background */}
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

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Projects Section */}
        <div className="mt-32">
          <h2 className="text-5xl font-bold text-center mb-8 text-white">
            MY PORTFOLIO
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Get In Touch</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <FaPhone />, text: "+91-8218504473" },
              { icon: <FaEnvelope />, text: "tusharpachouri001@gmail.com" },
              { icon: <FaBriefcase />, text: "Available for Freelance" },
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg flex items-center gap-3 hover:bg-gray-700 transition"
              >
                {contact.icon}
                <span>{contact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
