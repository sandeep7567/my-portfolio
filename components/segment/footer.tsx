"use client";

import { FC } from "react";
import { Container } from "@/components/ui/container";
import { Social } from "./nav/social";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <Container>
      <footer className="w-full flex justify-between items-center">
        <h3>sandeep thakur</h3>
        <p>All rights reserved to sandeep thakur &copy; 2024</p>
        <div>
          <Social />
        </div>
      </footer>
    </Container>
  );
};
