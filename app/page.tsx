"use client";
import Approach from "@/components/approach";
import FeaturedProjects from "@/components/featured-projects";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonial";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constant/constant";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <FeaturedProjects />
        <Testimonials />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
