"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-12 text-2xl text-white mr-[40%] xl:mr-[10%]">
      <Link
        href={"/"}
        className={`${
          pathname === "/" ? "activeNav" : ""
        } border-b border-b-accent transition-all duration-500 hover:text-yellowIcon`}
      >
        Main
      </Link>
      <Link
        href={"/about"}
        className={`${
          pathname === "/about" ? "activeNav" : ""
        } border-b border-b-accent transition-all duration-500 hover:text-yellowIcon`}
      >
        About
      </Link>
      <Link
        href={"/portfolio"}
        className={`${
          pathname === "/portfolio" ? "activeNav" : ""
        } border-b border-b-accent transition-all duration-500 hover:text-yellowIcon`}
      >
        Projects
      </Link>
    </div>
  );
};

export default Menu;
