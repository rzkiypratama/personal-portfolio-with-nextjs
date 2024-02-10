'use client'
import { motion } from "framer-motion";
import React from "react";

interface Experience {
  companyImages: string;
  role: string;
  companyName: string;
  skills: string[]; // Menggabungkan keterampilan ke dalam satu array
  dateIn: string;
  dateEnded: string;
  summary: string[]; // Menggabungkan ringkasan ke dalam satu array
  currentlyWork: string;
}

const ExperienceCard: React.FC<Experience> = ({
  companyImages,
  role,
  companyName,
  skills,
  dateIn,
  dateEnded,
  summary,
  currentlyWork,
}) => {
  return (
    <motion.article
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8 mt-[5rem] flex w-[350px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-0 overflow-hidden rounded-[1rem] bg-[#292929] p-10 md:mb-0 md:mt-0 md:w-[600px] xl:w-[800px]"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-[6rem] w-[6rem] rounded-full object-cover object-center xl:h-[9rem] xl:w-[9rem]"
        src={companyImages}
        alt=""
      />

      <div className="px-0 md:px-10">
        {/* Peran Anda */}
        <h4 className="text-[1.7rem] font-light md:text-4xl lg:text-4xl xl:text-4xl">
          {role}
        </h4>
        {/* Nama Perusahaan */}
        <p className="mt-1 text-xl font-bold">{companyName}</p>
        <div className="max-w-56 my-2 flex space-x-2">
          {/* Keterampilan yang Digunakan */}
          {skills.map((skill, index) => (
            <img
              key={index}
              className="h-10 w-10 rounded-full"
              src={skill}
              alt=""
            />
          ))}
        </div>
        {/* Waktu Mulai - Berakhir */}
        <p className="py-5 uppercase text-gray-300">
          {dateIn} - {dateEnded} {currentlyWork}
        </p>
        <div className="h-[8rem] overflow-y-scroll scrollbar pr-4">
          <ul className="ml-5 list-disc space-y-4 text-lg">
            {/* Ringkasan Pengalaman */}
            {summary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
