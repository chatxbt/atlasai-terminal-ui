"use client";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-fit flex items-center justify-center", className)}>
      [
      {[...new Array(4)].map((_, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 0.9,
            times: [0, 0.1, 0.5, 0.6],
            delay: i * 0.12,
            repeat: Infinity,
            ease: "linear",
            repeatType: "mirror",
          }}
          className="mx-px"
          key={i}
        >
          =
        </motion.span>
      ))}
      ]
    </div>
  );
};
