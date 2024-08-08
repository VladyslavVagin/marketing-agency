import { paytoneOne } from "@/app/layout";

const ExpertiseTitle = () => {
  return (
    <div>
      <p className="subtitle">my expertise</p>
      <div className="flex flex-col items-start gap-5 xl:flex-row xl:justify-between">
        <h2 className={`${paytoneOne.className} title xl:w-[320px]`}>
          Innovative Solutions
        </h2>
        <p className="title-text xl:w-[470px]">
          I specialize in creating dynamic and beautiful web pages and
          applications. I have extensive experience in developing REST APIs,
          implementing SEO and Accesibility best practices. My goal is to create
          efficient, scalable, and user-friendly solutions that meet the needs
          of users.
        </p>
      </div>
    </div>
  );
};

export default ExpertiseTitle;
