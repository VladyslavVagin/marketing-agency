"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { FC, Dispatch, SetStateAction, useRef, MouseEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { paytoneOne } from "@/app/[locale]/layout";
import SwitcherLang from "../SwitcherLang/SwitcherLang";
import {
  variants,
  variantsBackdrop,
  variantsLI1,
  variantsLI2,
  variantsLI3,
  variantsLI4,
} from "@/animation/MobileMenu/variants";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu: FC<Props> = ({ setIsOpen, isOpen }) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const path = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("Header");

  const handleClickMenu = () => setIsOpen(false);
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target as Node === backdropRef?.current) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if(isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.div
      className="fixed z-[60] top-0 left-0 w-screen h-screen bg-black bg-opacity-40"
      ref={backdropRef}
      onClick={handleBackdropClick}
      variants={variantsBackdrop}
      initial="hidden"
      animate={isOpen ? "show" : "hidden"}
    >
      <motion.div
        className="absolute z-[61] top-0 right-0 w-[300px] min-h-screen bg-yellowIcon"
        variants={variants}
        initial="hidden"
        animate={isOpen ? "show" : "hidden"}
      >
        <button
          type="button"
          className="absolute top-4 right-4"
          aria-label={t("closeModalAriaLabel")}
          onClick={() => setIsOpen(false)}
        >
          <IoClose className="fill-black w-9 h-9" />
        </button>
        <ul className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center gap-6 text-2xl font-semibold">
          <motion.li
            variants={variantsLI1}
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
          >
            <Link
              href={`/${currentLocale}`}
              aria-label={t("ariaLabelMain")}
              onClick={handleClickMenu}
              className={`${path === `/${currentLocale}` ? "active" : ""} ${
                paytoneOne.className
              }`}
            >
              {t("main")}
            </Link>
          </motion.li>
          <motion.li
            variants={variantsLI2}
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
          >
            <Link
              href={`/${currentLocale}/about`}
              aria-label={t("ariaLabelAbout")}
              onClick={handleClickMenu}
              className={`${
                path === `/${currentLocale}/about` ? "active" : ""
              } ${paytoneOne.className}`}
            >
              {t("about")}
            </Link>
          </motion.li>
          <motion.li
            variants={variantsLI3}
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
          >
            <Link
              href={`/${currentLocale}/portfolio`}
              aria-label={t("ariaLabelProjects")}
              onClick={handleClickMenu}
              className={`${
                path === `/${currentLocale}/portfolio` ? "active" : ""
              } ${paytoneOne.className}`}
            >
              {t("projects")}
            </Link>
          </motion.li>
          <motion.li
            variants={variantsLI4}
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
          >
            <SwitcherLang />
          </motion.li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
