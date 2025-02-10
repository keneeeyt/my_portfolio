"use client";
import React, { useState, JSX } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
  renderItem,
}: {
  items: { id: number; name: string; content: React.ReactNode }[];
  renderItem: (item: { id: number; name: string; content: React.ReactNode }) => JSX.Element;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const x = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 5 };

  // Tooltip rotation and translation
  const rotate = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-20, 20]), springConfig);

  const handleMouseMove = (event: any) => { // eslint-disable-line
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex items-center gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 200, damping: 10 },
                }}
                exit={{ opacity: 0, y: 15, scale: 0.6 }}
                style={{ translateX, rotate }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 text-xs text-white bg-black rounded-md shadow-lg whitespace-nowrap"
              >
                {item.name}
              </motion.div>
            )}
          </AnimatePresence>
          <div onMouseMove={handleMouseMove} className="cursor-pointer">
            {renderItem(item)}
          </div>
        </div>
      ))}
    </div>
  );
};
