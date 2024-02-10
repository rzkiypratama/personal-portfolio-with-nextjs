'use client'
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About: React.FC = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.3,
      }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 pl-5 text-2xl uppercase tracking-[20px] text-gray-500 md:pl-0">
        About
      </h3>

      <section className="mx-auto w-full pb-[0.5rem] pt-[3rem] md:pb-0 md:pt-0">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          src="https://i.ibb.co/gZM0gFT/IMG-3784-3.png"
          className="-mb-20 h-[7rem] w-[100%] flex-shrink-0 rounded-lg object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[500px] xl:w-[700px]"
        />
      </section>

      <section className="space-y-2 px-0 md:space-y-10 md:px-10">
        <h4 className="text-2xl font-semibold md:text-4xl">
          Here is{" "}
          <span className="animate-pulse underline decoration-[#F7AB0A]">
            my
          </span>{" "}
          background
        </h4>
        <p className="text-base">
          Welcome to my website! I&apos;m Rizky Putra Pratama, a Software Engineer web
          developer based in Banjarbaru, South Kalimantan. I specialize in
          creating engaging and user-friendly interfaces, and I&apos;m skilled
          in ReactJS, NextJS, VueJS for front-end and NodeJS for back-end. With
          prior experience in design and digital marketing, I create visually
          appealing and functional websites and mobile apps.
          {/* I am a full-stack web developer. I can
          turn your figma design into website! I
          have expertise working with Reactjs,
          NextJs, VueJs for frontend and Nodejs
          for backend, oh yeah not forget using
          redux for state-management, one more,
          react native for mobile.  */}
        </p>

        <p>
          Curently i&apos;m working in Orion Scope as Software Developer.
          I&apos;m passionate about learning and taking on new challenges in web
          development. Let&apos;s work together on your next project!
        </p>
        <a
          className="underline hover:cursor-pointer"
          target="_blank"
          href="assets/rzkiypratama.pdf"
          download
        >
          Click here to download my latest CV
        </a>
      </section>
    </motion.div>
  );
}

export default About;
