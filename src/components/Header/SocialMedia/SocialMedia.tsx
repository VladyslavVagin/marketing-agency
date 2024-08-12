"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const SocialMedia = () => {
  const t = useTranslations("HomePage");

  return (
    <div>
      <ul className="list-none flex items-center justify-center gap-2">
        <li className="w-12 h-12 md:w-16 md:h-16">
          <Link
            href={"https://www.linkedin.com/in/vladyslav-vagin-devfrontend"}
            aria-label={t("ariaLabelLinkedIn")}
            target="_blank"
            className="flex items-center justify-center w-full h-full bg-primary rounded-full border border-white border-opacity-30 transition-colors duration-500 xl:hover:bg-yellowIcon"
          >
            <FaLinkedinIn className="w-4 h-4 fill-white md:w-8 md:h-8" />
          </Link>
        </li>
        <li className="w-12 h-12 md:w-16 md:h-16">
          <Link
            href={"https://github.com/VladyslavVagin"}
            aria-label={t("ariaLabelGitHub")}
            target="_blank"
            className="flex items-center justify-center w-full h-full bg-primary rounded-full border border-white border-opacity-30 transition-colors duration-500 xl:hover:bg-yellowIcon"
          >
            <BsGithub className="w-4 h-4 fill-white md:w-8 md:h-8" />
          </Link>
        </li>
        <li className="w-12 h-12 md:w-16 md:h-16">
          <Link
            href={"https://t.me/Go_koFunikular"}
            aria-label={t("ariaLabelTelegram")}
            target="_blank"
            className="flex items-center justify-center w-full h-full bg-primary rounded-full border border-white border-opacity-30 transition-colors duration-500 xl:hover:bg-yellowIcon"
          >
            <FaTelegramPlane className="w-4 h-4 fill-white md:w-8 md:h-8" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
