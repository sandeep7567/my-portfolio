"use client";

import { ReactNode } from "react";

interface CardGridLayoutProps {
  children: ReactNode;
  open?: boolean;
}

export const CardGridLayout = ({ children, open }: CardGridLayoutProps) => {
  if (!open) {
    return null;
  }
  return (
    <div className="p-6 xl:p-0 space-y-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {children}
      </div>
    </div>
  );
};
