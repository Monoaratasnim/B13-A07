import MyLink from "./MyLink";

const links = [
  { name: "Home", href: "/" },
  { name: "Timeline", href: "/timeline" },
  { name: "Stats", href: "/stats" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow bg-white">
      
      {/* LOGO LEFT */}
      <div className="font-bold text-xl">
        FriendTracker
      </div>

      {/* MENU RIGHT */}
      <div className="flex gap-6">
        {links.map((link) => (
          <MyLink key={link.href} href={link.href}>
            {link.name}
          </MyLink>
        ))}
      </div>
    </nav>
  );
}