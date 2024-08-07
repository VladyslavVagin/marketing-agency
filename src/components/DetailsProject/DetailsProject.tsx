import { FC } from "react";
import { Project } from "@/types/project";
import TitleItem from "./TitleItem/TitleItem";
import Information from "./Information/Information";

const DetailsProject: FC<Project> = ({ project }) => {
  return (
    <>
      <TitleItem
        title={project.title}
        description={project.description}
        thumbnail={project.thumbnail}
      />
      <Information project={project} />
    </>
  );
};

export default DetailsProject;
