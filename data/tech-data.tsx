export interface TechDataType {
  key: "Frontend" | "Backend" | "Database" | "Software" | "State Management";
  values: string[];
}

export const techData: TechDataType[] = [
  {
    key: "Frontend",
    values: [
      "HTML",
      "CSS",
      "JS",
      "Tailwind",
      "Typescript",
      "React Js",
      "Next Js 13",
      // "shadcn-ui",
    ],
  },

  {
    key: "Backend",
    values: ["Node Js", "Express Js", "Next Auth Js", "Auth Js V5"],
  },

  { key: "Database", values: ["MongoDB", "MySql", "PostgreSQL"] },

  {
    key: "Software",
    values: ["VsCode", "GIT", "Postman", "Cloudinary", "AWS S3 Bucket Basic"],
  },

  {
    key: "State Management",
    values: ["shadcn-ui", "Redux", "Redux Toolkit", "Zustand", "Recoil"],
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
    gitLink: "https://github.com/sandeep7567/eshop-store",
    liveLink: "https://eshop-store-psi.vercel.app",
  },
  {
    _id: 2,
    img: "eshop-admin.png",
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
    gitLink: "https://github.com/sandeep7567/eshop-admin",
    liveLink: "https://eshop-admin-alpha.vercel.app",
  },
  {
    _id: 3,
    img: "studynotion-lms.webp",
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
    gitLink:
      "https://github.com/sandeep7567/StudyNotion-A-Learning-Management-System",
    liveLink:
      "https://studynotion-a-learning-management-system-frontend.vercel.app/",
  },
  {
    _id: 4,
    img: "auth.png",
    title: "Auth",
    techList: [
      "Next Auth",
      "Auth Js",
      "Prisma",
      "Postgres",
      "NodeJs",
      "ExpressJs",
      "Tailwind CSS",
      "Typescript",
    ],
    gitLink: "https://github.com/sandeep7567/auth-app",
    liveLink: "https://auth-app-ten-wheat.vercel.app/",
  },
  {
    _id: 5,
    img: "ecommerce-mern.webp",
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
    gitLink: "https://github.com/sandeep7567/ecommerce-fronted",
    liveLink: "",
  },
  {
    _id: 6,
    img: "ecommerce-mern.webp",
    title: "Ecommerce Admin Dashboard",
    techList: [
      "MERN",
      "Moongoose",
      "NodeJs",
      "ExpressJs",
      "Next Auth",
      "Tailwind",
      "Typescript",
    ],
    gitLink: "https://github.com/sandeep7567/ecommerce-admin",
    liveLink: "",
  },
  {
    _id: 7,
    img: "sandeep-portfolio.png",
    title: "Coding With Sandeep",
    techList: ["Next Js", "React Js", "Typescript", "Shadcn", "Embla Carousel"],
    gitLink: "https://github.com/sandeep7567/my-portfolio",
    liveLink: "https://sandeep-portfolio-foph2o0ju-sandeep7567.vercel.app/",
  },
  {
    _id: 8,
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
    gitLink: "https://github.com/sandeep7567/spotify-clone",
    liveLink: "",
  },
  {
    _id: 9,
    img: "feedback-boards.png",
    title: "feedback Board",
    techList: [
      "Next Js",
      "React Hook Form",
      "Zustand",
      "Radix UI",
      "Tailwind CSS",
      "Typescript",
    ],
    gitLink: "https://github.com/sandeep7567/Feedback-Board",
    liveLink: "https://feedback-board-btmjz3dsv-sandeep7567.vercel.app/",
  },
  {
    _id: 10,
    img: "razorpay-clone.webp",
    title: "Razorpay Clone",
    techList: ["HTML", "CSS", "Tailwind CSS"],
    gitLink: "https://github.com/sandeep7567/Razorpay-Clone",
    liveLink: "https://razorpay-clone-sand-psi.vercel.app/",
  },
];
