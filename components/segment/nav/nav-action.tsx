"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navActionData } from "@/data/nav-action-data";

export const NavAction = () => {
  const [id, setId] = useState(1);
  const navClick = (id:number) => {
    setId(Number(id));
  };

  return (
    <div className=" hidden sm:flex justify-center gap-x-8 items-center">
      {navActionData.map((nav, i) => (
        <Link
          key={nav?.href}
          className={cn(
            "text-[0.875rem] font-normal leading-[1.05rem] text-right cursor-pointer",
            // nav?._id === i+1 && "font-bold"
            nav?._id === id && "font-bold"
          )}
          href={nav?.href}
          onClick={() => navClick(nav?._id)}
        >
          {nav?.label}
        </Link>
      ))}
    </div>
  );
};
