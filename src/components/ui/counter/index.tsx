"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";

interface CounterProps {
  value: number;
  className?: string;
}

export function Counter({ value, className }: CounterProps): React.JSX.Element {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current as number).toLocaleString(),
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span className={className}>{display}</motion.span>;
}

function CounterDemo(): React.JSX.Element {
  const [value, setValue] = useState<number>(1000);
  return (
    <div className="flex shadow-xl items-center gap-4 rounded-lg border-[4px] border-b-white/80 border-l-white/70 border-r-white/70 border-t-white/50 bg-blue-400 p-4 dark:shadow-inner ">
      <button
        type="button"
        className="rounded p-2 transition-colors hover:bg-blue-500/50 hover:shadow"
        onClick={() => {
          setValue(value - 100);
        }}
      >
        -100
      </button>
      <Counter
        value={value}
        className="flex w-[5vw] justify-center text-2xl font-medium drop-shadow"
      />
      <button
        type="button"
        className="rounded p-2 transition-colors hover:bg-blue-500/50 hover:shadow"
        onClick={() => {
          setValue(value + 100);
        }}
      >
        +100
      </button>
    </div>
  );
}

export default CounterDemo;
