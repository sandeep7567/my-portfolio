"use client";

import { FC, useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { NavAction } from "@/components/segment/nav/nav-action";
import { Social } from "@/components/segment/nav/social";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  const [show, setShow] = useState(false);

  const controlNavbar = () => {
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
    <div className="relative">
      <div
        className={cn(
          "fixed top-0 w-full z-[9999] transition-all p-6 py-0 xl:p-0 duration-200",
          show ? "shadow bg-card-foreground dark:bg-card dark:border border-border" : "shadow-none bg-transparent translate-y-0"
        )}
        role="navigation"
      >
        <Container>
          <nav className="flex w-full h-[4.25rem] justify-between items-center">
            {/* <div className="flex w-full justify-start gap-x-10 flex-1 items-center"> */}
            <Link href={"/"}>
              <h1 className="text-base cursor-pointer font-semibold text-sky-700 dark:text-sky-400">
                Code with Sandeep
              </h1>
            </Link>
            {/* </div> */}
            <div className="flex justify-between gap-x-10 items-center">
              <NavAction />
              <Social />
              <ThemeToggleButton/>
            </div>
          </nav>
        </Container>
      </div>
    </div>
  );
};
