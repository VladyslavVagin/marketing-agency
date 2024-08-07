import PortfolioTitle from "./PortfolioTitle/PortfolioTitle";
import ListProjects from "./ListProjects/ListProjects";

const Portfolio = () => {
  return (
    <section className="pb-16">
      <div className="p-3.5 max-w-[1280px] mx-auto md:px-9 md:pb-4 xl:px-[135px]">
        <PortfolioTitle />
        <ListProjects />
      </div>
    </section>
  );
};

export default Portfolio;
