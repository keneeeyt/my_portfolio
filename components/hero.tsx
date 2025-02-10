import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { LuTwitter, LuGithub  } from "react-icons/lu";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { LinkPreview } from "./ui/link-preview";

const Hero = () => {
  const socialLinks = [
    {
      id: 1,
      link: "https://github.com/keneeeyt",
      name: "GitHub",
      content: <LuGithub className="text-2xl hover:text-purple transition" />,
    },
    {
      id: 2,
      link: "https://www.facebook.com/gugmapa/",
      name: "Facebook",
      content: (
        <FaFacebookSquare className="text-2xl hover:text-purple transition" />
      ),
    },
    {
      id: 3,
      link: "https://x.com/itskennot1",
      name: "Twitter",
      content: <LuTwitter className="text-2xl hover:text-purple transition" />,
    },
    {
      id: 4,
      link: "https://drive.google.com/file/d/1IH0QqvXvEnLCYZPCRi17cTgrj5FNTzop/view?usp=drive_link",
      name: "Resume",
      content: (
        <IoDocumentAttachOutline className="text-2xl hover:text-purple transition" />
      ),
    },
  ];

  return (
    <div className="pb-20 pt-36 h-screen">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#CBACF9"
        />
        {/* <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" /> */}
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-transparent text-white/80 shadow-[0_0_10px_rgba(168,85,247,0.2)] border border-purle-50">
            {/* Glowing dot */}
            <span className="h-2 w-2 rounded-full bg-purple shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>

            {/* Text */}
            <span className="text-sm">
              Explore My Professional{" "}
              <span className="cursor-pointer border-b pb-[1px] hover:border-purple">
                Journey
              </span>
            </span>

            {/* Instagram icon */}
            <span>📷</span>
          </div>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="I am Kenneth Louie Cervantes"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I design, develop, and optimize software and web applications,
            ensuring efficiency, reliability, and user-centric solutions.
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              position="right"
              icon={<FaLocationArrow />}
              otherClasses="gap-4 h-12 rounded-2xl px-6"
            />
          </a>

          <div className="mt-7 flex gap-3 items-center">
            {/* <AnimatedTooltip
              items={socialLinks}
              renderItem={(item: any) => item.content}
            /> */}
            {
              socialLinks.map((link: any) =>( // eslint-disable-line
                <LinkPreview url={link.link} key={link.id}>
                  {link.content}
                </LinkPreview>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
