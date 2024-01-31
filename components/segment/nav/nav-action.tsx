"use client";

import { navActionData } from "@/data/nav-action-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, useState } from "react";

interface NavActionProps {}

export const NavAction: FC<NavActionProps> = ({}) => {

  return (
    <div className="flex justify-center gap-x-8 items-center">
      {navActionData.map((nav, i) => (
        <Link
          className={cn(
            location.href === nav?.href ? "text-black" : "text-black/50"
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
