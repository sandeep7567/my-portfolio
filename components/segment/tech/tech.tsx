"use client";

import { FC } from "react";
import { CardWrapper } from "@/components/segment/normal/card-wrapper";
import { techData } from "@/data/tech-data";
import { Heading } from "@/components/ui/heading";
import { CardGridLayout } from "@/components/ui/card/card-grid-layout";

interface TechProps {}

export const Tech: FC<TechProps> = ({}) => {
  return (
    <div id="tech" className="mt-5 space-y-3">
      {/* Heading */}
      <Heading>Tech Stack</Heading>

      {/* only customize grid cols 5 for XL screen and more using CardGridLayout */}
      <CardGridLayout open className="xl:grid-cols-5">
        {techData?.map((tech, i) => (
          <CardWrapper
            title={tech?.key}
            data={tech?.values}
            key={tech?.key}
          ></CardWrapper>
        ))}
      </CardGridLayout>
    </div>
  );
};
