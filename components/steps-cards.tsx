"use client";

import { motion, useAnimation } from "framer-motion";
import { GrPlan, GrLaunch } from "react-icons/gr";
import React, { JSX, useEffect } from "react";
import { GiProgression } from "react-icons/gi";
import { MdOutlineRocketLaunch, MdOutlineTipsAndUpdates } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

interface CardProps {
  title: string;
  description: string;
  year: string;
  mini_title: string;
  icon: JSX.Element;
  mini_icon: JSX.Element;
  index: number;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  year,
  mini_title,
  mini_icon,
  icon,
  index,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: index * 0.3 } });
    }
  }, [controls, inView]); // eslint-disable-line

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="relative p-6 bg-black-100 border-dashed text-white rounded-xl shadow-lg overflow-hidden border w-full h-[450px] cursor-pointer group"
    >
      {/* Views Section */}
      <div className="absolute top-4 left-4 flex items-center gap-2 text-gray-400 text-sm">
        {mini_icon}
        <span>{mini_title}</span>
      </div>

      <div className="mt-12">
        {/* Card Content */}
        <h3 className="text-2xl font-bold text-center relative overflow-hidden">
          <span className="relative z-10">{title}</span>
          <span
            className="absolute inset-0 bg-purple transition-all duration-500 opacity-0 group-hover:opacity-100"
            style={{
              background: "linear-gradient(to right, transparent, purple, transparent)",
              filter: "blur(10px)",
            }}
          ></span>
        </h3>
        <p className="text-gray-400 mt-5">{description}</p>
      </div>
      {/* Animated Icon on Hover */}
      <motion.div className="absolute bottom-20 rotate-12 right-6 text-white opacity-0 group-hover:opacity-10 group-hover:translate-y-[-10px] transition-all duration-300">
        {icon}
      </motion.div>

      {/* Year in Background */}
      <div
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
        className="absolute bottom-2 right-0 text-gray-700 text-7xl font-bold opacity-30"
      >
        {year}
      </div>
    </motion.div>
  );
};

export default function CardList() {
  const cards = [
    {
      title: "Planning & Strategy",
      description: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
      year: "Planning",
      mini_title: "Phase 1",
      mini_icon: <GrPlan />,
      icon: <motion.div whileHover={{ scale: 1.2 }}><IoCreateOutline className="w-24 h-24 text-gray-400" /></motion.div>,
    },
    {
      title: "Development & Progress Update",
      description: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
      year: "Progress",
      mini_title: "Phase 2",
      mini_icon: <GiProgression />,
      icon: <motion.div whileHover={{ scale: 1.2 }}><MdOutlineTipsAndUpdates className="w-24 h-24 text-gray-400" /></motion.div>,
    },
    {
      title: "Development & Launch",
      description: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
      year: "Launch",
      mini_title: "Phase 3",
      mini_icon: <MdOutlineRocketLaunch />,
      icon: <motion.div whileHover={{ scale: 1.2 }}><GrLaunch className="w-24 h-24 text-gray-400" /></motion.div>,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-16 z-[999999]">
      {cards.map((card, index) => (
        <Card key={index} {...card} index={index} />
      ))}
    </div>
  );
}
