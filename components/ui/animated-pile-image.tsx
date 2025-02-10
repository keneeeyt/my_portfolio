"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { JSX, useEffect, useState } from "react";
import { AnimatedTooltip } from "./animated-tooltip";

type Testimonial = {
  src: string;
};

export const AnimatedPileImage = ({
  testimonials,
  techStack,
  autoplay = false,
  title,
  mini_title,
  mini_title_highlight,
  content,
  stack_title,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  techStack: { id: number; name: string; content: JSX.Element }[];
  title: string;
  mini_title: string;
  mini_title_highlight: string;
  content: string;
  stack_title: string;
}) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState<number[]>([]);

  useEffect(() => {
    // Generate random rotations only on the client side
    setRotations(testimonials.map(() => Math.floor(Math.random() * 21) - 10));
  }, [testimonials]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]); // eslint-disable-line

  if (rotations.length === 0) {
    return null; // or a loading spinner
  }

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 py-20 z-[99999]">
      <div className="relative mx-auto">
        <div className="grid space-y-10 lg:space-y-0 lg:grid-cols-3 space-x-0 lg:space-x-10 items-center">
          <div className="relative h-80 w-full z-[99999]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  onMouseEnter={handleNext}
                  onMouseLeave={handlePrev}
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotations[index],
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotations[index],
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotations[index],
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom z-[99999] max-w-sm"
                >
                  <Image
                    src={testimonial.src}
                    alt="about image"
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center z-[99999]"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="cols-span-1 lg:col-span-2 text-center lg:text-left lg:pl-4 lg:space-y-4">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <p className="relative z-10 text-gray-400 mt-2">
              {mini_title}{" "}
              <span className="text-purple">{mini_title_highlight}</span>
            </p>
            <p className="text-gray-400 mt-2 text-lg">{content}</p>
            <p className="text-gray-400 mt-10 text-lg">{stack_title}</p>
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
              <AnimatedTooltip
                items={techStack}
                renderItem={(item: any) => item.content} // eslint-disable-line
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
