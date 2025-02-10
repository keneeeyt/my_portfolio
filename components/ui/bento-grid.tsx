import { cn } from "@/lib/utils";
import { AnimatedTooltip } from "./animated-tooltip";
import { DirectionAwareHover } from "./direction-aware-hover";
import MagicButton from "./magic-button";
import { MdNavigateNext } from "react-icons/md";
import { FaLink } from "react-icons/fa";

export const BentoGrid = ({
  className,
  children,
  type,
}: {
  className?: string;
  children?: React.ReactNode;
  type?: string;
}) => {
  return (
    <div
      className={cn(
        type === "projects" ? "" : "lg:grid-cols-3",
        "grid grid-cols-1 gap-7 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
  pathname,
  tools,
  type,
  className2,
  keyIndex,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
  icon?: React.ReactNode;
  link?: string;
  pathname?: string;
  tools?: any[]; //eslint-disable-line
  type?: string;
  className2?: string;
  keyIndex?: number;
}) => {
  const isReversed = keyIndex !== undefined && keyIndex % 2 === 1; // Reverse if odd

  return type === "projects" ? (
    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 ${isReversed ? "flex-row-reverse" : ""} flex`}>
      {/* Image or Text Based on Condition */}
      {isReversed ? (
        <>
          {/* Image First (Left Side) when keyIndex is 1, 3, 5... */}
          <div
            className={cn(
              "col-span-1 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black-100 dark:border-white/[0.2] border-dashed bg-white border border-transparent justify-between flex flex-col space-y-4",
              className2
            )}
          >
            <DirectionAwareHover imageUrl={header as string}>
              <p className="font-bold text-xl">{title}</p>
            </DirectionAwareHover>
          </div>

          {/* Text Second (Right Side) */}
          <div
            className={cn(
              "lg:col-span-2 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black-100 dark:border-white/[0.2] border-dashed bg-white border border-transparent justify-between flex flex-col space-y-4",
              className
            )}
          >
            <div className="p-2 flex flex-col space-y-4">
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
              <div className="flex items-center space-x-4">
                <p>Tools:</p>
                <div className="flex space-x-2">
                  {tools && tools?.length > 0 && (
                    <AnimatedTooltip
                      items={tools}
                      renderItem={(item: any) => item.content} // eslint-disable-line
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="p-2 flex items-center justify-between">
              <a href={`/projects/${pathname}`}>
                <MagicButton
                  title="View Project"
                  position="right"
                  icon={<MdNavigateNext />}
                  otherClasses="gap-4 h-12 rounded-2xl px-6 text-xs md:text-base"
                />
              </a>
              <span className="group custom-hover-cursor">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaLink className="group-hover:text-purple" />
                  <p className="group-hover:underline group-hover:underline-offset-1 text-xs md:text-base">
                    Open Live Site
                  </p>
                </a>
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Text First (Left Side) when keyIndex is 0, 2, 4... */}
          <div
            className={cn(
              "lg:col-span-2 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black-100 dark:border-white/[0.2] border-dashed bg-white border border-transparent justify-between flex flex-col space-y-4",
              className
            )}
          >
            <div className="p-2 flex flex-col space-y-4">
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
              <div className="flex items-center space-x-4">
                <p>Tools:</p>
                <div className="flex space-x-2">
                  {tools && tools?.length > 0 && (
                    <AnimatedTooltip
                      items={tools}
                      renderItem={(item: any) => item.content} // eslint-disable-line
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="p-2 flex items-center justify-between text-">
              <a href={`/projects/${pathname}`}>
                <MagicButton
                  title="View Project"
                  position="right"
                  icon={<MdNavigateNext />}
                  otherClasses="gap-4 h-12 rounded-2xl px-6 text-xs md:text-base"
                />
              </a>
              <span className="group custom-hover-cursor">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaLink className="group-hover:text-purple" />
                  <p className="group-hover:underline group-hover:underline-offset-1 text-xs md:text-base">
                    Open Live Site
                  </p>
                </a>
              </span>
            </div>
          </div>

          {/* Image Second (Right Side) */}
          <div
            className={cn(
              "lg:col-span-1 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black-100 dark:border-white/[0.2] border-dashed bg-white border border-transparent justify-between flex flex-col space-y-4",
              className2
            )}
          >
            <DirectionAwareHover imageUrl={header as string}>
              <p className="font-bold text-xl">{title}</p>
            </DirectionAwareHover>
          </div>
        </>
      )}
    </div>
  )  : (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
