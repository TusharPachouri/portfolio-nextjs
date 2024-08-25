// pages/about.tsx

import { NextPage } from 'next';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const About: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-6">
        Hi, Im Tushar Pachouri, a software developer with a passion for creating dynamic and engaging web experiences. I specialize in technologies like Next.js, React, Node.js, and Python, and I love solving complex problems and building scalable applications.
      </p>
      <Link href="/">
        <a className="flex items-center text-blue-600 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Home
        </a>
      </Link>
    </div>
  );
};

export default About;
