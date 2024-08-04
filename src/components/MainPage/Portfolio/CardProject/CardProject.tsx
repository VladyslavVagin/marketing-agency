import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { paytoneOne } from "@/app/layout";
import { Project } from "@/types/project";

const CardProject: FC<Project> = ({ project }) => {
  const { path, title, thumbnail } = project;

  return (
    <li className="w-[346px] h-[346px] relative rounded-2xl shadow-xl border-2 border-white">
      <Link href={`/portfolio/${path}`} className="w-full h-full">
        <Image
          src={thumbnail}
          alt="Home page of PetLove project"
          layout="fill"
          objectFit="cover"
          className="absolute z-10 rounded-2xl filter brightness-50 hover:filter-none"
        />
        <p
          className={`${paytoneOne.className} absolute z-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-logo font-normal`}
        >
          {title}
        </p>
      </Link>
    </li>
  );
};

export default CardProject;
