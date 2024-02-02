"use client";

import { FC } from "react";
import { CardWrapper } from "@/components/segment/normal/card-wrapper";
import { techData } from "@/data/tech-data";
import { Heading } from "@/components/ui/heading";
import { CardGridLayout } from "@/components/ui/card/card-grid-layout";

interface TechProps {}

export const Tech: FC<TechProps> = ({}) => {
  const { software, frontend, backend, database, stateManagement } = techData;
  return (
    <div id="tech" className="mt-5 space-y-3">
      {/* Heading */}
      <Heading>Tech Stack</Heading>

      <div className="p-6 xl:p-0 space-y-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-6">
          <CardWrapper title="Frontend" data={frontend} />
          <CardWrapper title="Backend" data={backend} />
          <CardWrapper title="Database" data={database} />
          <CardWrapper title="Software" data={software} />
          <CardWrapper title="State Management" data={stateManagement} />
        </div>
      </div>
    </div>
  );
};
