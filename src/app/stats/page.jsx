"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function StatsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeline =
      JSON.parse(localStorage.getItem("timeline")) || [];

    // ✅ COUNT TYPES
    const counts = {
      call: 0,
      text: 0,
      video: 0,
    };

    timeline.forEach((item) => {
      const type = item.type?.toLowerCase();
      if (counts[type] !== undefined) {
        counts[type]++;
      }
    });

    // ✅ FORMAT FOR CHART
    const chartData = [
      { name: "Call", value: counts.call },
      { name: "Text", value: counts.text },
      { name: "Video", value: counts.video },
    ];

    setData(chartData);
  }, []);

  // ✅ COLORS (FIGMA STYLE)
  const COLORS = ["#22c55e", "#6b7280", "#3b82f6"];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">

      {/* HEADER */}
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Friendship Analytics
      </h1>

      {/* CHART CARD */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">

        <h2 className="text-sm font-semibold text-gray-500 mb-6">
          Interaction Breakdown
        </h2>

        {/* PIE CHART */}
        <div className="w-full h-[300px] sm:h-[350px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={5}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* LEGEND */}
        <div className="flex justify-center gap-6 mt-6 text-sm">
          <LegendItem color="bg-green-500" label="Call" />
          <LegendItem color="bg-gray-500" label="Text" />
          <LegendItem color="bg-blue-500" label="Video" />
        </div>

      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

        {data.map((item) => (
          <div
            key={item.name}
            className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm"
          >
            <p className="text-sm text-gray-500 font-medium">
              {item.name}
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              {item.value}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

/* ===== LEGEND COMPONENT ===== */
function LegendItem({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${color}`}></span>
      <span className="text-gray-600">{label}</span>
    </div>
  );
}