"use client";

import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const MenuFooter = () => {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("Header");

  return (
    <nav className="my-14 md:my-0">
      <ul className="flex flex-col items-start gap-2 xl:gap-4">
        <li>
          <Link
            href={`/${currentLocale}`}
            aria-label="Go to Main page"
            className={`${
              pathname === `/${currentLocale}`
                ? "border-white xl:hover:border-accent"
                : "border-black"
            } border-b text-lg font-normal transition-colors duration-500 xl:text-2xl xl:hover:text-accent`}
          >
            {t("main")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${currentLocale}/about`}
            aria-label="Go to About Me page"
            className={`${
              pathname === `/${currentLocale}/about`
                ? "border-white xl:hover:border-accent"
                : "border-black"
            } border-b text-lg font-normal transition-colors duration-500 xl:text-2xl xl:hover:text-accent`}
          >
            {t("about")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${currentLocale}/portfolio`}
            aria-label="Go to Projects page"
            className={`${
              pathname === `/${currentLocale}/portfolio`
                ? "border-white xl:hover:border-accent"
                : "border-black"
            } border-b text-lg font-normal transition-colors duration-500 xl:text-2xl xl:hover:text-accent`}
          >
            {t("projects")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuFooter;
