"use client";

import { FC } from "react";
import { CardWrapper } from "@/components/segment/normal/card-wrapper";
import { techData } from "@/data/tech-data";
import { Heading } from "@/components/ui/heading";

interface TechProps {}

export const Tech: FC<TechProps> = ({}) => {
  const { software, frontend, backend, database, stateManagement } = techData;
  return (
    <div className="mt-5">
      {/* Heading */}
      <Heading>
        Tech Stack
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 mx-auto w-full gap-x-4 mt-4">
        <CardWrapper title="Frontend" data={frontend} />
        <CardWrapper title="Backend" data={backend} />
        <CardWrapper title="Database" data={database}  />
        <CardWrapper title="Software" data={software} />
        <CardWrapper title="State Management" data={stateManagement} />
      </div>

    </div>
  );
};
