"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { variantButtons } from "@/animation/MainPage/hero";

const ImageHero = () => {
  return (
    <motion.div
      className="absolute bottom-0 translate-x-5 md:right-[-80px] xl:right-0"
      variants={variantButtons}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Image
        src="/images/hero/hero.png"
        alt="Photo of Vladyslav Vagin"
        width={346}
        height={458}
        className="md:w-[560px] md:h-[460px] xl:w-[700px] xl:h-[580px]"
      />
    </motion.div>
  );
};

export default ImageHero;
