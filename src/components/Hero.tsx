import React from "react";
import {
  Cursor,
  useTypewriter,
} from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi there, my name Rizky Putra",
      "You can call me Putra",
      "I'm a fullstack developer",
      "React, Next, Vue for my FE",
      "Node, Express, Laravel for BE"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <img
        src='https://i.ibb.co/YX0YJKs/putra.jpg'
        alt=''
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
      />
      <div className='z-20'>
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
        className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] pl-5 md:pl-0'>
          Fullstack Developer
        </motion.h2>
        <h1 className='text-2xl md:text-5xl lg:text-6xl font-semibold px-0'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>
              About
            </button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>
              Experience
            </button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>
              Skills
            </button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
