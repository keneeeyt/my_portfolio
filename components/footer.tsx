"use client"
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/magic-button";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full relative pt-20 pb-10 overflow-hidden"
      id="contact"
    >
      {/* background grid */}
      <div className="absolute inset-x-0 -bottom-72">
        <img src="/footer-grid.svg" alt="grid" className="w-full opacity-50" /> {/* eslint-disable-line */}
      </div>

      <div className="flex flex-col items-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="heading lg:max-w-[45vw]"
        >
          Elevate <span className="text-purple">your</span> digital presence
          with confidence.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-white-200 md:mt-10 my-5 text-center"
        >
          Let&apos;s collaborate to create impactful digital solutions tailored to
          your needs. Reach out today, and let&apos;s turn your vision into reality.
        </motion.p>
        <motion.a 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          href="mailto:cervantes.klc@gmail.com"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="gap-4 h-12 rounded-2xl px-6"
          />
        </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className="flex mt-16 md:flex-row flex-col justify-center items-center"
      >
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Kenneth Louie Cervantes
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
