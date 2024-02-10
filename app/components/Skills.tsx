'use client'
import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

const Skills: React.FC = () =>  {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10">
      <h3 className="absolute top-24 pl-5 text-2xl uppercase tracking-[20px] text-gray-500 md:pl-0">
        Skills
      </h3>

      <h3 className="absolute top-36 text-sm uppercase tracking-[3px] text-gray-500">
        Hover over a skill for current profienciency
      </h3>

      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="mt-[5rem] grid grid-cols-3 justify-center gap-3 md:grid-cols-4 md:gap-5"
      >
        <Skill
          src="https://i.ibb.co/Cvx0M9D/Vue-js-Logo-2-svg.png"
          percent={75}
        />
        <Skill
          percent={90}
          src="https://i.ibb.co/mzsvQFP/Tailwind-CSS-Logo-svg.png"
        />
        <Skill
          percent={75}
          src="https://i.ibb.co/72WMfHp/Typescript-logo-2020-svg.png"
        />
        <Skill
          percent={75}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
        />
        <Skill
          percent={80}
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--8sx8IYNE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i2.wp.com/blogreact.com/wp-content/uploads/2020/10/1_htbUdWgFQ3a94PMEvBr_hQ.png%3Fresize%3D750%252C428%26ssl%3D1"
        />
        <Skill
          percent={90}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YraeeRnBhf1Sd-QQndtiCYLL5RTFWDhvjcooa9c8NqWeU6D0vP3x-3l1bfX5vskcToE&usqp=CAU"
        />
        <Skill
          percent={65}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
        />
        <Skill
          percent={65}
          src="https://www.pngrepo.com/png/354119/512/nodejs-icon.png"
        />
        <Skill
          percent={77}
          src="https://getbootstrap.com/docs/4.5/assets/img/bootstrap-icons.png"
        />
        <Skill
          percent={80}
          src="https://download.logo.wine/logo/WordPress.com/WordPress.com-Logo.wine.png"
        />
        <Skill
          percent={55}
          src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
        />
      </motion.div>
    </section>
  );
};

export default Skills;
