import Image from "next/image";
import { paytoneOne } from "@/app/layout";

const ProjectsPageTitle = () => {
  return (
    <div className="text-white bg-accent overflow-hidden rounded-b-[50px]">
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
            <li className="border border-black text-black font-bold w-[100px] h-12 flex items-center justify-center rounded-xl bg-yellowIcon">
              <button type="button" className="w-full h-full">
                All
              </button>
            </li>
            <li className="border border-black text-black font-bold w-[100px] h-12 flex items-center justify-center rounded-xl bg-yellowIcon">
              <button type="button" className="w-full h-full">
                Landing
              </button>
            </li>
            <li className="border border-black text-black font-bold w-[100px] h-12 flex items-center justify-center rounded-xl bg-yellowIcon">
              <button type="button" className="w-full h-full">
                Frontend
              </button>
            </li>
            <li className="border border-black text-black font-bold w-[100px] h-12 flex items-center justify-center rounded-xl bg-yellowIcon">
              <button type="button" className="w-full h-full">
                Backend
              </button>
            </li>
            <li className="border border-black text-black font-bold w-[100px] h-12 flex items-center justify-center rounded-xl bg-yellowIcon">
              <button type="button" className="w-full h-full">
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
