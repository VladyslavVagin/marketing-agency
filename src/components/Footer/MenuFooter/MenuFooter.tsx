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
            aria-label={t("ariaLabelMain")}
            className={`${
              pathname === `/${currentLocale}`
                ? "border-white xl:hover:border-accent"
                : "border-black"
            } border-b text-lg font-normal transition-colors duration-500 xl:text-2xl xl:hover:text-yellowIcon`}
          >
            {t("main")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${currentLocale}/about`}
            aria-label={t("ariaLabelAbout")}
            className={`${
              pathname === `/${currentLocale}/about`
                ? "border-white xl:hover:border-accent"
                : "border-black"
            } border-b text-lg font-normal transition-colors duration-500 xl:text-2xl xl:hover:text-yellowIcon`}
          >
            {t("about")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${currentLocale}/portfolio`}
            aria-label={t("ariaLabelProjects")}
            className={`${
              pathname === `/${currentLocale}/portfolio`
                ? "border-white xl:hover:border-accent"
                : "border-black"
            } border-b text-lg font-normal transition-colors duration-500 xl:text-2xl xl:hover:text-yellowIcon`}
          >
            {t("projects")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuFooter;
