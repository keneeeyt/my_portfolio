import { cn } from "@/lib/utils";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "sonner";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  getData,
  userData,
}: {
  items: {
    user_testimonial: string;
    user_name: string;
    user_position: string;
    user_avatar: string;
    user_id: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  getData?: () => void;
  userData?: any; // eslint-disable-line
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [clonedItems, setClonedItems] = useState<typeof items>([]);

  useEffect(() => {
    // Clone the items array whenever `userData` changes
    const updatedClonedItems = [...items, ...items]; // Duplicate items for infinite scrolling
    setClonedItems(updatedClonedItems);
    setStart(false); // Reset animation to avoid stutter
    setTimeout(() => setStart(true), 50); // Restart animation after re-render
  }, [items, userData]);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speedValue =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", speedValue);
    }
  };

  useEffect(() => {
    getDirection();
    getSpeed();
  }, [direction, speed]); // eslint-disable-line

  const handleDeleteClick = (id: string) => {
    toast("Confirm Deletion", {
      className:
        "flex-col bg-black-100 border border-gray-400 border-dashed text-white",
      description: "This action is irreversible. Are you sure you want to proceed?",
      action: {
        label: "Proceed",
        onClick: () => deleteTestimonial(id),
      },
    });
  };

  const deleteTestimonial = async (id: string) => {
    try {
      const resp = await axios.delete(`/api/testimonial/${id}`);
      if (resp.status === 200) {
        toast.success("Testimonial Deleted Successfully");
        if (getData) {
          getData(); // Fetch updated data after deletion
        }
      } else {
        toast.error("Failed to delete testimonial");
      }
    } catch (err) {
      console.error("Failed to delete testimonial", err);
      toast.error("Failed to delete testimonial");
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {clonedItems.map((item, idx) => (
          <li
            key={idx}
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 dark:border-white/[0.2] border-dashed p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundImage:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>

              <div className="id-item hidden">{item.user_id}</div>

              <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white/70 font-normal">
                {item.user_testimonial}
              </span>

              <div className="relative z-20 mt-6 flex items-center">
                <div className="me-3">
                  <Image
                    src={item.user_avatar}
                    width={1000}
                    height={1000}
                    alt="User Avatar"
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>

                <div className="flex items-center justify-between w-full gap-1">
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold leading-[1.6] text-white">
                      {item.user_name}
                    </span>
                    <span className="text-sm leading-[1.6] text-white/50 font-normal">
                      {item.user_position}
                    </span>
                  </div>
                  {userData?.user_id === item.user_id && (
                    <FaTrash
                      id="delete-testi"
                      className="text-white/50 cursor-pointer hover:text-white transition duration-300"
                      onClick={() => handleDeleteClick(item.user_id)}
                    />
                  )}
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
