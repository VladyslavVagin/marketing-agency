import { paytoneOne } from "@/app/layout";

const SkillsTitle = () => {
  return (
    <div>
      <p className="subtitle mb-4">my skills</p>
      <h2 className={`title mb-9 ${paytoneOne.className}`}>
        Frontend, Backend and Software
      </h2>
      <p className="text-title">
        I specialize in JavaScript, TypeScript, React, Next and have experience
        with backend development using Node.js. I'm also proficient in using
        various development tools such as npm and Git, Redux and Firebase. My
        focus is on writing clean, efficient, and maintainable code.
      </p>
    </div>
  );
};

export default SkillsTitle;
