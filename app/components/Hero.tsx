'use client'
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const Hero: React.FC = () =>  {
  const [text, count] = useTypewriter({
    words: [
      "Hi there, Putra's here",
      "I'm a software engineer",
      "Currently i'm working at Orionscope",
      "Check it out my techstack bellow",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircle />
      <img
        src="https://i.ibb.co/dm8Dn7B/imgggggg.png"
        alt="main img"
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
      />
      <div className="z-20">
        <motion.h2
          initial={{
            y: -100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="pb-2 pl-5 text-sm uppercase tracking-[15px] text-gray-500 md:pl-0"
        >
          Software Engineer
        </motion.h2>
        <h1 className="px-0 text-2xl font-semibold md:text-5xl lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
