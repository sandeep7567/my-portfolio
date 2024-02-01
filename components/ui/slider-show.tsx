"use client";

import React, { FC } from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectCard } from "./card/project-card";
import { ProjectInfoType } from "@/data/tech-data";

interface SliderShowProps {
  projectData: ProjectInfoType[]
}

export const SliderShow: FC<SliderShowProps> = ({ projectData }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full mx-auto mt-4"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {projectData.map((project, i) => (
          <CarouselItem
            key={project?._id}
            className="basis-full pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/4 items-center"
          >
            <div className="p-1 flex aspect-square items-center justify-center group">
              <ProjectCard
                id={project?._id}
                title={project?.title}
                techList={project?.techList}
                gitLink={project?.gitLink}
                liveLink={project?.liveLink}
                img={project?.img}
                className="group-hover:z-50"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"secondary"} />
      <CarouselNext variant={"secondary"} />
    </Carousel>
  );
};
