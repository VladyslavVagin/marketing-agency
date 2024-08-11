"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { getProjectsData } from "@/data/projects";
import DetailsProject from "@/components/DetailsProject/DetailsProject";
import ButtonUp from "@/components/ButtonUp/ButtonUp";

const ProjectDetails = () => {
  const t = useTranslations("Projects");
  const { project: projectPath } = useParams();
  const projects = getProjectsData(t);

  const projectData = projects.find((proj) => proj.path === `/${projectPath}`);

  if(!projectData) return null;

  return (
    <section>
      <DetailsProject project={projectData} />
      <ButtonUp />
    </section>
  );
};

export default ProjectDetails;
