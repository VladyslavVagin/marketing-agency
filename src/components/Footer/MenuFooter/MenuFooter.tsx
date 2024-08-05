import Link from "next/link";

const MenuFooter = () => {
  return (
    <nav className="my-14">
      <ul className="flex flex-col items-start gap-2">
        <li>
          <Link
            href={"/"}
            aria-label="Go to Main page"
            className="text-lg font-normal"
          >
            Main
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            aria-label="Go to About Me page"
            className="text-lg font-normal"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href={"/portfolio"}
            aria-label="Go to Projects page"
            className="text-lg font-normal"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuFooter;
