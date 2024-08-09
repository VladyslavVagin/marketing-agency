import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { paytoneOne } from "@/app/layout";
import { Project } from "@/types/project";

const Information: FC<Project> = ({ project }) => {
  return (
    <div className="px-3.5 py-20 relative z-20 mx-auto rounded-b-[50px] mt-[-50px] max-w-[425px] md:max-w-[800px] xl:max-w-[1280px] xl:px-[135px]">
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
      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-accent relative`}>
            <span
              className={`w-[15px] h-[15px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>Skills</span>
        </div>
        <div className="border-l border-l-gray-400 pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-white w-72 rounded-2xl px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {project.skills.join(", ")}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-yellowIcon relative`}>
            <span
              className={`w-[15px] h-[15px] bg-black rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>Soft</span>
        </div>
        <div className="border-l border-l-gray-400 pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-white w-72 rounded-2xl px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {project.soft.join(", ")}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-accent relative`}>
            <span
              className={`w-[15px] h-[15px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>
            Approaches
          </span>
        </div>
        <div className="border-l border-l-gray-400 pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-white w-72 rounded-2xl px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {project.approaches.join(", ")}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-yellowIcon relative`}>
            <span
              className={`w-[15px] h-[15px] bg-black rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>
            Description
          </span>
        </div>
        <div className="border-l border-l-gray-400 pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-white w-72 rounded-2xl px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {project.description}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 bg-accent p-3 rounded-2xl flex items-center justify-center gap-2 flex-wrap md:gap-4">
        <Link
          href={project.repositoryURL}
          target="_blank"
          className="flex items-center justify-center gap-2 text-white border border-white px-2 w-40 h-[58px] rounded-2xl font-semibold md:w-52 md:text-xl transition-colors duration-500 xl:hover:bg-black"
        >
          <FaGithub className="w-10 h-10" />
          Repository
        </Link>
        <Link
          href={project.liveURL}
          target="_blank"
          className="flex items-center justify-center gap-2 text-white border border-white px-2 w-40 h-[58px] rounded-2xl font-semibold md:w-52 md:text-xl transition-colors duration-500 xl:hover:bg-black"
        >
          <BsGlobe className="w-10 h-10" />
          Demo
        </Link>
      </div>
    </div>
  );
};

export default Information;
