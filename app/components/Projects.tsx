'use client'
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { caseStudies } from "./dekstopProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // Import the specific icons

type Props = {};

const Projects: React.FC = () =>  {
  const [currentStudyIndex, setCurrentStudyIndex] = useState(0);

  const handleNext = () => {
    if (currentStudyIndex < caseStudies.length - 1) {
      setCurrentStudyIndex(currentStudyIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStudyIndex > 0) {
      setCurrentStudyIndex(currentStudyIndex - 1);
    }
  };

  const currentStudy = caseStudies[currentStudyIndex];

  return (
    <div className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row">
      <h3 className="absolute top-24 pl-5 text-2xl uppercase tracking-[20px] text-gray-500 md:pl-0">
        Projects
      </h3>

      <section className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* dekstop only */}
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="hidden h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44 lg:flex"
        >
          <motion.img
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            src={currentStudy.image}
            alt=""
            className="relative w-[100%] object-cover md:w-[100%] xl:w-[666px]"
          />

          <div className="max-w-6xl space-y-10 px-0 md:px-10">
            <h4 className="text-center text-xl font-semibold md:text-4xl">
              <span className="underline decoration-[#F7AB0A]/50">
                Case Study {currentStudyIndex + 1} of {caseStudies.length}:
              </span>{" "}
              <a
                target="_blank"
                href={currentStudy.link}
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                {currentStudy.title}
              </a>
            </h4>

            <p className="w-[23rem] text-center text-base md:w-full md:text-left md:text-xl">
              {currentStudy.description}
            </p>
          </div>
          <button
            onClick={handlePrev}
            className={`absolute left-[25%] top-1/2 hidden -translate-y-1/2 transform bg-[#F7AB0A]/80 p-2 lg:block ${
              currentStudyIndex === 0
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
            disabled={currentStudyIndex === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={handleNext}
            className={`absolute right-[25%] top-1/2 hidden -translate-y-1/2 transform bg-[#F7AB0A]/80 p-2 lg:block ${
              currentStudyIndex === caseStudies.length - 1
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
            disabled={currentStudyIndex === caseStudies.length - 1}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </motion.div>

        {/* mobile and table that swipeable */}
        {caseStudies.map((currentStudy, index) => (
          <motion.div
            key={index}
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44 lg:hidden"
          >
            <motion.img
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
              src={currentStudy.image}
              alt=""
              className="relative w-[100%] object-cover md:w-[100%] xl:w-[666px]"
            />

            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="text-center text-xl font-semibold underline decoration-[#F7AB0A]/50 md:text-4xl">
                <a
                  target="_blank"
                  href={currentStudy.link}
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  {currentStudy.title}
                </a>
              </h4>

              <p className="w-[23rem] text-center text-base md:w-full md:text-left md:text-xl">
                {currentStudy.description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10"></div>
    </div>
  );
};

export default Projects;
