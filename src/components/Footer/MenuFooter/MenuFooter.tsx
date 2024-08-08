"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const MenuFooter = () => {
  const pathname = usePathname();

  return (
    <nav className="my-14 md:my-0">
      <ul className="flex flex-col items-start gap-2 xl:gap-4">
        <li>
          <Link
            href={"/"}
            aria-label="Go to Main page"
            className={`${
              pathname === "/"
                ? "border-white xl:hover:border-accent"
                : "border-black"
            } border-b text-lg font-normal transition-colors duration-500 xl:text-2xl xl:hover:text-accent`}
          >
            Main
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            aria-label="Go to About Me page"
            className={`${
              pathname === "/about"
                ? "border-white xl:hover:border-accent"
                : "border-black"
            } border-b text-lg font-normal transition-colors duration-500 xl:text-2xl xl:hover:text-accent`}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href={"/portfolio"}
            aria-label="Go to Projects page"
            className={`${
              pathname === "/portfolio"
                ? "border-white xl:hover:border-accent"
                : "border-black"
            } border-b text-lg font-normal transition-colors duration-500 xl:text-2xl xl:hover:text-accent`}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuFooter;
