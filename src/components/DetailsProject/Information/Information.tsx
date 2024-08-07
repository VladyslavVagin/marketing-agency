import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { paytoneOne } from "@/app/layout";
import { Project } from "@/types/project";

const Information: FC<Project> = ({ project }) => {
  return (
    <div className="bg-gray-300 px-3.5 py-20 relative z-20 rounded-b-[50px] mt-[-50px]">
      <div className="bg-yellowIcon py-4 mb-8 text-center border-4 border-accent rounded-xl relative">
        <p
          className={`${paytoneOne.className} title rounded-2xl relative z-[11]`}
        >
          Type: {project.category.toUpperCase()}
        </p>
        <Image
          className="absolute z-10 top-[-20px] right-0"
          src="/images/hero/shape.png"
          alt="Shape for decoration"
          width={176}
          height={176}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <h2 className={`${paytoneOne.className} title`}>Skills:</h2>
        <p className="text-lg text-black">{project.skills.join(", ")}</p>
      </div>
      <div className="flex flex-col items-start justify-start gap-2 mt-4">
        <h2 className={`${paytoneOne.className} title`}>Soft:</h2>
        <p className="text-lg text-black">{project.soft.join(", ")}</p>
      </div>
      <div className="flex flex-col items-start justify-start gap-2 mt-4">
        <h2 className={`${paytoneOne.className} title`}>Approaches:</h2>
        <p className="text-lg text-black">{project.approaches.join(", ")}</p>
      </div>
      <div className="mt-5 bg-accent p-3 rounded-2xl flex items-center justify-center gap-2 flex-wrap">
        <Link
          href={project.repositoryURL}
          target="_blank"
          className="flex items-center justify-center gap-2 text-white border border-white px-2 w-40 h-[58px] rounded-2xl font-semibold"
        >
          <FaGithub className="w-10 h-10" />
          Repository
        </Link>
        <Link
          href={project.liveURL}
          target="_blank"
          className="flex items-center justify-center gap-2 text-white border border-white px-2 w-40 h-[58px] rounded-2xl font-semibold"
        >
          <BsGlobe className="w-10 h-10" />
          Demo
        </Link>
      </div>
      <div className="flex flex-col items-start justify-start gap-2 mt-4">
        <h2 className={`${paytoneOne.className} title`}>Description:</h2>
        <p className="text-lg text-black">{project.details}</p>
      </div>
    </div>
  );
};

export default Information;
