"use client";

import { FC } from "react";
import { Container } from "@/components/ui/container";
import { Social } from "./nav/social";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="border-collapse border-t border-border/20 dark:border-white/20 bg-white dark:bg-transparent">
      <Container>
        <footer className="w-full flex flex-col md:flex-row gap-y-6 md:gap-y-0 p-8 md:px-6 justify-between items-center">
          <p className="text-xs md:text-sm dark:text-primary/70 text-primary-foreground/70">
            &copy; 2024 portfolio sandeep thakur All rights reserved.
          </p>
          <Social className="z-40" />
        </footer>
      </Container>
    </div>
  );
};
