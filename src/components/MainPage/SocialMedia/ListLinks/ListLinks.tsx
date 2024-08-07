import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";


const ListLinks = () => {
  return (
    <div className="relative">
      <ul className="flex items-center justify-center gap-2.5 relative z-20 md:gap-6">
        <li className="w-[109px] h-[109px] rounded-2xl bg-yellowIcon md:w-[160px] md:h-[160px]">
          <Link
            href={"https://www.linkedin.com/in/vladyslav-vagin-devfrontend"}
            target="_blank"
            className="w-full h-full flex items-center justify-center"
          >
            <FaLinkedinIn className="w-12 h-12 fill-black md:w-16 md:h-16" />
          </Link>
        </li>
        <li className="w-[109px] h-[109px] rounded-2xl bg-yellowIcon md:w-[160px] md:h-[160px]">
          <Link
            href={"https://github.com/VladyslavVagin"}
            target="_blank"
            className="w-full h-full flex items-center justify-center"
          >
            <BsGithub className="w-12 h-12 fill-black md:w-16 md:h-16" />
          </Link>
        </li>
        <li className="w-[109px] h-[109px] rounded-2xl bg-yellowIcon md:w-[160px] md:h-[160px]">
          <Link
            href={"https://t.me/Go_koFunikular"}
            target="_blank"
            className="w-full h-full flex items-center justify-center"
          >
            <FaTelegramPlane className="w-12 h-12 fill-black md:w-16 md:h-16"  />
          </Link>
        </li>
      </ul>
      <Image className="absolute z-10 top-[-34px] left-[16px]" src="/images/hero/shape.png" alt="Shape for decoration" width={176} height={176} />
    </div>
  )
}

export default ListLinks