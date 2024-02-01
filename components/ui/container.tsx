import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-y-8">{children}</div>
  );
};
