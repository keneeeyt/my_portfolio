import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick, // eslint-disable-line
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    // Button code
    <button
      className={`inline-flex animate-shimmer items-center justify-center 
      border border-slate-900 bg-[linear-gradient(110deg,#0a0c0f,25%,#1a0f2b,50%,#0d1724,75%,#050609)] 
      bg-[length:200%_100%] font-medium text-white transition-colors focus:outline-none focus:ring-2 
      focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-black ${otherClasses}`}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default MagicButton;
