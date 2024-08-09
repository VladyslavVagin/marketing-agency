import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu: FC<Props> = ({ setIsOpen }) => {
  const path = usePathname();

  return (
    <div className="fixed z-[60] top-0 left-0 w-screen h-screen bg-black bg-opacity-40">
      <div className="absolute z-[61] top-0 right-0 w-[300px] min-h-screen bg-gray-300">
        <button
          type="button"
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <IoClose className="fill-black w-9 h-9" />
        </button>
        <ul className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center gap-6 text-2xl font-semibold">
          <li>
            <Link href="/" aria-label="Go to Main page" className={`${path === '/' ? 'active' : ''}`}>
              Main
            </Link>
          </li>
          <li>
            <Link href="/about" aria-label="Go to About Me page" className={`${path === '/about' ? 'active' : ''}`}>
              About Me
            </Link>
          </li>
          <li>
            <Link href="/portfolio" aria-label="Go to Projects page" className={`${path === '/portfolio' ? 'active' : ''}`}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
