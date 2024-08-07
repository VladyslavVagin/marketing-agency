"use client";

import { useState } from "react";
import ProjectsPageTitle from "@/components/ProjectsPage/ProjectsPageTitle";
import ListProjects from "@/components/ProjectsPage/ListProjects/ListProjects";

const PortfolioPage = () => {
 const [category, setCategory] = useState("all");

  return (
    <section>
      <ProjectsPageTitle setCategory={setCategory} category={category} />
      <ListProjects category={category} />
    </section>
  );
};

export default PortfolioPage;
