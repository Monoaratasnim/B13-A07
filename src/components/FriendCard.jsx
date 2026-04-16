import Link from "next/link";

export default function FriendCard({ friend }) {
  const statusStyles = {
    "overdue": "bg-red-100 text-red-600 border-red-200",
    "almost due": "bg-orange-100 text-orange-600 border-orange-200",
    "on-track": "bg-green-100 text-green-600 border-green-200",
  };

  return (
    <Link href={`/friend/${friend.id}`} className="w-full">
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all text-center group cursor-pointer">

        {/* IMAGE */}
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-white ring-2 ring-gray-50"
        />

        {/* NAME */}
        <h3 className="font-bold text-gray-900 group-hover:text-black">
          {friend.name}
        </h3>

        {/* DAYS */}
        <p className="text-xs text-gray-400 mt-1">
          {friend.days_since_contact} days ago
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap justify-center gap-1 mt-3">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-gray-50 text-[10px] uppercase font-bold text-gray-500 rounded-full border border-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* STATUS */}
        <div
          className={`mt-4 py-1 px-3 rounded-full text-[11px] font-bold uppercase inline-block border ${
            statusStyles[friend.status] || "bg-gray-100"
          }`}
        >
          {friend.status}
        </div>
      </div>
    </Link>
  );
}