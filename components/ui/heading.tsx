import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

interface HeadingProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <div  {...props} className={cn("", className)} >
    <h1 className="text-xl font-medium text-wrap text-start">{children}</h1>
    </div>
  );
};
