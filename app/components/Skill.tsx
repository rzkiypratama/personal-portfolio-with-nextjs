'use client'
import { motion } from "framer-motion";
import React from "react";

type Props = {
  src: string;
  percent: number;
};

function Skill({ percent, src }: Props) {
  return (
    <section className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src={src}
        className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
      />
      <div className="absolute z-0 h-24 w-24 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32">
        <div className="flex h-full items-center justify-center">
          <p className="text-3xl font-bold text-black opacity-100">
            {percent}%
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skill;
