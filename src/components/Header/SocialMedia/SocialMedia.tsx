import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <ul className="list-none flex items-center justify-center gap-2">
        <li className="w-12 h-12 md:w-16 md:h-16">
          <Link
            href={"https://www.linkedin.com/in/vladyslav-vagin-devfrontend"}
            target="_blank"
            className="flex items-center justify-center w-full h-full bg-primary rounded-full border border-white border-opacity-30"
          >
            <FaLinkedinIn className="w-4 h-4 fill-white md:w-8 md:h-8" />
          </Link>
        </li>
        <li className="w-12 h-12 md:w-16 md:h-16">
          <Link
            href={"https://github.com/VladyslavVagin"}
            target="_blank"
            className="flex items-center justify-center w-full h-full bg-primary rounded-full border border-white border-opacity-30"
          >
            <BsGithub className="w-4 h-4 fill-white md:w-8 md:h-8" />
          </Link>
        </li>
        <li className="w-12 h-12 md:w-16 md:h-16">
          <Link
            href={"https://t.me/Go_koFunikular"}
            target="_blank"
            className="flex items-center justify-center w-full h-full bg-primary rounded-full border border-white border-opacity-30"
          >
            <FaTelegramPlane className="w-4 h-4 fill-white md:w-8 md:h-8" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
