"use client";

import Link from "next/link";
import clsx from "clsx/lite";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();
  let isActive = href.replace("/", "") === segment;
  if (href === "/") {
    isActive = segment === null;
  }
  return (
    <Link
      href={href}
      className={clsx(
        isActive && "font-semibold",
        "flex items-center gap-3 p-2 rounded-md hover:bg-gray-700"
      )}
    >
      {children}
    </Link>
  );
}
