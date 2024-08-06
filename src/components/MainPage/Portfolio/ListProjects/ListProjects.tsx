import Image from "next/image";
import Link from "next/link";
import { paytoneOne } from "@/app/layout";
import { projects } from "@/data/projects";
import CardProject from "../CardProject/CardProject";

const ListProjects = () => {
  return (
    <div className="relative">
      <ul className="flex flex-col items-center gap-4">
        {projects.slice(0, 3).map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
        <li className="w-[346px] h-[346px] relative z-10 bg-accent rounded-2xl shadow-xl border-2 border-white">
          <Link
            href={"/portfolio"}
            className={`w-full h-full flex items-center justify-center text-white ${paytoneOne.className} text-logo`}
          >
            See More +
            <Image
              src="/images/hero/shape.png"
              alt="Shape for decoration"
              width={176}
              height={176}
              className="absolute z-0 bottom-[-40px] left-[-16px]"
            />
          </Link>
        </li>
      </ul>
      <Image
        src="/images/hero/shape.png"
        alt="Shape for decoration"
        width={176}
        height={176}
        className="absolute z-0 top-[-40px] right-0"
      />
    </div>
  );
};

export default ListProjects;
