"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

const links = [
  {
    icon: Icons.home,
    label: "Home",
    route: "/",
  },

  {
    icon: Icons.upcoming,
    label: "Upcoming",
    route: "/upcoming",
  },
  {
    icon: Icons.previous,
    label: "Previous",
    route: "/previous",
  },
  {
    icon: Icons.video,
    label: "Recordings",
    route: "/recordings",
  },
  {
    icon: Icons.plus,
    label: "Personal Room",
    route: "/personal-room",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-start bg-foreground p-4 pt-12 gap-2 lg:w-[264px]">
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
