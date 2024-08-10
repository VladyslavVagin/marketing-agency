"use client";

import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import SwitcherLang from "@/components/SwitcherLang/SwitcherLang";

const Menu = () => {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("Header");

  return (
    <div className="flex items-center justify-center gap-12 text-2xl text-white mr-6">
      <Link
        href={`/${currentLocale}`}
        aria-label={t("ariaLabelMain")}
        className={`${
          pathname === `/${currentLocale}` ? "activeNav" : ""
        } border-b border-b-accent transition-all duration-500 hover:text-yellowIcon`}
      >
        {t("main")}
      </Link>
      <Link
        href={`/${currentLocale}/about`}
        aria-label={t("ariaLabelAbout")}
        className={`${
          pathname === `/${currentLocale}/about` ? "activeNav" : ""
        } border-b border-b-accent transition-all duration-500 hover:text-yellowIcon`}
      >
        {t("about")}
      </Link>
      <Link
        href={`/${currentLocale}/portfolio`}
        aria-label={t("ariaLabelProjects")}
        className={`${
          pathname === `/${currentLocale}/portfolio` ? "activeNav" : ""
        } border-b border-b-accent transition-all duration-500 hover:text-yellowIcon`}
      >
        {t("projects")}
      </Link>
      <SwitcherLang />
    </div>
  );
};

export default Menu;
