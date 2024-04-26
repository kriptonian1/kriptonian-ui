import React, { useRef, useState } from "react";

interface MagneticTabProps {
  item: { id: number; text: string };
}

interface HoverPosition {
  x: number;
  y: number;
  opacity: number;
}

function MagneticTab({ item }: MagneticTabProps): React.JSX.Element {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [hoverPosition, setHoverPosition] = useState<HoverPosition>({
    x: 0,
    y: 0,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.15;
    const y = (clientY - top - height / 2) * 0.15;

    setHoverPosition({ x, y, opacity: 1 });
  };

  const onMouseOut = (): void => {
    setHoverPosition({ x: 0, y: 0, opacity: 0 });
  };

  return (
    <button
      type="button"
      ref={buttonRef}
      className="relative h-9"
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseOut}
    >
      <span className="relative z-10 px-4 py-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
        {item.text}
      </span>{" "}
      <div
        className="absolute bottom-0 left-0 h-full w-full rounded-[4px] bg-blue-200 transition-opacity dark:bg-blue-700/20"
        aria-hidden="true"
        style={{
          transform: `translate(${hoverPosition.x as unknown as string}px, ${hoverPosition.y as unknown as string}px)`,
          opacity: hoverPosition.opacity,
        }}
      />
    </button>
  );
}

const tabs = [
  { id: 1, text: "Home" },
  { id: 2, text: "Blog" },
  { id: 3, text: "Projects" },
];

export function MagneticTabDemo(): React.JSX.Element {
  return (
    <div className="flex flex-row ">
      {tabs.map((item) => (
        <MagneticTab key={item.id} item={item} />
      ))}
    </div>
  );
}
