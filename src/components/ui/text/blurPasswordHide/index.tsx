"use client";
import React, { useState } from "react";
import { cn } from "@/util/cn";

export function BlurPassowrdHide({
  text,
}: {
  text: string;
}): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  //   const text = "This_is_a_very_secret_password";

  const gradularBlur = (currentIndexTrack: number, index: number): string => {
    if (currentIndexTrack === -1) {
      return "blur";
    } else if (index === currentIndexTrack) {
      return "blur-0";
    } else if (
      index === currentIndexTrack + 1 ||
      index === currentIndexTrack - 1
    ) {
      return "blur-[1px]";
    } else if (
      index === currentIndexTrack + 2 ||
      index === currentIndexTrack - 2
    ) {
      return "blur-[2px]";
    } else if (
      index === currentIndexTrack + 3 ||
      index === currentIndexTrack - 3
    ) {
      return "blur-[4px]";
    }
    return "blur";
  };

  const characters = text.split("");

  return (
    <div className="text-4xl">
      {characters.map((char, index) => (
        <span
          onMouseEnter={() => {
            setCurrentIndex(index);
          }}
          onMouseLeave={() => {
            setCurrentIndex(-1);
          }}
          className={cn(gradularBlur(currentIndex, index), "transition-all duration-[1000ms] ease-out")}
          // eslint-disable-next-line react/no-array-index-key -- Index is used as key here
          key={index}
          //   style={{ animationDelay: `${(index * 0.1).toString()}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

function BlurPassowrdHideDemo(): React.JSX.Element {
  return (
    <div className="flex h-[50vh] w-full flex-col items-center justify-center gap-4">
      <div className="my-2 flex">
        <div className="w-[35vw]">
          <h1 className="text-2xl">Password</h1>
          <p className=" text-sm">Hover over the password to reveal it.</p>
        </div>
      </div>
      <BlurPassowrdHide text="This_is_a_very_secret_password" />
    </div>
  );
}

export default BlurPassowrdHideDemo;
