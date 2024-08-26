"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-start bg-foreground p-4 pt-28 gap-2 max-sm:hidden lg:w-[264px]">
      {links.map((link) => (
        <Link
          key={link.route}
          href={link.route}
          className={cn(
            "flex gap-4 items-center p-4 rounded-lg justify-start",
            {
              "bg-primary text-white": pathname === link.route,
            }
          )}
        >
          {link.icon(pathname === link.route ? "#FFFFFF" : "#C9DDFF")}
          <p className="text-lg font-semibold max-lg:hidden">{link.label}</p>
        </Link>
      ))}
    </aside>
  );
};
