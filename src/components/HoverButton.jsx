"use client";

import { ChevronRight } from "lucide-react";
import React from "react";
import { motion, useAnimation } from "motion/react";
import { cn } from "@/lib/utils";
const HoverButton = ({
  text,
  large,
  className = "",
  variant = "default",
  ...props
}) => {
  const controls = useAnimation();
  const textControls = useAnimation();

  const handleMouseEnter = () => {
    // Slide arrow in
    controls.start({
      x: 5, // arrow slides in to its natural place
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    });

    // Slight text shift
    textControls.start({
      x: -10,
      transition: { type: "spring", stiffness: 300 },
    });
  };

  const handleMouseLeave = () => {
    // Slide arrow out
    controls.start({
      x: 20,
      opacity: 0,
      transition: { type: "spring", stiffness: 300 },
    });

    // Reset text
    textControls.start({
      x: 0,
      transition: { type: "spring", stiffness: 300 },
    });
  };

  const variants = {
    default:
      "bg-[#7c31f6] border border-[#7c31f6] hover:bg-[#0a0a0a] text-white hover:border-black",
    outline:
      "bg-white border border-gray-400 text-black hover:bg-[#7c31f6] hover:text-white",
  };

  return (
    <motion.button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        variants[variant],
        large ? "py-3.5 px-8" : "px-5 py-2",
        "rounded-full flex items-center justify-center overflow-hidden relative transform duration-300 ease-out",
        className
      )}
      {...props}
    >
      {/* Text */}
      <motion.span animate={textControls}>{text || "Hover Me"}</motion.span>

      {/* Arrow */}
      <motion.span
        initial={{ x: 50 }}
        animate={controls}
        className="text-white inline-block absolute right-3 top-1/2 -translate-y-1/2"
      >
        <ChevronRight />
      </motion.span>
    </motion.button>
  );
};

export default HoverButton;
