"use client";
import { IconClipboardCopy, IconFileBroken } from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiShadcnui, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import MagicButton from "./ui/magic-button";
import { MdNavigateNext } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const FeaturedProjects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  const items = [
    {
      pathname: "/track-nest",
      title: "TrackNest",
      link: "https://track-nest.vercel.app/store",
      description:
        "Centralizing financial and inventory data boosts accuracy, efficiency, and decision-making, streamlining operations, improving control, and ensuring real-time insights for better business performance.",
      header:
        "https://res.cloudinary.com/de6w2afj5/image/upload/v1738684899/Screenshot_2025-02-04_at_11.59.42_PM_2_foyfhc.png",
      tools: [
        {
          id: 1,
          name: "NextJS",
          content: <RiNextjsFill className="text-3xl" />,
        },
        {
          id: 2,
          name: "Tailwind CSS",
          content: <RiTailwindCssFill className="text-3xl" />,
        },
        {
          id: 3,
          name: "MongoDB",
          content: <SiMongodb className="text-3xl" />,
        },
        {
          id: 4,
          name: "ShadcnUI",
          content: <SiShadcnui className="text-3xl" />,
        },
      ],
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      pathname: "/voting-system",
      title: "QRcode Voting System",
      link: "https://voting-system-admin-zeta.vercel.app/auth/sign-in",
      description:
        "A QR Code Voting System tracks restaurant rankings, votes, and reviews. It generates QR codes and shows results in a dashboard with charts.",
      header:
        "https://res.cloudinary.com/de6w2afj5/image/upload/v1738688580/Screenshot_2025-02-05_at_1.00.30_AM_2_c6ujft.png",
      tools: [
        {
          id: 1,
          name: "ReactJS",
          content: <FaReact className="text-3xl" />,
        },
        {
          id: 2,
          name: "JavaScript",
          content: <IoLogoJavascript className="text-3xl" />,
        },
        {
          id: 3,
          name: "Tailwind CSS",
          content: <RiTailwindCssFill className="text-3xl" />,
        },
        {
          id: 4,
          name: "NodeJS",
          content: <DiNodejs className="text-3xl" />,
        },
        {
          id: 5,
          name: "ExpressJS",
          content: <SiExpress className="text-3xl" />,
        },
        {
          id: 6,
          name: "MongoDB",
          content: <SiMongodb className="text-3xl" />,
        },
      ],
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative w-full py-11 min-h-[6rem] lg:h-screen"
    >
      <div className="w-full text-left relative">
        {/* Background Text - Sticks to the Left */}
        <h1
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-24 text-[12rem] font-bold text-gray-400 opacity-5 tracking-wider select-none leading-none whitespace-nowrap"
          style={{ fontFamily: "Crosshatcher, sans-serif" }}
        >
          Projects
        </h1>

        {/* Foreground Heading */}
        <div className="flex gap-3">
          <h2 className="relative text-6xl font-bold text-white">
            Featured <span className="text-purple">Projects</span>
          </h2>
          <svg
            width="75"
            height="62"
            viewBox="0 0 75 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="translate-y-9 ml-5 hidden sm:block"
          >
            <path
              d="M1 1C6.24431 1.21626 11.5365 2.05428 16.6516 3.13955C28.7596 5.70848 41.2898 9.45859 51.3287 17.0631C61.1747 24.5214 66.3737 34.4703 69.1034 46.2597C70.3557 51.6681 70.3959 56.1136 70.6176 61.434"
              stroke="#D4D4D4"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M63 57.185C65.135 58.2982 67.2076 59.4555 69.2541 60.7235C70.1813 61.2979 70.997 62.1916 71.624 60.9045C72.5057 59.0948 73.0026 57.3294 74.5536 56"
              stroke="#D4D4D4"
              strokeWidth="0.5"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>

        {/* Subtitle */}
        <p className="relative text-gray-400 mt-2 over">
          A selection of projects that I&apos;ve worked on.
        </p>
      </div>
      <div className="mt-14">
        <BentoGrid className="max-w-7xl mx-auto" type="projects">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              keyIndex={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              link={item.link}
              pathname={item.pathname}
              tools={item.tools}
              type="projects"
              className2="overflow-hidden"
            />
          ))}
        </BentoGrid>
      </div>
      <div className="flex justify-center items-center">
        <Link
          href="/projects"
          className="flex justify-center items-center gap-3 mt-7 max-w-md"
        >
          <p
            className="
          text-center
          text-gray-400
          dark:text-white
        "
          >
            See more projects
          </p>
          <MagicButton
            title=""
            position="right"
            icon={<MdNavigateNext />}
            otherClasses="p-0 rounded-full h-8 px-2"
          />
        </Link>
      </div>
    </motion.section>
  );
};

export default FeaturedProjects;
