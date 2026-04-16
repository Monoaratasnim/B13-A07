"use client";

import { useEffect, useState } from "react";
import { Phone, MessageSquare, Video } from "lucide-react";

export default function TimelinePage() {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("all"); // ✅ filter state

  // ✅ Load timeline
  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("timeline")) || [];
      setTimeline(data);
    } catch {
      setTimeline([]);
    }
  }, []);

  // ✅ FILTER LOGIC
  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter(
          (item) => item.type?.toLowerCase() === filter
        );

  // ✅ ICON + COLOR
  const getIcon = (type) => {
    const t = type?.toLowerCase();

    if (t === "call") {
      return (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100">
          <Phone size={18} className="text-green-600" />
        </div>
      );
    }

    if (t === "text") {
      return (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
          <MessageSquare size={18} className="text-gray-600" />
        </div>
      );
    }

    if (t === "video") {
      return (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
          <Video size={18} className="text-blue-600" />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto ">

     {/* HEADER */}
<div className="sticky top-10 z-10 py-4 container " >

  <h1 className="text-2xl font-bold text-gray-950 mb-3">
    Timeline
  </h1>

  {/* FILTER BELOW HEADING */}
  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="text-sm border border-gray-200 text-gray-900 rounded-lg px-3 py-2 bg-white shadow-sm focus:outline-none w-full sm:w-auto"
  >
    <option value="all">Filter Timeline</option>
    <option value="call">Call</option>
    <option value="text">Text</option>
    <option value="video">Video</option>
  </select>

</div>

      {/* EMPTY STATE */}
      {filteredTimeline.length === 0 ? (
        <div className="text-center text-gray-500 text-sm mt-20">
          No activity found
        </div>
      ) : (
        <div className="space-y-4">

          {filteredTimeline.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              
              {/* ICON */}
              {getIcon(item.type)}

              {/* CONTENT */}
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">
                  {item.title}
                </p>

                <p className="text-xs text-gray-400">
                  {item.date}
                </p>
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}