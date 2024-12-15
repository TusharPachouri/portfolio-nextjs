"use client";
import { useState } from "react";
import { NextPage } from "next";
import { FaCloudDownloadAlt, FaTimes } from "react-icons/fa";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Effects/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const blogPosts = [
  {
    id: 1,
    title: "My Journey into Web Development",
    date: "November 15, 2024",
    excerpt: "Reflecting on the challenges and triumphs of becoming a full-stack developer...",
    readTime: "5 min read",
    imageUrl: "/Blogs/blog01.jpg",
    tags: ["Web Development", "Career", "Personal Growth"],
    fullContent: `
      My journey into web development wasn't a straightforward path. I started as a curious enthusiast, spending late nights watching online tutorials and experimenting with code. The initial challenges were overwhelming – debugging seemed like deciphering an ancient language, and complex frameworks felt like navigating a maze.

      My breakthrough came when I committed to building real projects. Instead of just following tutorials, I started creating my own applications. The first project was a simple task manager, but it taught me more than months of passive learning. Each bug became a learning opportunity, each feature a milestone.

      Key technologies that transformed my journey included React for frontend, Node.js for backend, and understanding the nuances of responsive design. Networking with other developers, participating in open-source projects, and continuously learning became my mantra.

      For aspiring developers, my advice is simple: build, fail, learn, repeat. No educational path is linear, and every challenge is an opportunity for growth.
    `
  },
  {
    id: 2,
    title: "Building Responsive Design",
    date: "October 22, 2024",
    excerpt: "Practical strategies for creating seamless user experiences across devices...",
    readTime: "7 min read",
    imageUrl: "/Blogs/blog02.jpg",
    tags: ["UI/UX", "Frontend", "Design Principles"],
    fullContent: `
      Responsive design is more than just making websites look good on different devices. It's about creating fluid, adaptable experiences that work seamlessly across smartphones, tablets, and desktops.

      The mobile-first approach has become a cornerstone of modern web development. By designing for the smallest screen first, developers ensure core content and functionality remain prioritized. CSS Flexbox and Grid have revolutionized layout capabilities, making complex responsive designs more intuitive.

      Key strategies include:
      - Using relative units (%, em, vh) instead of fixed pixels
      - Implementing media queries for breakpoint adjustments
      - Optimizing images and assets for different screen sizes
      - Ensuring touch-friendly interfaces for mobile devices

      Performance is crucial. Techniques like lazy loading, minimizing CSS/JS, and using responsive images can dramatically improve user experience.
    `
  },
  {
    id: 3,
    title: "Advanced State Management in React Applications",
    date: "December 5, 2024",
    excerpt: "Exploring sophisticated state management techniques beyond basic React hooks...",
    readTime: "8 min read",
    imageUrl: "/Blogs/blog03.jpg",
    tags: ["React", "Frontend", "State Management"],
    fullContent: `
      State management is the backbone of complex React applications. While useState and useContext serve smaller applications well, more intricate projects demand more robust solutions.
  
      Context API with useReducer provides a powerful alternative to prop drilling. By centralizing state logic, we can create more predictable and maintainable code. Here's a practical implementation:
  
      \`\`\`javascript
      const initialState = { 
        users: [], 
        loading: false, 
        error: null 
      };
  
      function userReducer(state, action) {
        switch(action.type) {
          case 'FETCH_USERS_START':
            return { ...state, loading: true };
          case 'FETCH_USERS_SUCCESS':
            return { 
              ...state, 
              loading: false, 
              users: action.payload 
            };
          default:
            return state;
        }
      }
      \`\`\`
  
      For more complex scenarios, libraries like Redux Toolkit or Zustand offer advanced state management. They provide:
      - Simplified action creation
      - Built-in performance optimizations
      - Easier debugging capabilities
  
      The key is selecting the right tool for your specific application complexity and performance requirements.
    `
  },
  {
    id: 4,
    title: "Mastering Performance Optimization in React Applications",
    date: "January 15, 2025",
    excerpt: "Techniques to supercharge your React application's performance and user experience...",
    readTime: "9 min read",
    imageUrl: "/Blogs/blog04.jpg",
    tags: ["React", "Performance", "Optimization"],
    fullContent: `
      Performance is crucial in modern web applications. React provides multiple strategies to optimize rendering and reduce unnecessary computations.
  
      Key optimization techniques include:
  
      1. Memoization with React.memo and useMemo
      Prevent unnecessary re-renders by memoizing component renders and expensive computations:
  
      \`\`\`javascript
      const ExpensiveComponent = React.memo(({ data }) => {
        const processedData = useMemo(() => {
          return heavyDataProcessing(data);
        }, [data]);
  
        return <div>{processedData}</div>;
      });
      \`\`\`
  
      2. Code Splitting with React.lazy
      Reduce initial bundle size by dynamically loading components:
  
      \`\`\`javascript
      const LazyComponent = React.lazy(() => import('./HeavyComponent'));
  
      function MyApp() {
        return (
          <Suspense fallback={<Loader />}>
            <LazyComponent />
          </Suspense>
        );
      }
      \`\`\`
  
      3. Virtualization for Large Lists
      Render only visible items in long lists using libraries like react-window:
  
      \`\`\`javascript
      import { FixedSizeList } from 'react-window';
  
      function LargeList({ items }) {
        return (
          <FixedSizeList
            height={400}
            itemCount={items.length}
            itemSize={35}
            width={300}
          >
            {({ index, style }) => (
              <div style={style}>{items[index]}</div>
            )}
          </FixedSizeList>
        );
      }
      \`\`\`
  
      Performance optimization is an ongoing process. Regular profiling, understanding React's rendering lifecycle, and implementing strategic optimizations can significantly improve your application's responsiveness.
    `
  }
];

const Blog: NextPage = () => {
  const [activePost, setActivePost] = useState(blogPosts[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openFullArticle = (post: typeof blogPosts[0]) => {
    setActivePost(post);
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
          My Blogs
        </h1>
        <div className="grid text-center md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openFullArticle(post)}
            >
              {/* Blurry Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center filter blur-sm group-hover:blur-md transition-all duration-300"
                style={{ backgroundImage: `url(${post.imageUrl})` }}
              />

              {/* Content Overlay */}
              <div className="relative z-10 p-6 bg-black/40 hover:bg-black/50 transition-all duration-300">
                <h2 className="text-2xl font-semibold uppercase text-white mb-2">{post.title}</h2>
                <div className="flex items-center text-gray-300 mb-2">
                  <span className="mr-4">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="text-gray-200 mb-4">{post.excerpt}</p>
                
                {/* Tags */}
                <div className="flex space-x-2 mb-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-gray-800 rounded-full text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <MagicButton 
                  title="Read Full Article" 
                  icon={<FaCloudDownloadAlt />}
                  position="center"
                  handleClick={() => openFullArticle(post)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Article Modal */}
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
              src={activePost.imageUrl} 
              alt={activePost.title} 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h1 className="text-4xl font-bold uppercase text-white mb-4">{activePost.title}</h1>
            <div className="flex items-center text-gray-400 mb-6">
              <span className="mr-4">{activePost.date}</span>
              <span>{activePost.readTime}</span>
            </div>
            <div className="text-gray-300 space-y-4">
              {activePost.fullContent.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Blog;