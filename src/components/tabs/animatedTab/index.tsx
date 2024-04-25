"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/util/cn";

interface AnimatedTabProps {
  tabs: { id: string; label: string }[];
}

function AnimatedTab({ tabs }: AnimatedTabProps): React.JSX.Element {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
          }}
          className={cn(
            activeTab === tab.id ? "" : "hover:text-white/60",
            "relative rounded-full px-3 py-1.5 text-sm font-medium text-white transition focus-visible:outline-2",
          )}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export function AnimatedTabDemo(): React.JSX.Element {
  const tabsData = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "blogs", label: "Blogs" },
    { id: "carrer", label: "Carrer" },
    { id: "docs", label: "Documentation" },
  ];

  return (
    <div>
      <AnimatedTab tabs={tabsData} />
    </div>
  );
}
