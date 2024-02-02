"use client";

import { FC } from "react";

import { ProjectCard } from "@/components/ui/card/project-card";
import Image from "next/image";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Link2, Link2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShowProjectCardProps {
  id: number;
  className: string;
  title: string;
  techList: string[];
  gitLink: string;
  liveLink: string;
  img: string;
}

export const ShowProjectCard: FC<ShowProjectCardProps> = ({
  id,
  img,
  title,
  techList,
  liveLink,
  gitLink,
  className,
}) => {
  return (
    <Card
      className={cn("w-full h-full mx-auto flex flex-col cursor-pointer")}
    >
      <div className={cn("flex-1 overflow-hidden rounded-md")}>
        <Image
          src={`/projects/${img}`}
          alt={"project"}
          width={700}
          height={700}
          className={cn(
            "h-auto w-auto object-cover transition-all aspect-video overflow-hidden rounded-t-xl"
          )}
        />

        <CardHeader className="p-3">
          <CardTitle className="text-lg">{title}</CardTitle>
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
      </div>

      <div className={cn("")}>
        <CardFooter className="flex items-center gap-x-2 bg-transparent p-3">
          <Button
            size={"sm"}
            variant={"indigo"}
            className="rounded-[0.4rem] w-full"
            asChild
          >
            <Link href={liveLink || "/"} target="_blank">
              <Link2 className="mr-2 h-4 w-4" /> Live
            </Link>
          </Button>
          <Button
            size={"sm"}
            variant={"indigo"}
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
    </Card>
  );
};
