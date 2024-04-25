import React from "react";
import { cn } from "@/util/cn";

function ComponentContainer({
  children,
  center = true
}: {
  children: React.ReactNode;
  center?: boolean;
}): React.JSX.Element {
  return <div className={cn(center && "justify-center","w-full bg-zinc-900 rounded-lg p-4 my-4 border border-zinc-600 flex items-center min-h-[10rem]")}>{children}</div>;
}

export default ComponentContainer;
