"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/util/cn";

function ComponentContainer({
  children,
  center = true,
}: {
  children: React.ReactNode;
  center?: boolean;
}): React.JSX.Element {
  const [theme, setTheme] = useState<string | null>(typeof window !== "undefined" ? window.localStorage.getItem("theme") : "");

  useEffect(() => {
    const handleStorageChange = (): void => {
      setTheme(typeof window !== "undefined" ? window.localStorage.getItem("theme") : "");
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup function
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  console.log(theme);
  

  return (
    <div
    data-nextraTheme={theme}
      className={cn(
        center && "justify-center",
        "my-4 flex min-h-[10rem] w-full items-center rounded-lg border border-zinc-600  data-[nextraTheme=light]:bg-zinc-200/50 p-4  data-[nextraTheme=dark]:bg-zinc-900",
      )}
    >
      {children}
    </div>
  );
}

export default ComponentContainer;
