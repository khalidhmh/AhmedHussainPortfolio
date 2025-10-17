import React from "react";
import { cn } from "../../lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border/50 bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  );
}