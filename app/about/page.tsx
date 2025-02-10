"use client";
import Footer from "@/components/footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constant/constant";
import AboutMe from "./_components/about-me";
import Experience from "./_components/experience";

const AboutPage = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center overflow-hidden flex-col mx-auto sm:px-10 px-5 h-full">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <AboutMe />
        <Experience />
        <Footer />
      </div>
    </div>
  )
}

export default AboutPage;