import React from "react";
import { cn } from "@/util/cn";

interface SpeedTextProps {
  text: string;
  className?: string;
}

export function SpeedText({
  text,
  className,
}: SpeedTextProps): React.JSX.Element {
  return (
    <div
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden text-neutral-950 dark:text-white",
        className,
      )}
    >
      <span className="relative inline-flex overflow-hidden">
        <div className="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
          {text}
        </div>
        <div className="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
          {text}
        </div>
      </span>
    </div>
  );
}

function SpeedTextDemo(): React.JSX.Element {
  return (
    <div className="flex flex-wrap gap-4">
      <SpeedText text="Hover me" className="text-2xl" />
    </div>
  );
}

export default SpeedTextDemo;
