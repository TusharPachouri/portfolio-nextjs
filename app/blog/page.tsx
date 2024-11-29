"use client";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Effects/Spotlight";
import { TextGenerateEffect } from "@/components/ui/Effects/TextGenerateEffect";
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

const blogPosts = [
  {
    id: 1,
    title: "My Journey into Web Development",
    date: "November 15, 2024",
    excerpt: "Reflecting on the challenges and triumphs of becoming a full-stack developer...",
    readTime: "5 min read",
    imageUrl: "/Blogs/blog01.jpg",
    tags: ["Web Development", "Career", "Personal Growth"]
  },
  {
    id: 2,
    title: "Building Responsive Design: Tips and Tricks",
    date: "October 22, 2024",
    excerpt: "Practical strategies for creating seamless user experiences across devices...",
    readTime: "7 min read",
    imageUrl: "/Blogs/blog02.jpg",
    tags: ["UI/UX", "Frontend", "Design Principles"]
  }
];

const Blog: NextPage = () => {
  const [activePost, setActivePost] = useState(blogPosts[0]);

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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-32 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Blog Posts List */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white mb-6">My Blog</h1>
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activePost.id === post.id 
                    ? 'bg-white/10 border border-white/20' 
                    : 'hover:bg-white/5'
                }`}
                onClick={() => setActivePost(post)}
              >
                <h2 className="text-2xl font-semibold text-white mb-2">{post.title}</h2>
                <div className="flex items-center text-gray-400 mb-2">
                  <span className="mr-4">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="text-gray-300">{post.excerpt}</p>
                <div className="mt-2 flex space-x-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Active Blog Post Details */}
          <div className="bg-white/10 rounded-lg p-8 border border-white/20">
            <img 
              src={activePost.imageUrl} 
              alt={activePost.title} 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h1 className="text-3xl font-bold text-white mb-4">{activePost.title}</h1>
            <div className="flex items-center text-gray-400 mb-4">
              <span className="mr-4">{activePost.date}</span>
              <span>{activePost.readTime}</span>
            </div>
            <p className="text-gray-300 mb-6">
              {activePost.excerpt} 
              {/* You would typically have full content here */}
            </p>
            <MagicButton 
              title="Read Full Article"
              icon={<FaCloudDownloadAlt />}
              position="center"
              otherClasses="w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;