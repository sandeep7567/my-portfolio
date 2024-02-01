"use client";

import { navActionData } from "@/data/nav-action-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface NavActionProps {}

export const NavAction: FC<NavActionProps> = ({}) => {

  return (
    <div className="flex justify-center gap-x-8 items-center">
      {navActionData.map((nav, i) => (
        <Link
          className={cn(
            "text-[0.875rem] leading-[1.05rem] text-right cursor-pointer",
            nav?.href ? "text-black font-normal" : "text-black font-medium"
          )}
          href={nav?.href}
          key={nav?.href}
        >
          {nav?.label}
        </Link>
      ))}
    </div>
  );
};
