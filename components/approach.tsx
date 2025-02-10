import { motion, useAnimation } from "framer-motion";
import CardList from "./steps-cards";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Approach = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } });
    }
  }, [controls, inView]);

  return (
    <section className="relative w-full py-11 min-h-[6rem] lg:h-screen flex flex-col justify-center items-center px-6 lg:px-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="w-full text-left relative"
      >
        <h1
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-24 text-[12rem] font-bold text-gray-400 opacity-5 tracking-wider select-none leading-none whitespace-nowrap"
          style={{ fontFamily: "Crosshatcher, sans-serif" }}
        >
          Strategy
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-thin text-lg text-gray-300"
        >
          My Strategic
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative text-6xl font-bold text-white"
        >
          Thought <span className="text-purple">Process</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="relative text-gray-400 mt-2 text-lg"
        >
          A structured and efficient method for achieving optimal results.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="w-full mt-8"
      >
        <CardList />
      </motion.div>
    </section>
  );
};

export default Approach;
