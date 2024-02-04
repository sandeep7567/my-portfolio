"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Link2, Link2Icon } from "lucide-react";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
      className={cn("w-full z-40 group h-full mx-auto  border  border-border/25 border-collapse border-opacity-25 dark:hover:bg-sky-100 hover:bg-sky-100  hover:bg-opacity-25 transition flex flex-col cursor-pointer")}
    >
      <div className={cn("flex-1 overflow-hidden rounded-md")}>
        <Image
          src={`/projects/${img}`}
          alt={"project"}
          width={700}
          height={700}
          loading="lazy"
          className={cn(
            "h-auto w-auto object-cover transition-all aspect-video overflow-hidden rounded-t-xl"
          )}
        />

        <CardHeader className="p-3">
          <CardTitle className="text-sm md:text-base group-hover:text-sky-700 transition line-clamp-2 font-medium">{title}</CardTitle>
          <div className="flex flex-wrap gap-x-4 ">
            {techList.map((tech, index) => (
              <div key={index}>
                <p className="text-xs text-primary-foreground/50 mr-0.5 mb-0.5">
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
            variant={"default"}
            className="rounded-[0.4rem] w-full"
            asChild
            >
            <Link href={liveLink || "/"} target="_blank">
              <Link2 className="mr-2 h-4 w-4"/> Live
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
    </Card>
  );
};
