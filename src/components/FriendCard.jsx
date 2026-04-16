import Link from "next/link";
import Image from "next/image";

export default function FriendCard({ friend }) {
  const statusStyle =
    friend.status === "overdue"
      ? "bg-red-100 text-red-700"
      : friend.status === "almost due"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg hover:scale-105 transition duration-300">

        {/* IMAGE */}
        <div className="flex justify-center">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>

        {/* NAME */}
        <h2 className="text-center font-semibold mt-3">
          {friend.name}
        </h2>

        {/* EMAIL */}
        <p className="text-center text-xs text-gray-500">
          {friend.email}
        </p>

        {/* DAYS SINCE CONTACT */}
        <p className="text-center text-sm mt-1">
          {friend.days_since_contact} days since contact
        </p>

        {/* TAGS */}
        <div className="flex justify-center flex-wrap gap-2 mt-3">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-200 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* STATUS */}
        <div className="flex justify-center mt-3">
          <span className={`text-xs px-3 py-1 rounded-full ${statusStyle}`}>
            {friend.status}
          </span>
        </div>

      </div>
    </Link>
  );
}