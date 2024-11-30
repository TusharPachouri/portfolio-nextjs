"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll detection and visibility management
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide nav when scrolling down, show when scrolling up or at top
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
        // Close mobile menu when scrolling
        setIsMobileMenuOpen(false);
      } else {
        setVisible(true);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Check for mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);

    // Initial check
    checkMobile();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Mobile menu toggle button
  const MobileMenuToggle = () => (
    <button 
      onClick={toggleMobileMenu} 
      className="md:hidden fixed top-5 right-5 z-[5100] p-2 bg-black/50 rounded-full"
    >
      {isMobileMenuOpen ? <X color="white" /> : <Menu color="white" />}
    </button>
  );

  // Render nav items
  const NavContent = () => (
    <>
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
          className={cn(
            "relative dark:text-neutral-50 md:font-normal items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 hover:font-bold"
          )}
        >
          <span className="text-sm font-bold brightness-125 !cursor-pointer hover:font-semibold">
            {navItem.name}
          </span>
        </Link>
      ))}
    </>
  );

  return (
    <>
      {isMobile && <MobileMenuToggle />}
      
      <AnimatePresence mode="wait">
        {/* Desktop Navigation */}
        <motion.div
          key="desktop-nav"
          initial={{ opacity: 1, y: -100 }}
          animate={{ 
            y: visible ? 0 : -100, 
            opacity: visible ? 1 : 0 
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "hidden md:flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          <NavContent />
        </motion.div>

        {/* Mobile Navigation */}
        {isMobile && isMobileMenuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden fixed top-20 inset-x-0 mx-5 z-[5050] bg-black/80 rounded-lg p-4"
          >
            <div className="flex flex-col space-y-4 items-center">
              <NavContent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};