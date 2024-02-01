"use client";

import * as React from "react";

import { Container } from "@/components/ui/container";
import { Projects } from "@/components/segment/project/projects";
import { Home } from "@/components/segment/home/home";
import { Tech } from "@/components/segment/tech/tech";

function Portfolio() {
  
  return (
    <Container>
      <Home/>
      <Tech/>
      <Projects />
    </Container>
  );
}

export default Portfolio;
