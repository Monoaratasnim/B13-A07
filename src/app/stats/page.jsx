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


    const chartData = [
      { name: "Call", value: counts.call },
      { name: "Text", value: counts.text },
      { name: "Video", value: counts.video },
    ];

    setData(chartData);
  }, []);


  const COLORS = ["#22c55e", "#6b7280", "#3b82f6"];

  return (
    <div className="min-h-screen pt-3 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">

   
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Friendship Analytics
      </h1>

     
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">

        <h2 className="text-sm font-semibold text-gray-500 mb-4">
          Interaction Breakdown
        </h2>

        {/* PIE CHART */}
        <div className="w-full h-75 sm:h-87.5">
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

    </div>
  );
}

function LegendItem({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${color}`}></span>
      <span className="text-gray-600">{label}</span>
    </div>
  );
}