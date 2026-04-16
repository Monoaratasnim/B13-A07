"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
   className={`px-4 py-2 rounded-md ${
  isActive
    ? "bg-purple-500 text-white font-semibold"
    : "text-gray-500 hover:bg-gray-100"
}`}
    >
      {children}
    </Link>
  );
};



export default MyLink;