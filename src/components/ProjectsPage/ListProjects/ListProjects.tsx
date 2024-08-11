"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { getProjectsData } from "@/data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import { FC } from "react";

type Props = {
  category: string;
};

const ListProjects: FC<Props> = ({ category }) => {
  const t = useTranslations("Projects");
  const projects = getProjectsData(t);
  
  const [visibleProjects, setVisibleProjects] = useState(projects);

  useEffect(() => {
    if (category === "all") {
      setVisibleProjects(projects);
    } else if (category === "landing") {
      setVisibleProjects(
        projects.filter((project) => project.category === "landing")
      );
    } else if (category === "frontend") {
      setVisibleProjects(
        projects.filter((project) => project.category === "frontend")
      );
    } else if (category === "fullstack") {
      setVisibleProjects(
        projects.filter((project) => project.category === "fullstack")
      );
    } else if (category === "backend") {
      setVisibleProjects(
        projects.filter((project) => project.category === "backend")
      );
    }
  }, [category]);

  return (
    <div className="px-3.5 bg-white py-20 relative z-20 rounded-b-[50px] mt-[-50px]">
      <ul className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center md:min-h-[600px]">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default ListProjects;
