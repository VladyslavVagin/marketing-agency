"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import {
  variantsLI1,
  variantsLI2,
  variantsLI3,
} from "@/animation/MobileMenu/variants";

const ListLinks = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="relative">
      <ul className="flex items-center justify-center gap-2.5 relative z-20 md:gap-6">
        <motion.li
          className="w-[109px] h-[109px] rounded-2xl bg-yellowIcon md:w-[160px] md:h-[160px]"
          variants={variantsLI1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link
            href={"https://www.linkedin.com/in/vladyslav-vagin-devfrontend"}
            target="_blank"
            aria-label={t("ariaLabelLinkedIn")}
            className="w-full h-full flex items-center justify-center rounded-2xl transition-all duration-500 xl:hover:bg-accent xl:hover:shadow-xl xl:hover:shadow-white"
          >
            <FaLinkedinIn className="w-12 h-12 fill-black md:w-16 md:h-16" />
          </Link>
        </motion.li>
        <motion.li
          className="w-[109px] h-[109px] rounded-2xl bg-yellowIcon md:w-[160px] md:h-[160px]"
          variants={variantsLI2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link
            href={"https://github.com/VladyslavVagin"}
            target="_blank"
            aria-label={t("ariaLabelGitHub")}
            className="w-full h-full flex items-center justify-center rounded-2xl transition-all duration-500 xl:hover:bg-accent xl:hover:shadow-xl xl:hover:shadow-white"
          >
            <BsGithub className="w-12 h-12 fill-black md:w-16 md:h-16" />
          </Link>
        </motion.li>
        <motion.li
          variants={variantsLI3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-[109px] h-[109px] rounded-2xl bg-yellowIcon md:w-[160px] md:h-[160px]"
        >
          <Link
            href={"https://t.me/Go_koFunikular"}
            target="_blank"
            aria-label={t("ariaLabelTelegram")}
            className="w-full h-full flex items-center justify-center rounded-2xl transition-all duration-500 xl:hover:bg-accent xl:hover:shadow-xl xl:hover:shadow-white"
          >
            <FaTelegramPlane className="w-12 h-12 fill-black md:w-16 md:h-16" />
          </Link>
        </motion.li>
      </ul>
      <Image
        className="absolute z-10 top-[-34px] left-[16px] xl:left-[-60px]"
        src="/images/hero/shape.png"
        alt={t("shapeAlt")}
        width={176}
        height={176}
      />
    </div>
  );
};

export default ListLinks;
