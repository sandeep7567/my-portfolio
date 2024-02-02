"use client";

import { FC, useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { NavAction } from "@/components/segment/nav/nav-action";
import { Social } from "@/components/segment/nav/social";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  const [show, setShow] = useState(false);

  const controlNavbar = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 5) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className="w-full relative">
      <div
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-200",
          show ? "shadow bg-card-foreground" : "shadow-none bg-transparent"
        )}
        role="navigation"
      >
        <Container>
          <nav className="flex w-full h-[4.25rem] justify-between items-center">
            {/* <div className="flex w-full justify-start gap-x-10 flex-1 items-center"> */}
            <Link href={"/"}>
              <h1 className="text-[1.5625rem] leading-6 cursor-pointer font-normal">
                Sandeep Thakur
              </h1>
            </Link>
            {/* </div> */}
            <div className="flex justify-between gap-x-10 items-center">
              <NavAction />
              <Social />
            </div>
          </nav>
        </Container>
      </div>
    </div>
  );
};
