"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed z-50 w-full bg-foreground px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          height={32}
          width={32}
          alt="logo"
          className="max-sm:size-10"
        />
        <h1 className="text-[26px] font-extrabold text-white max-sm:hidden">
          ZOOM
        </h1>
      </Link>
      <div className="flex justify-between items-center gap-5">
        <UserButton afterSwitchSessionUrl="/sign-in" />
        <MobileSidebar />
      </div>
    </nav>
  );
};
