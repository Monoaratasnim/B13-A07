"use client";

import MyLink from "./MyLink";
import { Home, Clock, BarChart3 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-[#f0f0f0] sticky top-0 z-50">
      
      {/* LOGO SECTION */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
        <span className="text-xl font-bold tracking-tighter text-[#111111]">
          KeenKeeper
        </span>
      </div>

      {/* NAVIGATION */}
      <div className="flex items-center gap-1 bg-[#f5f5f5] p-1 rounded-2xl border border-[#ebebeb]">
        <MyLink href="/home" icon={Home}>
          Home
        </MyLink>
        <MyLink href="/timeline" icon={Clock}>
          Timeline
        </MyLink>
        <MyLink href="/stats" icon={BarChart3}>
          Stats
        </MyLink>
      </div>
    </nav>
  );
}