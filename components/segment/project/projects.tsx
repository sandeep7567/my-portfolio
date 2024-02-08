"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";

import { projectInfo } from "@/data/tech-data";

import { Heading } from "@/components/ui/heading";
import { SliderShow } from "@/components/ui/slider-show";
import { ShowProjectCard } from "@/components/ui/card/show-project-card";
import { CardGridLayout } from "@/components/ui/card/card-grid-layout";
import { SwitchInput } from "@/components/ui/switch/switch-input";

export const Projects = () => {
  const [isMode, setIsMode] = useState(false);
  return (
    <div id="project" className="mt-5 mb-8">
      <div
        className={cn(
          "flex justify-start mr-auto w-1/2 sm:justify-start items-center gap-x-3",
          isMode ? "mb-5" : "-mb-10 lg:-mb-16"
        )}
      >
        <Heading>Projects</Heading>
        <SwitchInput setIsMode={setIsMode} className="z-50 dark:bg-white" />
      </div>

      <SliderShow projectData={projectInfo} open={isMode} />

      <CardGridLayout open={isMode}>
        {projectInfo.map((project) => (
          <ShowProjectCard
            key={project?._id}
            id={project?._id}
            {...project}
            className="group-hover:z-[9999]"
          />
        ))}
      </CardGridLayout>
    </div>
  );
};
