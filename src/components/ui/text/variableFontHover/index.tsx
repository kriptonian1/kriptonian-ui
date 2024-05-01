import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";

export function VariableFontHover(): React.JSX.Element {
  const textRef = useRef<HTMLDivElement | null>(null);

  const splitTextIntoChars = (element: HTMLElement): HTMLElement[] | null => {
    const split = new SplitType(element, { types: "chars" });
    return split.chars;
  };

  useEffect(() => {
    gsap.registerPlugin(useGSAP);
    const MAX_DISTANCE = 100; // Adjust the maximum distance for font weight change as needed
    const MAX_FONT_WEIGHT = 800; // Maximum font weight
    const MIN_FONT_WEIGHT = 100; // Minimum font weight

    if (textRef.current) {
      const current = textRef.current;
      splitTextIntoChars(textRef.current);

      const hover = (e: MouseEvent): void => {
        const x = e.clientX;
        const y = e.clientY;

        Array.from(current.getElementsByClassName("char")).forEach((char) => {
          const rect = char.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const distance = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2),
          );

          const fontWeight =
            distance < MAX_DISTANCE
              ? gsap.utils.mapRange(
                  0,
                  MAX_DISTANCE,
                  MIN_FONT_WEIGHT,
                  MAX_FONT_WEIGHT,
                  Math.max(0, MAX_DISTANCE - distance),
                )
              : MIN_FONT_WEIGHT;

          gsap.to(char, { fontWeight, duration: 0.5 });
        });
      };

      window.addEventListener("mousemove", hover);

      return () => {
        window.removeEventListener("mousemove", hover);
      };
    }
  }, []);

  return (
    <div className="text-6xl" ref={textRef}>
      hover here thank me later
    </div>
  );
}
