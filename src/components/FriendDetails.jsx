"use client";

import toast from "react-hot-toast";
import {
  Phone,
  MessageSquare,
  Video,
  Clock,
  Edit3,
  Archive,
  Trash2
} from "lucide-react";

export default function FriendDetails({ friend }) {

  const handleCheckIn = (type) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      type,
      title: `${type} with ${friend.name}`,
    };

    const existing =
      JSON.parse(localStorage.getItem("timeline")) || [];

    localStorage.setItem(
      "timeline",
      JSON.stringify([newEntry, ...existing])
    );

    toast.success(`${type} with ${friend.name} recorded!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 grid grid-cols-1 md:grid-cols-12 gap-6">

      <div className="md:col-span-4">
        <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 text-center shadow-sm">

          <img
            src={friend.picture}
            alt={friend.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover border-4 border-gray-50 shadow-sm"
          />

          <h1 className="text-lg sm:text-xl font-bold mt-4 text-gray-900">
            {friend.name}
          </h1>

          <span
            className={`text-xs font-bold px-3 py-1 rounded-full inline-block mt-2 border ${
              friend.status === "overdue"
                ? "bg-red-50 text-red-600 border-red-100"
                : friend.status === "almost due"
                ? "bg-orange-50 text-orange-600 border-orange-100"
                : "bg-green-50 text-green-600 border-green-100"
            }`}
          >
            {friend.status}
          </span>

          <p className="text-gray-400 text-xs sm:text-sm mt-2 break-all">
            {friend.email}
          </p>

          <p className="text-gray-600 italic text-sm mt-4">
            "{friend.bio}"
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {friend.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-[10px] uppercase font-bold bg-gray-50 text-gray-500 rounded-full border border-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-6">

            <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-950 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
              <Clock size={16} /> Snooze
            </button>

            <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-950 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
              <Archive size={16} /> Archive
            </button>

            <button className="w-full py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
              <Trash2 size={16} /> Delete
            </button>

          </div>
        </div>
      </div>

      <div className="md:col-span-8 space-y-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <StatCard label="Days Since Contact" value={friend.days_since_contact} />
          <StatCard label="Goal (Days)" value={friend.goal} />
          <StatCard label="Next Due" value={friend.next_due_date} />
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 shadow-sm">
          <div>
            <p className="text-sm text-gray-500 font-medium">
              Relationship Goal
            </p>
            <p className="text-base sm:text-lg font-bold text-gray-900">
              Connect every {friend.goal} days
            </p>
          </div>

          <button className="self-start sm:self-auto p-2 bg-gray-50 rounded-lg border border-gray-100 text-gray-400 hover:text-black">
            <Edit3 size={18} />
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
          <p className="text-sm text-gray-500 font-medium mb-4">
            Quick Check-In
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

            <CheckInBtn
              icon={<Phone size={20} />}
              label="Call"
              onClick={() => handleCheckIn("Call")}
            />

            <CheckInBtn
              icon={<MessageSquare size={20} />}
              label="Text"
              onClick={() => handleCheckIn("Text")}
            />

            <CheckInBtn
              icon={<Video size={20} />}
              label="Video"
              onClick={() => handleCheckIn("Video")}
            />

          </div>
        </div>

      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 text-center shadow-sm">
      <p className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-gray-400 mb-2">
        {label}
      </p>
      <p className="text-xl sm:text-2xl font-bold text-gray-900">
        {value}
      </p>
    </div>
  );
}

function CheckInBtn({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-3 sm:p-4 border border-gray-300 rounded-xl hover:bg-gray-200 transition-all group"
    >
      <span className="text-gray-400 group-hover:text-black">
        {icon}
      </span>

      <span className="text-[10px] sm:text-xs font-bold text-gray-500 group-hover:text-black uppercase">
        {label}
      </span>
    </button>
  );
}