import { Timeline } from "@/components/ui/timeline";

const data = [
  {
    title: "March 2023 - PRESENT",
    content: (
      <div className="text-left">
        <h1 className="font-semibold text-xl">Mid - Level Software Engineer</h1>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Sparksoft Solutions Inc. - Quezon City Philippines
        </p>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          <li>
            <strong>Software Development & Maintenance:</strong> Develop and
            maintain software and web applications to ensure seamless
            performance.
          </li>
          <li>
            <strong>Code Implementation & Testing:</strong> Write, test, and
            debug code to enhance functionality and fix issues.
          </li>
          <li>
            <strong>Feature Development:</strong> Implement new features and
            improve existing systems based on project requirements.
          </li>
          <li>
            <strong>Collaboration:</strong> Work closely with team members to
            understand objectives and deliver effective solutions.
          </li>
          <li>
            <strong>Optimization & Performance:</strong> Ensure applications are
            efficient, reliable, and user-friendly through continuous
            improvements.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Jan 9 - March 9 2023",
    content: (
      <div className="text-left">
        <h1 className="font-semibold text-xl">Web Developer</h1>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Zuitt Coding Bootcamp - Philippines
        </p>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          <li>
            <strong>Main Course Package:</strong> Completed/Attended
          </li>
          <li>
            <strong>Developed a Booking System API:</strong> Engineered a robust
            and scalable API to streamline the booking process.
          </li>
          <li>
            <strong>Designed a Full-Stack E-Commerce Platform:</strong> Built a
            dynamic e-commerce application using the MERN stack, incorporating
            user authentication, payment integration, and an intuitive UI/UX.
          </li>
        </ul>
      </div>
    ),
  },
];

const Experience = () => {
  return (
    <section className="relative w-full mt-5">
      <div className="w-full text-center relative">
        {/* Background Text - Fade In */}
        <h1
          className="absolute ml-16 top-20 -translate-y-1/2 text-[10rem] font-bold text-gray-400 opacity-5 tracking-wider select-none leading-none whitespace-nowrap"
          style={{
            fontFamily: "Crosshatcher, sans-serif",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        >
          Experience
        </h1>

        {/* Foreground Heading - Fade and Slide In */}
        <div className="flex justify-center gap-3">
          <h2
            className="relative text-7xl tracking-wide font-semibold text-white"
            style={{ fontFamily: "The Coastal, sans-serif" }}
          >
            Work Experiences
          </h2>
        </div>

        {/* Content */}
        <div className="mt-10">
        <Timeline data={data} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
