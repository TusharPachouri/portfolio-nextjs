"use client";
import { useState } from "react";
import { NextPage } from "next";
import { FaCloudDownloadAlt, FaTimes, FaGithub, FaLink } from "react-icons/fa";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Effects/Spotlight";

const projects = [
  {
    id: 1,
    title: "Nebula Blog",
    date: "December 2024",
    description: "Nebula Blog is an interactive platform for users to create, manage, and discover blog content, AI-powered content generation.",
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
    imageUrl: "/ProjectImages/NebulaBlog.jpg",
    fullContent: `
      Nebula Blog represents a comprehensive web application designed to revolutionize content creation and discovery. By integrating cutting-edge AI technologies, the platform offers users an intuitive and powerful blogging experience.

      Key Features:
      - AI-powered content generation
      - User authentication and profile management
      - Responsive and modern UI/UX design
      - Seamless content management system
      - Cloud-based image and media storage

      The project leverages modern web technologies to create a scalable and performant platform. By utilizing React for the frontend, Node.js for backend services, and MongoDB for data storage, Nebula Blog provides a robust solution for digital content creators.

      Challenges overcome during development included implementing secure authentication, integrating AI content generation, and ensuring a smooth, responsive user experience across different devices.
    `
  },
  {
    id: 2,
    title: "3D Portfolio",
    date: "November 2024",
    description: "An interactive portfolio featuring 3D models and animations to showcase projects and skills dynamically.",
    technologies: [
      "Three.js",
      "Next.js",
      "React",
      "GLTF Models",
      "CSS Animations",
    ],
    githubLink: "https://github.com/TusharPachouri/portfolio-nextjs",
    liveLink: "https://tusharpachouri.com/",
    imageUrl: "/ProjectImages/3DPortfolio.jpg",
    fullContent: `
      The 3D Portfolio project pushes the boundaries of traditional web portfolios by incorporating immersive 3D graphics and interactive animations. By utilizing Three.js and advanced web rendering techniques, the portfolio provides a unique and engaging way to showcase professional work.

      Technical Highlights:
      - Custom 3D model integration
      - Smooth camera animations
      - Responsive design across devices
      - Performance-optimized 3D rendering
      - Interactive project showcases

      The development process involved intricate WebGL programming, careful performance optimization, and creating a balance between visual appeal and functional design. Each 3D element was meticulously crafted to represent different aspects of my professional journey and technical skills.
    `
  },
  {
    id: 3,
    title: "Video Streaming Application",
    date: "October 2024",
    description: "A secure platform for video streaming where users can upload videos, customize profiles, and interact with content.",
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
    imageUrl: "/ProjectImages/VideoStreaming.jpg",
    fullContent: `
      The Video Streaming Application represents a comprehensive solution for modern content sharing and consumption. Developed with a focus on security, user experience, and scalability, this platform offers a robust environment for video creators and viewers.
  
      Key Features:
      - Secure user authentication using JWT and bcrypt
      - Video upload and streaming capabilities
      - Profile customization
      - Content interaction mechanisms
      - Cloud-based media storage with Cloudinary
  
      The project tackled several complex challenges:
      - Implementing secure authentication and authorization
      - Managing large video file uploads and streams
      - Creating a responsive and intuitive user interface
      - Ensuring optimal performance for media content delivery
  
      Technical Architecture:
      - Backend powered by Node.js and Express
      - Database management with MongoDB
      - Secure file storage using Cloudinary
      - RESTful API design for seamless frontend integration
  
      The application demonstrates a comprehensive approach to building a modern, secure, and scalable video streaming platform.
    `
  },
  {
    id: 4,
    title: "DropDash",
    date: "September 2024",
    description: "A secure file-sharing platform that lets users upload, share, and manage files with enhanced security and scalability.",
    technologies: [
      "Flask",
      "Azure Blob Storage",
      "Azure Table Storage",
      "Azure CDN",
    ],
    githubLink: "https://github.com/TusharPachouri/DropDash",
    liveLink: "https://dropdash.vercel.app/",
    imageUrl: "/ProjectImages/DropDash.jpg",
    fullContent: `
      DropDash emerges as a cutting-edge file-sharing solution, designed to provide users with a secure, efficient, and scalable platform for file management and sharing.
  
      Core Capabilities:
      - Secure file upload and storage
      - User-friendly file management interface
      - Advanced sharing mechanisms
      - High-performance cloud storage integration
      - Content Delivery Network (CDN) optimization
  
      Technology Stack Highlights:
      - Developed using Flask for a lightweight, flexible backend
      - Leveraged Azure's cloud infrastructure for robust storage solutions
      - Implemented secure file transfer protocols
      - Utilized Azure Blob Storage for efficient file handling
      - Integrated Azure CDN for global content distribution
  
      Architectural Innovations:
      The project demonstrates a sophisticated approach to cloud-based file sharing, combining Flask's simplicity with Azure's powerful cloud services. By utilizing Azure Blob Storage and Table Storage, DropDash ensures data integrity, scalability, and performance.
  
      Key Challenges Addressed:
      - Implementing secure file upload mechanisms
      - Managing large-scale file storage efficiently
      - Creating a responsive and intuitive user interface
      - Ensuring global accessibility through CDN
    `
  },
  {
    id: 5,
    title: "Rhythm Reaper",
    date: "August 2024",
    description: "A Python app that fetches top tracks from Spotify and downloads them in MP3 format using Pytube, simplifying music library management.",
    technologies: ["Python", "Spotify API", "Pytube"],
    githubLink: "https://github.com/TusharPachouri/RhythmReaper",
    liveLink: "#",
    imageUrl: "/ProjectImages/RhythmReaper2.jpg",
    fullContent: `
      RhythmReaper represents an innovative approach to music library management, bridging the gap between music discovery and personal collection through intelligent automation.
  
      Key Features:
      - Spotify API integration for track discovery
      - Automatic MP3 download functionality
      - Simplified music library management
      - Intelligent track selection mechanisms
  
      Technical Implementation:
      The application leverages the power of Python to create a seamless music downloading experience. By integrating the Spotify API, RhythmReaper allows users to effortlessly discover and download their favorite tracks.
  
      Core Functionalities:
      - Fetch top tracks from Spotify
      - Convert and download tracks in MP3 format
      - Provide user-friendly interface for music library management
      - Handle various edge cases in track downloading
  
      Challenges and Solutions:
      - Managing API rate limits
      - Ensuring download reliability
      - Handling different music formats and sources
      - Creating a robust error-handling mechanism
  
      The project showcases the potential of Python in creating practical, user-centric automation tools for music enthusiasts.
    `
  }
  // ... other projects with similar detailed structure
];

