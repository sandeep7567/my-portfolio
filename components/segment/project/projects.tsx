"use client";

import { FC } from "react";
import { Heading } from "@/components/ui/heading";
import { SliderShow } from "@/components/ui/slider-show";

import { projectInfo } from "@/data/tech-data";

interface ProjectsProps {}

export const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="mt-5 mb-8">
      <Heading className="-mb-16">
        Projects
      </Heading>
      <SliderShow projectData={projectInfo}  />
    </div>
  );
};
