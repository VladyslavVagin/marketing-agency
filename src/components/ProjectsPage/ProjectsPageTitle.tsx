import { FC, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { paytoneOne } from "@/app/layout";

type Props = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

const ProjectsPageTitle: FC<Props> = ({ setCategory, category }) => {
  return (
    <div className="text-white bg-accent overflow-hidden rounded-b-[50px] relative z-30">
      <div className="px-3.5 py-12">
        <div className="relative">
          <h1
            className={`${paytoneOne.className} text-titleMain text-center mb-8`}
          >
            My Projects
          </h1>
          <p className="title-text text-white text-justify">
            There are different types of web projects, from simple landing page
            and galleries of images to fullstack web applications with REST APIs
            servers.
          </p>
          <Image
            src="/images/hero/shape.png"
            alt="Shape for hero section"
            width={176}
            height={176}
            className="absolute top-0 right-[-120px]"
          />
        </div>
        <div className="mt-10 mb-6">
          <ul className="flex flex-wrap gap-2 items-center justify-center">
            <li
              className={`border font-bold w-[100px] h-12 flex items-center justify-center rounded-xl ${
                category === "all"
                  ? "bg-accent text-white border-white"
                  : "bg-yellowIcon text-black border-black"
              }`}
            >
              <button
                type="button"
                className="w-full h-full"
                onClick={() => setCategory("all")}
              >
                All
              </button>
            </li>
            <li
              className={`border font-bold w-[100px] h-12 flex items-center justify-center rounded-xl ${
                category === "landing"
                  ? "bg-accent text-white border-white"
                  : "bg-yellowIcon text-black border-black"
              }`}
            >
              <button
                type="button"
                className="w-full h-full"
                onClick={() => setCategory("landing")}
              >
                Landing
              </button>
            </li>
            <li
              className={`border font-bold w-[100px] h-12 flex items-center justify-center rounded-xl ${
                category === "frontend"
                  ? "bg-accent text-white border-white"
                  : "bg-yellowIcon text-black border-black"
              }`}
            >
              <button
                type="button"
                className="w-full h-full"
                onClick={() => setCategory("frontend")}
              >
                Frontend
              </button>
            </li>
            <li
              className={`border font-bold w-[100px] h-12 flex items-center justify-center rounded-xl ${
                category === "backend"
                  ? "bg-accent text-white border-white"
                  : "bg-yellowIcon text-black border-black"
              }`}
            >
              <button
                type="button"
                className="w-full h-full"
                onClick={() => setCategory("backend")}
              >
                Backend
              </button>
            </li>
            <li
              className={`border font-bold w-[100px] h-12 flex items-center justify-center rounded-xl ${
                category === "fullstack"
                  ? "bg-accent text-white border-white"
                  : "bg-yellowIcon text-black border-black"
              }`}
            >
              <button
                type="button"
                className="w-full h-full"
                onClick={() => setCategory("fullstack")}
              >
                Fullstack
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPageTitle;
