"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { paytoneOne } from "@/app/[locale]/layout";

const Information = () => {
  const t = useTranslations("AboutMe");

  return (
    <div className="px-3.5 py-20 relative z-20 mx-auto rounded-b-[50px] mt-[-50px] max-w-[425px] md:max-w-[800px] xl:max-w-[1280px] xl:px-[135px]">
      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-yellowIcon relative`}>
            <span
              className={`w-[15px] h-[15px] bg-black rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>
            {t("skills")}
          </span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-yellowIcon w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <h3 className="subtitle">{t("techSkills")}</h3>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {t("skillsValues")}
            </p>
            <h3 className="subtitle mt-4">{t("soft")}</h3>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {t("softValues")}
            </p>
            <h3 className="subtitle mt-4">{t("approaches")}</h3>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {t("approachesValues")}
            </p>
            <div className="relative w-full h-40 mt-6">
              <Image
                src="/images/about/banner.webp"
                alt={t("banner")}
                layout="fill"
                objectFit="contain"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-accent relative`}>
            <span
              className={`w-[15px] h-[15px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>
            {t("seamanLife")}
          </span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {t("textSeaman1")}
            </p>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold mt-3">
              {t("textSeaman2")}
            </p>
            <div className="w-48 h-48 rounded-full relative mx-auto mt-4">
              <Image
                src="/images/about/onma.webp"
                alt={t("onmaSymbol")}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-accent relative`}>
            <span
              className={`w-[15px] h-[15px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>
            GoIT School
          </span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              After start war in Ukraine, I relocated to Spain with family and
              started to learn Web Development. I get my first certificate in
              March 2023 and it was AWS Cloud Practitioner Certificate.
            </p>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold mt-3">
              After that, I commenced a 10-months course Fullstack Web Developer
              in GoIT school. During this course I learned HTML5, CSS3,
              JavaScript, React.js, Redux, TypeScript, Node.js. The most
              important thing, that we learned the best practices of coding and
              must modern technologies. I participated in team projects and have
              numerous individual projects. On our team projects we use Trello,
              Jira, GitHub and Figma for design. It was so great experience that
              10-months course I completed in 6 months.
            </p>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold mt-3">
              Also, during my education I participated in DrukArmy team project.
              We update the frontend part of existing project by using Next.js.
              It was very useful experience, because I started work with
              Next.js, learned how to implement i18next for localization, how
              customise input for all types of browser and how work with hard
              layout.
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap mt-4 md:gap-8">
              <Image
                src="/images/about/page1.webp"
                alt="Fullstack Web Developer Certificate first page"
                width={140}
                height={200}
                className="md:w-44 md:h-60"
              />
              <Image
                src="/images/about/page2.webp"
                alt="Fullstack Web Developer Certificate second page"
                width={140}
                height={200}
                className="md:w-44 md:h-60"
              />
              <Image
                src="/images/about/page3.webp"
                alt="Fullstack Web Developer Certificate third page"
                width={140}
                height={200}
                className="md:w-44 md:h-60"
              />
              <Image
                src="/images/about/page4.webp"
                alt="Fullstack Web Developer Certificate fourth page"
                width={140}
                height={200}
                className="md:w-44 md:h-60"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-accent relative`}>
            <span
              className={`w-[15px] h-[15px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>
            CRN Getafe
          </span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              After my relocation to Spain, I started learn Spanish, and started
              course Web Page Development and Publishing in Center of Education
              in Getafe. During this course I learned HTML5, CSS3, JavaScript,
              JQuery, Boostrap, WordPress ( Elementor, WooCommerce), SEO
              optimization and Accessibility. After completion of this course I
              have got 80 hours (3 weeks) internship in ONG Remar Spain.
            </p>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold mt-3">
              The first time I worked with WordPress, optimized website for SEO,
              fixed CSS and JS bugs. When my tutor saw that I can create web
              applications, he ask me to create a web application for Solidaria
              Media. I choose Next.js for this project. I created this app for
              streaming radio and TV with admin dashboard. Admin can manage
              YouTube videos in this application, add or delete them.
            </p>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold mt-3">
              After successful completion of this internship, I obtained a
              proffesional certificate and Medium Grade in Spain.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-accent relative`}>
            <span
              className={`w-[15px] h-[15px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>
            Search Job
          </span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              After completion courses in GoIT and CRN Getafe, I continued to
              learn new technologies and improve my skills. I learned React
              Native, SQL databases, Sanity and Stripe integrations, improve
              TypeScript and for this moment I am learning AI in Web
              Development. My education will never stop, even if I get a job.
            </p>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold mt-3">
              Due to above mentioned, I am looking for a job as a Junior (Strong
              Junior) Web Developer. I am ready to work in a team, learn new and
              improve my skills. I am looking for a company where I can grow and
              develop my skills. I am looking for a company where I can be a
              part of a team, work on interesting projects and I am interesting
              in long term cooperation. Also, I am ready to relocate to any city
              within Spain.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-yellowIcon relative`}>
            <span
              className={`w-[15px] h-[15px] bg-black rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>My Hobby</span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              My main hobby, of course, its coding. But, also, I like a lot
              hiking and playing the guitar. I like to spend time in the nature,
              far from the city noise. I like to play the guitar, I have been
              playing the guitar more than 10 years. I like to play the guitar,
              because it helps me to relax and forget about all problems.
            </p>
            <div className="mt-4 flex flex-col items-center justify-center gap-3 md:flex-row">
              <div className="w-full h-28 relative md:w-[40%] xl:h-40">
                <Image
                  src="/images/about/foto1.webp"
                  alt="I am in the Guadarrama mountains"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div className="w-full h-28 relative md:w-[40%] xl:h-40">
                <Image
                  src="/images/about/foto2.webp"
                  alt="I am in the Guadarrama mountains"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
