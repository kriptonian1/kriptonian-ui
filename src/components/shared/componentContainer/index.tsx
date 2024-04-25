import React from "react";

function ComponentContainer({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <div className="bg-zinc-900 rounded-lg p-4 my-4 border border-zinc-600 flex items-center justify-center min-h-[10rem]">{children}</div>;
}

export default ComponentContainer;
