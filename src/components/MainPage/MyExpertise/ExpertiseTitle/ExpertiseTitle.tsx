import { paytoneOne } from "@/app/layout";

const ExpertiseTitle = () => {
  return (
    <div>
      <p className="uppercase text-2xl font-light mb-4">my expertise</p>
      <div className="flex flex-col items-start gap-5">
        <h2 className={`${paytoneOne.className} text-4xl font-normal`}>
          Innovative Solutions
        </h2>
        <p className="text-lg font-normal">
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
