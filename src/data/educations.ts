export const getEducations = (t: (key: string) => string) => [
  {
    id: 1,
    year: "2014",
    title: t("onma"),
    description: t("textOnma"),
  },
  {
    id: 2,
    year: "2023",
    title: t("goit"),
    description: t("textGoit"),
  },
  {
    id: 3,
    year: "2024",
    title: t("getafe"),
    description: t("textGetafe"),
  },
];
