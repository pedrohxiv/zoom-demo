"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const MobileSidebar = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/menu.svg"
          height={36}
          width={36}
          alt="menu"
          className="cursor-pointer sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none bg-foreground w-full max-w-[280px] -ml-2"
      >
        <SheetTitle asChild>
          <Link href="/" className="flex items-center gap-1 ml-6 -mt-2">
            <Image src="/icons/logo.svg" height={32} width={32} alt="logo" />
            <h1 className="text-[26px] font-extrabold text-white">ZOOM</h1>
          </Link>
        </SheetTitle>
        <div className="flex flex-col justify-start h-full gap-2 pt-14">
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
              <p className="text-lg font-semibold">{link.label}</p>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
