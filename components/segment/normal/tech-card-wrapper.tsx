import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        "group w-full mx-auto border z-40  border-border/25 border-collapse border-opacity-25 hover:bg-sky-100 dark:hover:bg-sky-100  hover:bg-opacity-25 transition flex flex-col",
        className
      )}
    >
      <CardHeader className="p-3">
        <CardTitle className="text-base group-hover:text-sky-700 transition text-accent/80 dark:text-accent/80">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        {data.map((item: string) => (
          <div
            key={item}
            className=" mr-3 mb-4 inline-flex justify-around bg-card-foreground p-1.5 shadow border border-fuchsia-400/10 shadow-indigo-300 rounded-[5px] items-center"
          >
            <span className="text-muted group-hover:font-semibold line-clamp-2 text-xs break-words">
              {item}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
