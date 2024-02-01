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
    <div className="p-1 flex justify-center">
    <Card className={cn("w-[75%] sm:w-full sm:aspect-square mx-auto border-collapse border-border/20", className)}>
      <CardHeader className="p-0 pt-4 pl-4 flex flex-col">
        <CardTitle className="text-base text-accent/80">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 pl-4 pb-4">
        {data.map((item: string) => (
          <div key={item} className=" mr-3 inline-flex justify-around bg-card-foreground p-1.5 shadow border border-fuchsia-400/10 shadow-indigo-300 rounded-[5px] mt-4 items-center">
            <span className="text-muted text-xs break-words">
              {item}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
    </div>
  );
};
