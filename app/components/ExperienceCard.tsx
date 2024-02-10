'use client'
import { motion } from "framer-motion";
import React from "react";

type Props = {
  companyImages: string;
  role: string;
  companyName: string;
  skill: string;
  skill2: string;
  skill3: string;
  skill4: string;
  dateIn: string;
  dateEnded: string;
  summary1: string;
  summary2: string;
  summary3: string;
  summary4: string;
  currentlyWork: string;
};

const ExperienceCard = ({
  companyImages,
  role,
  companyName,
  skill,
  skill2,
  skill3,
  skill4,
  dateIn,
  dateEnded,
  summary1,
  summary2,
  summary3,
  summary4,
  currentlyWork,
}: Props) => {
  return (
    <motion.article
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8 mt-[5rem] flex w-[350px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-0 overflow-hidden rounded-[1rem] bg-[#292929] p-10 md:mb-0 md:mt-0 md:w-[600px] xl:w-[900px]"
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
        {/* your role */}
        <h4 className="text-[1.7rem] font-light md:text-4xl lg:text-4xl xl:text-4xl">
          {role}
        </h4>
        {/* company name */}
        <p className="mt-1 text-xl font-bold">{companyName}</p>
        <div className="max-w-56 my-2 flex space-x-2">
          {/* tech stack that used */}
          <img className="h-10 w-10 rounded-full" src={skill} alt="" />
          <img className="h-10 w-10 rounded-full" src={skill2} alt="" />
          <img className="h-10 w-10 rounded-full" src={skill3} alt="" />
          <img className="h-10 w-10 rounded-full" src={skill4} alt="" />
        </div>
        {/* STARTED WORK...- ENDED... */}
        <p className="py-5 uppercase text-gray-300">
          {dateIn} - {dateEnded} {currentlyWork}
        </p>
        <div className="h-[8rem] overflow-y-scroll scrollbar-thin pr-4">
        <ul className="ml-5 list-disc space-y-4 text-lg">
          <li>{summary1}</li>
          <li>{summary2}</li>
          <li>{summary3}</li>
          <li>{summary4}</li>
        </ul>
        </div>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
