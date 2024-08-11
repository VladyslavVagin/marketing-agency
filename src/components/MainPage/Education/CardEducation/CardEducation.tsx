"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { paytoneOne } from "@/app/[locale]/layout";
import {
  variants,
  variantsLI1,
  variantsLI2,
} from "@/animation/MobileMenu/variants";

type Props = {
  education: {
    id: number;
    year: string;
    title: string;
    description: string;
  };
};

const CardEducation: FC<Props> = ({ education }) => {
  const { year, title, description, id } = education;

  return (
    <motion.li
      className="max-w-[346px] md:max-w-[768px] xl:max-w-full"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-start gap-3">
        <div
          className={`w-12 h-12 rounded-xl ${
            id === 2 ? "bg-yellowIcon" : "bg-accent"
          } relative`}
        >
          <span
            className={`w-[15px] h-[15px] ${
              id === 2 ? "bg-black" : "bg-white"
            } rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
          ></span>
        </div>
        <span className={`${paytoneOne.className} text-logo`}>{year}</span>
      </div>
      <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
        <div
          className={`bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl ${
            id === 2 ? "shadow-yellowIcon" : "shadow-accent"
          } md:w-[680px] xl:w-full`}
        >
          <motion.h3
            className="text-2xl font-normal mb-5"
            variants={variantsLI1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-lg font-light text-gray-500"
            variants={variantsLI2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.li>
  );
};

export default CardEducation;
