"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ProjectsPageTitle from "@/components/ProjectsPage/ProjectsPageTitle";
import ListProjects from "@/components/ProjectsPage/ListProjects/ListProjects";
import ButtonUp from "@/components/ButtonUp/ButtonUp";

const PortfolioPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 1279.98 });
  const [category, setCategory] = useState("all");

  return (
    <section>
      <ProjectsPageTitle setCategory={setCategory} category={category} />
      <ListProjects category={category} />
      {isTablet && <ButtonUp />}
    </section>
  );
};

export default PortfolioPage;
