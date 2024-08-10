"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";

const Menu = () => {
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <div className="flex items-center justify-center gap-12 text-2xl text-white mr-[40%] xl:mr-[10%]">
      <Link
        href={`/${currentLocale}`}
        className={`${
          pathname === `/${currentLocale}` ? "activeNav" : ""
        } border-b border-b-accent transition-all duration-500 hover:text-yellowIcon`}
      >
        Main
      </Link>
      <Link
        href={`/${currentLocale}/about`}
        className={`${
          pathname === `/${currentLocale}/about` ? "activeNav" : ""
        } border-b border-b-accent transition-all duration-500 hover:text-yellowIcon`}
      >
        About
      </Link>
      <Link
        href={`/${currentLocale}/portfolio`}
        className={`${
          pathname === `/${currentLocale}/portfolio` ? "activeNav" : ""
        } border-b border-b-accent transition-all duration-500 hover:text-yellowIcon`}
      >
        Projects
      </Link>
    </div>
  );
};

export default Menu;
