import { projects } from "@/data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";

const ListProjects = () => {
  return (
    <div className="px-3.5 bg-white py-20 relative z-20 rounded-b-[50px] mt-[-50px]">
        <ul className="flex flex-col items-center gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
    </div>
  );
};

export default ListProjects;
