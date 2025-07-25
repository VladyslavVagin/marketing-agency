export const getProjectsData = (t: (key: string) => string) => [
  {
    id: 1,
    path: "/landing-any",
    title: "Landing Any.ai",
    thumbnail: "/images/portfolio/LandingAny.png",
    category: "landing",
    skills: [
      "Wordpress",
      "Elementor",
      "Elementor Pro",
      "PHP",
      "Javascript",
      "CSS3",
      "HTML5",
    ],
    soft: ["Wordpress Dashboard", "Figma"],
    approaches: [
      "Agile",
      "Mobile First",
      "Responsive Design",
      "Authentication",
      "Pagination",
      "Form Validation",
      "Pixel Perfect",
    ],
    repositoryURL: "",
    liveURL: "https://any-ai.app/en/home/",
    description: t("landingAnyDescription"),
    details: t("landingAnyDetails"),
  },
  {
    id: 2,
    path: "/anyai-platform",
    title: "ANY.AI",
    thumbnail: "/images/portfolio/anyai.jpg",
    category: "fullstack",
    skills: [
      "React",
      "Typescript",
      "Redux Toolkit",
      "Redux Persist",
      "Tailwind CSS",
      "REST API",
      "Framer-motion",
      "Axios",
      "Nest.js",
      "DaisyUI",
      "BullMQ",
      "MongoDB",
      "AWS S3",
      "Puppeter",
      "RPA (Robotic Process Automation)",
      "OpenAI API",
      "Vector Database",
      "AWS Bedrock",
      "BullMQ",
      "Redis",
      "Stripe API",
      "LangChain",
    ],
    soft: [
      "VSCode",
      "Figma",
      "Git",
      "GitHub",
      "Jira",
      "Bitbucket",
      "Confluence",
      "Mongo Compass",
      "Docker Desktop",
    ],
    approaches: [
      "Scrum",
      "Mobile First",
      "Responsive Design",
      "Authentication",
      "Pagination",
      "Filtering",
      "Form Validation",
      "Web Scraping",
      "Web Crawling",
      "LLM Integration",
      "Prompt Engineering",
      "Animation",
      "RPA (Robotic Process Automation)",
      "Vector Database",
      "Index Vectorization",
      "Document Processing",
      "Payment Integration",
    ],
    repositoryURL: "https://platform.any-ai.app/",
    liveURL: "https://platform.any-ai.app/",
    description: t("anyaiplatformDescription"),
    details: t("anyaiplatformDetails"),
  },
  {
    id: 3,
    path: "/petlove",
    title: "PetLove",
    thumbnail: "/images/portfolio/petlove.webp",
    category: "frontend",
    skills: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Redux Persist",
      "Styled-components",
      "REST API",
      "Material-UI",
      "Axios",
      "react-hook-form",
      "React-toastify",
      "formik",
      "yup",
      "react-select",
      "axios",
    ],
    soft: ["VSCode", "Figma", "Git", "GitHub", "Cloudinary", "Netlify"],
    approaches: [
      "Agile",
      "Mobile First",
      "Responsive Design",
      "Authentication",
      "Pagination",
      "Filtering",
      "Form Validation",
      "Pixel Perfect",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/petlove",
    liveURL: "https://petlovevv.netlify.app",
    description: t("petloveDescription"),
    details: t("petloveDetails"),
  },
  {
    id: 4,
    path: "/learnlingo",
    title: "LearnLingo",
    thumbnail: "/images/portfolio/girl-anime.webp",
    category: "fullstack",
    skills: [
      "JavaScript",
      "React",
      "Redux",
      "Firebase",
      "Styled-components",
      "Formik",
      "Yup",
      "React-select",
      "React-toastify",
    ],
    soft: ["VSCode", "Git", "GitHub", "Figma", "Netlify"],
    approaches: [
      "Agile",
      "Mobile First",
      "Responsive Design",
      "Authentication",
      "Pagination",
      "Filtering",
      "Form Validation",
      "Pixel Perfect",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/learnlingo",
    liveURL: "https://learnlingovlad.netlify.app/",
    description: t("lingoDescription"),
    details: t("lingoDetails"),
  },
  {
    id: 5,
    path: "/ecosolution",
    title: "EcoSolution",
    thumbnail: "/images/portfolio/EcoSolution.webp",
    category: "landing",
    skills: [
      "JavaScript",
      "React",
      "Styled-components",
      "Framer-motion",
      "React-hook-form",
      "Yup",
      "React-scroll",
    ],
    soft: ["VSCode", "Git", "GitHub", "Figma", "Netlify"],
    approaches: [
      "Mobile First",
      "Responsive Design",
      "Animation",
      "Form Validation",
      "Pixel Perfect",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/ecosolution",
    liveURL: "https://test-ecosol.netlify.app",
    description: t("ecoSolutionDescription"),
    details: t("ecoSolutionDetails"),
  },
  {
    id: 6,
    path: "/epharmacy",
    title: "EPharmacy",
    thumbnail: "/images/portfolio/epharmacy.webp",
    category: "fullstack",
    skills: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Axios",
      "React-hook-form",
      "Yup",
      "Material-UI",
      "Emotion-styled",
      "React-spinner-loader",
      "React-responsive",
      "Toastify",
    ],
    soft: ["VSCode", "Figma", "Postman", "Mongo Atlas", "Netlify"],
    approaches: [
      "Mobile First",
      "Form Validation",
      "JWT-authentication",
      "Responsive Design",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/frontend-admin",
    liveURL: "https://epharmacy-admin.netlify.app",
    description: t("epharmDescription"),
    details: t("epharmDetails"),
  },
  {
    id: 7,
    path: "/api-pharmacy",
    title: "Backend EPharmacy",
    thumbnail: "/images/portfolio/server.webp",
    category: "backend",
    skills: [
      "Node.js",
      "JavaScript",
      "Express.js",
      "Nodemon",
      "Mongoose",
      "MongoDB",
      "Bcrypt",
      "Joi-validation",
    ],
    soft: ["VSCode", "Postman", "Mongo Atlas", "Render.com", "Swagger"],
    approaches: ["REST API", "JWT-authentication"],
    repositoryURL: "https://github.com/VladyslavVagin/backend-admin",
    liveURL: "https://backend-admin-ht2s.onrender.com/api-docs",
    description: t("apiPharmDescription"),
    details: t("apiPharmDetails"),
  },
  {
    id: 8,
    path: "/solidaria",
    title: "Solidaria Media",
    thumbnail: "/images/portfolio/solidaria.webp",
    category: "fullstack",
    skills: [
      "Next.js",
      "JavaScript",
      "Next-Auth",
      "React",
      "MongoDB",
      "Mongoose",
      "Bcrypt",
      "React-select",
      "React-hook-form",
      "Yup-validation",
    ],
    soft: ["VSCode", "Postman", "Mongo Atlas", "Vercel"],
    approaches: [
      "Mobile First",
      "Responsive layout",
      "Form Validation",
      "JWT-authentication",
      "Admin panel",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/radiosolidaria-auth-db",
    liveURL: "https://solidariamedia.com",
    description: t("solidariaDescription"),
    details: t("solidariaDetails"),
  },
  {
    id: 9,
    path: "/drukarmy",
    title: "DrukArmy",
    thumbnail: "/images/portfolio/DrukArmiya.webp",
    category: "frontend",
    skills: [
      "Next.js",
      "JavaScript",
      "React",
      "CSS-modules",
      "Swiper",
      "React-responsive",
      "i18next",
    ],
    soft: ["VSCode", "Figma", "Git", "GitHub", "Vercel"],
    approaches: [
      "Mobile First",
      "Responsive layout",
      "Pixel Perfect",
      "Multilanguage",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/druk-army-project",
    liveURL: "https://druk-army-project-woad.vercel.app/en",
    description: t("drukarmyDescription"),
    details: t("drukarmyDetails"),
  },
  {
    id: 10,
    path: "/drinkMaster",
    title: "DrinkMaster",
    thumbnail: "/images/portfolio/DrinkMaster.webp",
    category: "fullstack",
    skills: [
      "React",
      "Vite",
      "JavaScript",
      "Emotion",
      "Formik",
      "Yup",
      "Axios",
      "REST API",
      "Material-UI",
      "Notiflix",
      "Redux Toolkit",
      "Redux Persist",
      "React-router-dom",
    ],
    soft: ["VSCode", "Figma", "Git", "GitHub", "Netlify", "Cloudinary"],
    approaches: [
      "Mobile First",
      "Responsive layout",
      "Form Validation",
      "JWT-authentication",
      "Pagination",
      "Filtering",
      "Pixel Perfect",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/drink-code-frontend",
    liveURL: "https://andriiskliar.github.io/drink-code-frontend",
    description: t("drinkFrontDescription"),
    details: t("drinkFrontDetails"),
  },
  {
    id: 11,
    path: "/drinkMaster-api",
    title: "Backend DrinkMaster",
    thumbnail: "/images/portfolio/server.webp",
    category: "backend",
    skills: [
      "Node.js",
      "JavaScript",
      "Express.js",
      "Mongoose",
      "MongoDB",
      "Bcrypt",
      "JWT",
      "Joi-validation",
      "Cloudinary",
      "Multer",
      "Gravatar",
      "Nodemailer",
      "Swagger",
    ],
    soft: ["VSCode", "Postman", "Mongo Atlas", "Onrender.com", "Swagger"],
    approaches: ["REST API", "JWT-authentication", "Email-verification"],
    repositoryURL: "https://github.com/VladyslavVagin/drink-code-backend",
    liveURL: "https://drink-code-backend.onrender.com/api-docs",
    description: t("apiDrinkDescription"),
    details: t("apiDrinkDetails"),
  },
  {
    id: 12,
    path: "/bookshelf",
    title: "Bookshelf",
    thumbnail: "/images/portfolio/bookshelf.webp",
    category: "frontend",
    skills: [
      "JavaScript",
      "Vite",
      "Firebase",
      "CSS3",
      "Axios",
      "Tui-pagination",
      "HTML5",
      "Simplelightbox",
    ],
    soft: ["VSCode", "Figma", "Git", "GitHub"],
    approaches: [
      "Mobile First",
      "Responsive layout",
      "Pixel Perfect",
      "Pagination",
      "Filtering",
      "Firebase-authentication",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/BookShelf_Team_Project",
    liveURL: "https://vladyslavvagin.github.io/BookShelf_Team_Project",
    description: t("bookshelfDescription"),
    details: t("bookshelfDetails"),
  },
  {
    id: 13,
    path: "/your-energy",
    title: "Your Energy",
    thumbnail: "/images/portfolio/your-energy.webp",
    category: "frontend",
    skills: [
      "Parcel",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tui-pagination",
      "REST API",
    ],
    soft: ["VSCode", "Figma", "Git", "GitHub"],
    approaches: [
      "Mobile First",
      "Responsive layout",
      "Pixel Perfect",
      "Pagination",
      "Filtering",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/sport_api",
    liveURL: "https://vladyslavvagin.github.io/sport_api",
    description: t("energyDescription"),
    details: t("energyDetails"),
  },
  {
    id: 14,
    path: "/hotel-management",
    title: "Hotel Management",
    thumbnail: "/images/portfolio/hotel-management.webp",
    category: "fullstack",
    skills: [
      "Next.js",
      "TypeScript",
      "Sanity",
      "Tailwind CSS",
      "Chart.js",
      "Axios",
      "Stripe",
      "OAuth",
    ],
    soft: ["VSCode", "Figma", "Git", "GitHub", "Vercel", "Sanity"],
    approaches: [
      "Mobile First",
      "Responsive layout",
      "Pixel Perfect",
      "Stripe payment",
      "OAuth",
      "Admin panel",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/hotel-management",
    liveURL: "https://vagahotel-manage.vercel.app",
    description: t("hotelDescription"),
    details: t("hotelDetails"),
  },
  {
    id: 15,
    path: "/focus-frame",
    title: "Focus.Frame",
    thumbnail: "/images/portfolio/focus-frame.webp",
    category: "landing",
    skills: ["HTML5", "CSS3", "JavaScript", "JQuery"],
    soft: ["VSCode", "Figma", "Git", "GitHub"],
    approaches: [
      "Mobile First",
      "Responsive layout",
      "Pixel Perfect",
      "Animation",
      "Form Validation",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/Team-project",
    liveURL: "https://vladyslavvagin.github.io/Team-project",
    description: t("focusDescription"),
    details: t("focusDetails"),
  },
  {
    id: 16,
    path: "/webstudio",
    title: "Web Studio",
    thumbnail: "/images/portfolio/webstudio.webp",
    category: "landing",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "JQuery",
      "Semanthic HTML",
      "SVG-sprites",
    ],
    soft: ["VSCode", "Figma", "Git", "GitHub"],
    approaches: [
      "Mobile First",
      "Responsive layout",
      "Pixel Perfect",
      "Slider",
      "Form Validation",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/goit-markup-hw-06",
    liveURL: "https://vladyslavvagin.github.io/goit-markup-hw-06",
    description: t("webstudioDescription"),
    details: t("webstudioDetails"),
  },
  {
    id: 17,
    path: "/simply-chocolate",
    title: "Simply Chocolate",
    thumbnail: "/images/portfolio/simply-chocolate.webp",
    category: "landing",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "JQuery",
      "SVG-sprites",
      "Semanthic HTML",
    ],
    soft: ["VSCode", "Figma", "Git", "GitHub"],
    approaches: [
      "Mobile First",
      "Responsive layout",
      "Pixel Perfect",
      "Slider",
      "Form Validation",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/simply-choc",
    liveURL: "https://vladyslavvagin.github.io/simply-choc",
    description: t("chocoDescription"),
    details: t("chocoDetails"),
  },
  {
    id: 18,
    path: "/live-docs",
    title: "LiveDocs",
    thumbnail: "/images/portfolio/livedocs.webp",
    category: "frontend",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Clerk",
      "Liveblocks",
    ],
    soft: ["VSCode", "Figma", "Git", "GitHub", "Vercel"],
    approaches: [
      "Real-time collaboration",
      "Authentication",
      "Responsive layout",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/real-documentation",
    liveURL: "https://real-documentation.vercel.app",
    description: t("liveDocsDescription"),
    details: t("liveDocsDetails"),
  },
  {
    id: 19,
    path: "/vocali",
    title: "Vocali",
    thumbnail: "/images/portfolio/logo-vocali.png",
    category: "fullstack",
    skills: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Speechmatics API",
      "Vite",
      "AWS Cognito",
      "AWS DynamoDB",
      "AWS S3",
      "AWS Route 53",
      "AWS ECR",
      "Terraform",
      "Docker",
      "Nest.js",
      "Swagger"
    ],
    soft: ["VSCode", "Figma", "Git", "GitHub", "Vercel", "AWS"],
    approaches: [
      "Real-time transcription",
      "Upload audio",
      "Real-time recording",
      "Authentication",
      "Responsive layout",
    ],
    repositoryURL: "https://github.com/VladyslavVagin/vocali-interface",
    liveURL: "https://vocali-interface.vercel.app",
    description: t("vocaliDescription"),
    details: t("vocaliDetails"),
  },
];
