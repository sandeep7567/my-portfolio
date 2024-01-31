"use client";

import { FC } from "react";
import { Container } from "@/components/ui/container";
import { NavAction } from "@/components/segment/nav/nav-action";
import { Social } from "@/components/segment/nav/social";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  
  return (
    <div className="w-full h-16 relative">
      <div className=" fixed top-0 w-full z-50 shadow">
        <Container>
          <nav className="flex w-full justify-between items-center">
            <h1>Sandeep Thakur</h1>
            <div className="flex justify-between gap-x-10 items-center">
            <NavAction/>
            <Social/>
            </div>
          </nav>
        </Container>
      </div>
    </div>
  );
};
