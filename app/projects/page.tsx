import Footer from "@/components/footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constant/constant";
import Projects from "./_components/projects";

const ProjectPage = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 h-full">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default ProjectPage;
