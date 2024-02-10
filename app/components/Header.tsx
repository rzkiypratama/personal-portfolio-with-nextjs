'use client'
import React from "react";
import { SocialIcon } from "react-social-icons";
SocialIcon;
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Header: React.FC = () =>  {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="flex flex-row items-center"
      >
        {/* social icons*/}
        <SocialIcon
          url="https://twitter.com/rzkiypratama"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/rzkiypratama"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/rzkiypratama"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex cursor-pointer flex-row items-center text-gray-300"
        >
          {/* email icon */}
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
