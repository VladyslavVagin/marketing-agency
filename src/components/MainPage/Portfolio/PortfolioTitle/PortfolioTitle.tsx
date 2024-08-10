import { paytoneOne } from "@/app/[locale]/layout";

const PortfolioTitle = () => {
  return (
    <div className="text-center mb-14">
      <p className="subtitle">portfolio</p>
      <h2 className={`${paytoneOne.className} title`}>Featured Works</h2>
    </div>
  );
};

export default PortfolioTitle;
