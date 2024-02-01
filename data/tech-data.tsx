// import amazonImage from "@/public/projects/amazon-clone.jpeg"
// import spotifyImage from "@/public/projects/spotify-clone.gif"

export const techData = {
  frontend: [
    "HTML",
    "CSS",
    "JS",
    "Tailwind",
    "Typescript",
    "React Js",
    "Next Js 13",
    // "shadcn-ui",
    // "Redux & Redux Toolkit",
    // "Zustand",
    // "Recoil",
  ],

  backend: ["Node Js", "Express Js", "Next Auth Js", "Auth Js V5"],

  database: ["MongoDB", "MySql", "PostgreSQL"],

  software: ["VsCode", "GIT", "Postman", "Cloudinary"],

  stateManagement: ["shadcn-ui", "Redux & Redux Toolkit", "Zustand", "Recoil"],
};

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
