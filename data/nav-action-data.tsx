export interface navActionDataProps {
  label: "Home" | "About" | "Tech Stack" | "Projects";
  href: string;
}

export const navActionData: navActionDataProps[] = [
  {
    label: `Home`,
    href: "#home",
  },
  {
    label: `About`,
    href: "#about",
  },
  {
    label: `Tech Stack`,
    href: "#tech",
  },
  {
    label: `Projects`,
    href: "#project",
  },
];