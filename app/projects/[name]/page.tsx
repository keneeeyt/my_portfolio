import ComingSoon from "@/components/coming-soon";
import Footer from "@/components/footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constant/constant";

const ProjectView = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 h-full">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
         <ComingSoon />
        <Footer />
      </div>
    </div>
  );
};

export default ProjectView;
