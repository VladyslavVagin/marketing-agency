"use client";

import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import DetailsProject from "@/components/DetailsProject/DetailsProject";

const ProjectDetails = () => {
  const { project: projectPath } = useParams();
  const projectData = projects.find((proj) => proj.path === `/${projectPath}`);

  if(!projectData) return null;

  return (
    <section>
      <DetailsProject project={projectData} />
    </section>
  );
};

export default ProjectDetails;
