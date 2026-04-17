"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MyLink({ href, children, icon: Icon, onClick }) {
  const pathname = usePathname();

  const active =
    href === "/home"
      ? pathname === "/home" || pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
        active
          ? "bg-[#1a3c34] text-white shadow"
          : "text-gray-600 hover:text-black hover:bg-gray-200"
      }`}
    >
      {Icon && (
        <Icon
          size={18}
          className={active ? "text-white" : "text-gray-500"}
        />
      )}
      <span>{children}</span>
    </Link>
  );
}