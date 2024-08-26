"use client";
import React, { useEffect, useRef } from 'react';
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
import Typed from 'typed.js';

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate, wordsArray]);

  const typedElementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedElementRef.current) {
      const options = {
        strings: [
          "I Do Web Development",
          "I Do Web Design",
          "I Do UI/UX Design",
          "I Do Software Development"
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
        showCursor: true
      };
      const typed = new Typed(typedElementRef.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, []);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={` ${(idx > 1 ) ? "text-purple" : "dark:text-white text-black"} opacity-0`}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-1">
        <div className="dark:text-white text-black leading-snug tracking-wide text-left mb-2">
          {renderWords()}
        </div>
        <div className="dark:text-white text-left text-black leading-snug tracking-wide text-[40px] md:text-xl lg:text-2xl mb-2">
          <span ref={typedElementRef}></span>
        </div>
      </div>
    </div>
  );
};
