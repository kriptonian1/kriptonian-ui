import React from "react";
import { cn } from "@/util/cn";

interface StaggerRollProps {
  text: string;
  className?: string;
}

export function StaggerRoll({
  text,
  className,
}: StaggerRollProps): React.JSX.Element {
  return (
    <div
      className={cn(
        className,
        "group relative text-neutral-950 dark:text-white",
      )}
    >
      <span className="relative inline-flex overflow-hidden">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-12">
          {text}
        </div>
        <div className="absolute translate-y-[200%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {text}
        </div>
      </span>
    </div>
  );
}

function StaggerRollDemo(): React.JSX.Element {
  return (
    <div className="flex flex-wrap gap-4">
      <StaggerRoll text="Hover me for magic" className="text-2xl" />
    </div>
  );
}

export default StaggerRollDemo;
