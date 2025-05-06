"use client";

import { useSelectedLayoutSegment } from "next/navigation";

const pageNameMap: { [key: string]: string } = {
  "": "Overview",
  settings: "Settings",
};
export const PageName = () => {
  const segment = useSelectedLayoutSegment() as string;
  const pageName = pageNameMap[segment ?? ""];
  return <h1 className="text-3xl font-semibold">{pageName}</h1>;
};
