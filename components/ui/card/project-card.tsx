"use client";

import React, { FC, useState } from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link2, Link2Icon } from "lucide-react";
import { Button } from "../button";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  id: number;
  title: string;
  gitLink: string;
  liveLink: string;
  img: string;
  techList: string[];
  className?: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  id,
  img,
  title,
  gitLink,
  liveLink,
  techList,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(0);

  return (
    <Card
      className={cn(
        "w-[380px] h-[380px] flex-col justify-between border border-border/25 border-collapse border-opacity-25 dark:hover:bg-sky-100 hover:bg-sky-100  hover:bg-opacity-25 transition cursor-pointer flex",
        isHovered === id ? `scale-center ${className}` : "h-fit"
      )}
      onMouseEnter={() => setIsHovered(id)}
      onMouseLeave={() => setIsHovered(0)}
    >
      {/* <Link href={gitLink || "/"} target="_blank" className="block"> */}
      <div className={cn(
        "rounded-md",
      )}>
        <Image
          src={`/projects/${img}`}
          alt={"project"}
          width={700}
          height={700}
          loading="lazy"
          className={cn(
            "h-auto w-auto object-cover transition-all aspect-video overflow-hidden rounded-xl group-hover:rounded-none group-hover:rounded-t-xl"
          )}
        />
      </div>

      <div
        className={cn(
          "hidden transition-all duration-200",
          isHovered === id && "group-hover:block"
        )}
      >
        <CardHeader>
          <CardTitle className="text-base group-hover:text-sky-700">{title}</CardTitle>
          <div className="flex flex-wrap gap-x-4 ">
            {techList.map((tech, index) => (
              <div key={index}>
                <p className="text-xs font-medium leading-none mr-1.5 mb-1.5">
                  {tech}
                </p>
              </div>
            ))}
          </div>
        </CardHeader>
        <CardFooter className="flex items-center gap-x-2 bg-transparent">
          <Button
            size={"sm"}
            variant={"default"}
            className="rounded-[0.4rem] w-full"
            asChild
          >
            <Link href={liveLink || "/"} target="_blank">
              <Link2 className="mr-2 h-4 w-4" /> Live
            </Link>
          </Button>
          <Button
            size={"sm"}
            variant={"default"}
            className="rounded-[0.4rem] w-full"
            asChild
            onClick={(e) => e.stopPropagation()}
          >
            <Link href={gitLink || "/"} target="_blank">
              <Link2Icon className="mr-2 h-4 w-4" /> github
            </Link>
          </Button>
        </CardFooter>
      </div>
      {/* </Link> */}
    </Card>
  );
};
