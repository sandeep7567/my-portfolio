"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navActionData } from "@/data/nav-action-data";

export const NavAction = () => {
  const [id, setId] = useState(1);
  const navClick = (id: number) => {
    setId(Number(id));
  };

  const onChange = (hashTag: string) => {
    window && typeof window !== "undefined" && window.location.assign(hashTag);
  };

  return (
    <>
      <div className=" hidden md:flex justify-center gap-6 items-center">
        {navActionData.map((nav, i) => (
          <Link
            key={nav?.href}
            className={cn(
              "text-sm hover:text-sky-700/90 dark:hover:text-sky-400/90 transition text-right cursor-pointer",
              // nav?._id === i+1 && "font-bold"
              nav?._id === id && "font-bold text-sky-700 dark:text-sky-400"
            )}
            href={nav?.href}
            onClick={() => navClick(nav?._id)}
          >
            {nav?.label}
          </Link>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex flex-col md:hidden justify-center items-center gap-6">
        <label htmlFor="underline_select" className="sr-only">
          Home
        </label>
        <select
          id="select"
          onChange={(e) => onChange(e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-center text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          {navActionData.map((nav, i) => (
            <option key={nav?._id} value={nav?.href}>{nav?.label}</option>
          ))}
        </select>
      </div>
    </>
  );
};
