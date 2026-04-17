"use client";

import { useState } from "react";
import MyLink from "./MyLink";
import { Home, Clock, BarChart3, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-bold tracking-tight">
           <span className="text-[#1F2937]"> Keen</span><span className="text-[#244D3F]">Keeper</span>
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden sm:flex items-center gap-1 bg-gray-100 p-1 rounded-2xl border">
          <MyLink href="/home" icon={Home}>Home</MyLink>
          <MyLink href="/timeline" icon={Clock}>Timeline</MyLink>
          <MyLink href="/stats" icon={BarChart3}>Stats</MyLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 rounded-lg border border-gray-200 text-[#244D3F]"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`sm:hidden transition-all duration-300 overflow-hidden  ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 ">
          <div className="flex flex-col gap-2 bg-gray-100  p-2 rounded-xl border border-[#244D3F]">

            <MyLink href="/home" icon={Home} onClick={() => setOpen(false)}>
              Home
            </MyLink>

            <MyLink href="/timeline" icon={Clock} onClick={() => setOpen(false)}>
              Timeline
            </MyLink>

            <MyLink href="/stats" icon={BarChart3} onClick={() => setOpen(false)}>
              Stats
            </MyLink>

          </div>
        </div>
      </div>

    </nav>
  );
}