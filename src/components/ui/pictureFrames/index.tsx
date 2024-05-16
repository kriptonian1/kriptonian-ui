"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/util/cn";

interface FrameProps {
  src: string;
  alt: string;
  rot?: number;
}

export function Frame({ src, alt, rot = 12 }: FrameProps): React.JSX.Element {
	const [isPressed, setIsPressed] = useState(false);
  return (
    <Image
      onMouseDown={() => {
        setIsPressed(true);
      }}
      onMouseUp={() => {
        setIsPressed(false);
      }}
      alt={alt}
      width={1920}
      height={1080}
      style={{ "--rotate": `${rot.toString()}deg` } as React.CSSProperties}
      className={cn(isPressed ? "scale-[5] cursor-zoom-out" : "hover:scale-[1.5] cursor-zoom-in" ,"relative w-[5rem] rotate-[--rotate] border bg-white p-2 drop-shadow-md transition-transform duration-300 ease-in-out hover:z-20 hover:rotate-0 ")}
      src={src}
    />
  );
}

function PictureFrameDemo(): React.JSX.Element {
  return (
    <div className="grid h-[20rem] grid-cols-5 items-center -space-x-5 p-5">
      <Frame
        src="https://images.unsplash.com/photo-1715645942867-4c8649966352"
        alt="frame 1"
      />
      <Frame
        src="https://images.unsplash.com/photo-1557381733-949765af91b9"
        alt="frame 2"
        rot={40}
      />
      <Frame
        src="https://images.unsplash.com/photo-1711656166230-8e8ecfab7732"
        alt="frame 3"
        rot={-10}
      />
      <Frame
        src="https://images.unsplash.com/photo-1704923510885-5ff4f047ce28"
        alt="frame 4"
        rot={10}
      />
    </div>
  );
}

export default PictureFrameDemo;
