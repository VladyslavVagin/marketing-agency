import PortfolioTitle from "./PortfolioTitle/PortfolioTitle";
import ListProjects from "./ListProjects/ListProjects";

const Portfolio = () => {
  return (
    <section className="pb-16">
      <div className="p-3.5">
        <PortfolioTitle />
        <ListProjects />
      </div>
    </section>
  );
};

export default Portfolio;
