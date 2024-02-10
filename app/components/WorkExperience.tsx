'use client'
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { workExperienceData } from "../api/workExperience";

const WorkExperience: React.FC = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-[5rem] h-auto pl-5 text-2xl uppercase tracking-[20px] text-gray-500 md:top-24 md:pl-0">
        Experience
      </h3>

      <div className="flex w-[24rem] snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 md:w-full">
        {/* Membuat kartu-kartu pengalaman kerja berdasarkan data */}
        {workExperienceData.map((experience, index) => (
          <ExperienceCard key={index}
            {...experience}          />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
