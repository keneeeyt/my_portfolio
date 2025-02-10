"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconClipboardCopy, IconFileBroken } from "@tabler/icons-react";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiShadcnui } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
          name: "TailwindCSS",
          content: <RiTailwindCssFill className="text-3xl" />,
        },
        { id: 3, name: "MongoDB", content: <SiMongodb className="text-3xl" /> },
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
      title: "QR Code Voting System",
      link: "https://voting-system-admin-zeta.vercel.app/auth/sign-in",
      description:
        "A QR Code Voting System tracks restaurant rankings, votes, and reviews. It generates QR codes and shows results in a dashboard with charts.",
      header:
        "https://res.cloudinary.com/de6w2afj5/image/upload/v1738688580/Screenshot_2025-02-05_at_1.00.30_AM_2_c6ujft.png",
      tools: [
        { id: 1, name: "ReactJS", content: <FaReact className="text-3xl" /> },
        {
          id: 2,
          name: "Javascript",
          content: <IoLogoJavascript className="text-3xl" />,
        },
        {
          id: 3,
          name: "TailwindCSS",
          content: <RiTailwindCssFill className="text-3xl" />,
        },
        { id: 4, name: "NodeJS", content: <DiNodejs className="text-3xl" /> },
        {
          id: 5,
          name: "ExpressJS",
          content: <SiExpress className="text-3xl" />,
        },
        { id: 6, name: "MongoDB", content: <SiMongodb className="text-3xl" /> },
      ],
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      pathname: "/rufus-fingerboard",
      title: "Rufus Fingerboard",
      link: "https://rufus-fingerboard.vercel.app/",
      description:
        "Rufus-Fingerboard is an e-commerce system with an admin-only dashboard to manage products, branding, and sales. Admins can track monthly sales, update site content, and oversee transactions in real time—ensuring efficient store management. 🚀",
      header:
        "https://res.cloudinary.com/dzosecp8f/image/upload/v1739174483/Screenshot_2025-02-10_at_4.00.15_PM_2_qifyig.png",
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
      pathname: "/trail-run-tracker",
      title: "Magsaysay Trail Run Tracker",
      link: "https://trailrun-time-tracking-fe.vercel.app/",
      description:
        "Magsaysay Trail Run Tracker is a race management system with an admin-only dashboard for tracking runners in real time. It features QR code scanning for easy registration and automatically records finishing times. The dashboard displays all runners ranked by completion time, including 1st place, 2nd place, and beyond, ensuring accurate and efficient race tracking. 🏃‍♂️🏆",
      header:
        "https://res.cloudinary.com/dzosecp8f/image/upload/v1739175353/Screenshot_2025-02-10_at_4.10.35_PM_2_wkoxma.png",
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative w-full py-11 mt-14"
    >
      <motion.div variants={itemVariants} className="w-full text-left relative">
        <h1
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-24 text-[12rem] font-bold text-gray-400 opacity-5 tracking-wider select-none leading-none whitespace-nowrap"
          style={{ fontFamily: "Crosshatcher, sans-serif" }}
        >
          Projects
        </h1>
        <div className="flex gap-3">
          <h2 className="relative text-6xl font-bold text-white">
            My <span className="text-purple">Projects</span>
          </h2>

          <svg
            width="75"
            height="62"
            viewBox="0 0 75 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="translate-y-9 ml-28 mt-10 hidden sm:block"
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
        <p className="relative text-gray-400 mt-2">
          A curated collection of projects I&apos;ve developed and contributed to.
        </p>
      </motion.div>

      <motion.div className="mt-14" variants={containerVariants}>
        <BentoGrid className="max-w-7xl mx-auto" type="projects">
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <BentoGridItem
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
            </motion.div>
          ))}
        </BentoGrid>
      </motion.div>

      <motion.p variants={itemVariants} className="text-sm text-gray-400 mt-14">
        <strong>Note:</strong> I have developed and contributed to numerous{" "}
        <strong>private systems</strong>, including a{" "}
        <strong>booking facility system with an admin dashboard</strong>, a{" "}
        <strong>benefit tracker</strong>, and a{" "}
        <strong>case management system</strong>. My work involves multiple
        technologies such as{" "}
        <strong>CodeIgniter, PHP Laravel, MySQL, AWS, and Amplify</strong>,
        ensuring scalable and efficient solutions. 🚀
      </motion.p>
    </motion.div>
  );
};

export default Projects;
