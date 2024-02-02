import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface CardWrapperProps {
  className?: string;
  title: string;
  data: string[];
}

export const CardWrapper: FC<CardWrapperProps> = ({
  className,
  title,
  data,
}) => {
  return (
    <Card
      className={cn(
        "w-full mx-auto border-collapse border-border/20 flex flex-col",
        className
      )}
    >
      <CardHeader className="p-3 ">
        <CardTitle className="text-base text-accent/80">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        {data.map((item: string) => (
          <div
            key={item}
            className=" mr-3 mb-4 inline-flex justify-around bg-card-foreground p-1.5 shadow border border-fuchsia-400/10 shadow-indigo-300 rounded-[5px] items-center"
          >
            <span className="text-muted text-xs break-words">{item}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