const Portfolio: NextPage = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openFullProject = (project: typeof projects[0]) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  return (
    <main className="relative bg-black-100 w-full min-h-screen flex justify-center items-center">
      {/* Spotlight Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="green"
        />
        <Spotlight
          className="h-[40vh] w-[50vw] top-10 left-1/2 -translate-x-1/2"
          fill="purple"
        />
        <Spotlight
          className="left-1/2 top-28 h-[80vh] w-[50vw] -translate-x-1/2"
          fill="gray"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl pt-32 mx-auto px-4 py-16">
        <h1 className="text-5xl text-center font-bold uppercase text-white mb-12">
          My Projects
        </h1>
        <div className="grid text-center md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openFullProject(project)}
            >
              {/* Blurry Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center filter blur-sm group-hover:blur-md transition-all duration-300"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              />

              {/* Content Overlay */}
              <div className="relative z-10 p-6 bg-black/40 hover:bg-black/50 transition-all duration-300">
                <h2 className="text-2xl uppercase font-semibold text-white mb-2">{project.title}</h2>
                <div className="flex items-center text-right text-gray-300 mb-2">
                  {/* <span className="flex items-center">{project.date}</span> */}
                </div>
                <p className="text-gray-200 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex space-x-2 mb-4 flex-wrap">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-gray-800 items-center rounded-full text-xs text-white mb-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links Button */}
                <MagicButton 
                  title="View Project Details" 
                  icon={<FaCloudDownloadAlt />}
                  position="center"
                  handleClick={() => openFullProject(project)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Project Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 pt-36 flex justify-center items-center p-4 overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white/10 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <FaTimes size={24} />
            </button>
            <img 
              src={activeProject.imageUrl} 
              alt={activeProject.title} 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h1 className="text-4xl font-bold uppercase text-white mb-4">{activeProject.title}</h1>
            <div className="flex items-center text-gray-400 mb-6">
              <span className="mr-4">{activeProject.date}</span>
            </div>
            <div className="text-gray-300 space-y-4">
              {activeProject.fullContent.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            {/* Project Links */}
            <div className="flex gap-4 mt-6 justify-center">
              <a
                href={activeProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href={activeProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md transition"
              >
                <FaLink className="mr-2" /> Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Portfolio;