import { UserPlus } from "lucide-react";

export default function Banner() {
  return (
    <div className="text-center py-14 bg-gray-50">
      {/* Title */}
      <h1 className="text-4xl font-bold">
        Stay Connected With Friends
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 mt-2">
        Track your friendships and never lose touch
      </p>

      {/* Button */}
      <button className="mt-6 flex items-center gap-2 mx-auto bg-black text-white px-5 py-2 rounded-lg hover:opacity-90">
        <UserPlus size={18} />
        Add a Friend
      </button>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 px-6">
        {[
          { title: "Total Friends", value: 8 },
          { title: "Overdue", value: 3 },
          { title: "Almost Due", value: 2 },
          { title: "On Track", value: 3 },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white shadow rounded-xl p-4"
          >
            <p className="text-gray-500">{item.title}</p>
            <h2 className="text-2xl font-bold">
              {item.value}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}