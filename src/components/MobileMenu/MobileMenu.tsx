"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { FC, Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import SwitcherLang from "../SwitcherLang/SwitcherLang";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu: FC<Props> = ({ setIsOpen }) => {
  const path = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("Header");

  return (
    <div className="fixed z-[60] top-0 left-0 w-screen h-screen bg-black bg-opacity-40">
      <div className="absolute z-[61] top-0 right-0 w-[300px] min-h-screen bg-gray-300">
        <button
          type="button"
          className="absolute top-4 right-4"
          aria-label={t("closeModalAriaLabel")}
          onClick={() => setIsOpen(false)}
        >
          <IoClose className="fill-black w-9 h-9" />
        </button>
        <ul className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center gap-6 text-2xl font-semibold">
          <li>
            <Link
              href={`/${currentLocale}`}
              aria-label={t("ariaLabelMain")}
              className={`${path === `/${currentLocale}` ? "active" : ""}`}
            >
              {t("main")}
            </Link>
          </li>
          <li>
            <Link
              href={`/${currentLocale}/about`}
              aria-label={t("ariaLabelAbout")}
              className={`${
                path === `/${currentLocale}/about` ? "active" : ""
              }`}
            >
              {t("about")}
            </Link>
          </li>
          <li>
            <Link
              href={`/${currentLocale}/portfolio`}
              aria-label={t("ariaLabelProjects")}
              className={`${
                path === `/${currentLocale}/portfolio` ? "active" : ""
              }`}
            >
              {t("projects")}
            </Link>
          </li>
          <li>
            <SwitcherLang />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
