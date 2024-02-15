export interface navActionDataProps {
  _id: 1 | 2 | 3 | 4;
  label: "Home" | "Tech Stack" | "Projects";
  href: string;
}

export const navActionData: navActionDataProps[] = [
  {
    _id: 1,
    label: `Home`,
    href: "#home",
  },
  // {
  //   _id: 2,
  //   label: `About`,
  //   href: "#about",
  // },
  {
    _id: 3,
    label: `Tech Stack`,
    href: "#tech",
  },
  {
    _id: 4,
    label: `Projects`,
    href: "#project",
  },
];