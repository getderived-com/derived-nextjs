"use client";

import ThemeToggler from "@/components/theme/toggler";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-auto md:h-screen overflow-y-auto md:overflow-hidden flex flex-col items-center justify-center">
      <div id="nav" className="w-full flex items-center justify-center gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/sign-in" className="">
          Sign In
        </Link>
        <ThemeToggler className="size-10 md:size-14" />
      </div>
    </div>
  );
}
