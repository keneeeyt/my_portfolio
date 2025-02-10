"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface TextareaProps // eslint-disable-line
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100; // Change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0); // eslint-disable-line
    let mouseY = useMotionValue(0); // eslint-disable-line

    function handleMouseMove({ currentTarget, clientX, clientY }: any) { // eslint-disable-line
      let { left, top } = currentTarget.getBoundingClientRect(); // eslint-disable-line
      mouseX.set(clientX - left); 
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--violet-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <textarea
          className={cn(
            `flex w-full min-h-[100px] border border-dashed bg-gray-50 dark:bg-black-100 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm resize-none
         file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] dark:focus-visible:ring-0
          disabled:cursor-not-allowed disabled:opacity-50
          group-hover/input:shadow-none transition duration-400`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
