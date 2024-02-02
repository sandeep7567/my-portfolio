export const techData = [
  {
    key: "frontend",
    values: [
      "HTML",
      "CSS",
      "JS",
      "Tailwind",
      "Typescript",
      "React Js",
      "Next Js 13",
    ],
  },

  { key:"backend", values: ["Node Js", "Express Js", "Next Auth Js", "Auth Js V5"] },

  { key: "database", values: ["MongoDB", "MySql", "PostgreSQL"] },

  {
    key: "software", values: ["VsCode", "GIT", "Postman", "Cloudinary", "AWS S3 Bucket Basic"],
  },

  {
    key: "stateManagement", values: [
      "shadcn-ui",
      "Redux",
      "Redux Toolkit",
      "Zustand",
      "Recoil",
    ],
  },
];

export interface ProjectInfoType {
  _id: number;
  img: string;
  title: string;
  techList: string[];
  gitLink: string;
  liveLink: string;
}

export const projectInfo: ProjectInfoType[] = [
  {
    _id: 1,
    img: "amazon-clone.jpeg",
    title: "Amazon Clone",
    techList: [
      "Next.js",
      "Headless Ui",
      "Zustand",
      "Tailwind CSS",
      "Typescript",
    ],
    gitLink: "",
    liveLink: "",
  },
  {
    _id: 2,
    img: "amazon-clone.jpeg",
    title: "CRM Dashboard",
    techList: [
      "Next.js",
      "AuthJS",
      "Shadcn",
      "React Hook Form",
      "Zustand",
      "Tailwind CSS",
      "Typescript",
      "TanStack Table",
      "Sooner",
    ],
    gitLink: "",
    liveLink: "",
  },
  {
    _id: 3,
    img: "amazon-clone.jpeg",
    title: "StuyNotion LMS",
    techList: [
      "MERN",
      "Moongoose",
      "NodeJs",
      "ExpressJs",
      "JWT Auth",
      "React Hook Form",
      "Redux and Redux Toolkit",
      "Tailwind CSS",
      "Typescript",
    ],
    gitLink: "",
    liveLink: "",
  },
  {
    _id: 4,
    img: "amazon-clone.jpeg",
    title: "Ecommerce Dashboard",
    techList: [
      "MERN",
      "Moongoose",
      "NodeJs",
      "ExpressJs",
      "Next Auth",
      "Tailwind CSS",
      "Typescript",
    ],
    gitLink: "",
    liveLink: "",
  },
  {
    _id: 5,
    img: "amazon-clone.jpeg",
    title: "Ecommerce Shop",
    techList: [
      "MERN",
      "Moongoose",
      "NodeJs",
      "ExpressJs",
      "Next Auth",
      "Styled Component",
      "Typescript",
    ],
    gitLink: "",
    liveLink: "",
  },
  {
    _id: 6,
    img: "amazon-clone.jpeg",
    title: "My Portfolio",
    techList: ["Next Js", "React Js", "Typescript", "Shadcn", "Embla Carousel"],
    gitLink: "",
    liveLink: "",
  },
  {
    _id: 7,
    img: "spotify-clone.gif",
    title: "Spotify Clone",
    techList: [
      "Next Js",
      "React Hook Form",
      "Zustand",
      "Radix UI",
      "Tailwind CSS",
      "Typescript",
    ],
    gitLink: "",
    liveLink: "",
  },
];
