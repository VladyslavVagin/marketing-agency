"use client";

import { motion } from "framer-motion";
import { paytoneOne } from "@/app/[locale]/layout";
import { skills } from "@/data/skills";
import ProgressBar from "../ProgressBar/ProgressBar";
import { variant1, variant2 } from "@/animation/MainPage/skills";

type Skill = {
  id: number;
  name: string;
  progress: number;
  color: string;
};

const ListSkills = () => {
  return (
    <ul className="flex flex-col items-center justify-center mt-14 gap-4 md:flex-row md:flex-wrap md:gap-6 md:mx-auto md:mb-10 xl:mx-0 xl:mb-0 xl:justify-end xl:max-w-[560px]">
      {skills.map((skill: Skill) => (
        <motion.li
          key={skill.id}
          variants={skill.id % 2 === 0 ? variant1 : variant2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-[270px] h-[272px] rounded-2xl bg-white shadow-xl shadow-accent flex flex-col items-center justify-center md:w-80 md:h-80 xl:w-[250px] xl:h-[252px] xl:odd:mt-[-120px]"
        >
          <div className="relative w-40 h-40">
            <ProgressBar
              progress={skill.progress}
              colorProgress={skill.color}
            />
            <p
              className={`${paytoneOne.className} absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-logo font-normal text-black`}
            >
              {skill.progress}%
            </p>
          </div>
          <h3 className="mt-2 text-2xl font-light text-blacks md:font-semibold xl:font-light">
            {skill.name}
          </h3>
        </motion.li>
      ))}
    </ul>
  );
};

export default ListSkills;
