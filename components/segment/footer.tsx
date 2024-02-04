"use client";

import { FC } from "react";
import { Container } from "@/components/ui/container";
import { Social } from "./nav/social";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <Container>
      <footer className="w-full flex p-4 px-0 justify-between items-center">
        <p className="text-[0.85rem] dark:text-primary/70 text-primary-foreground/70">
          &copy; 2024 portfolio sandeep thakur All rights reserved.
        </p>
        <Social />
      </footer>
    </Container>
  );
};
