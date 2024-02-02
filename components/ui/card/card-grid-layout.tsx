"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardGridLayoutProps {
  open?: boolean;
  className?: string;
  children: ReactNode;
}

export const CardGridLayout = ({ children, open, className }: CardGridLayoutProps) => {
  if (!open) {
    return null;
  }
  return (
    <div className="p-6 xl:p-0 space-y-4">
      <div className={cn("grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6", className)}>
        {children}
      </div>
    </div>
  );
};
