import { UserPlus } from "lucide-react";

export default function Banner({ friends = [] }) {
  // Logic remains the same, but we update the titles to match the screenshot labels
  const stats = [
    {
      title: "Total Friends",
      value: friends.length,
    },
    {
      title: "On Track",
      value: friends.filter((f) => f.status === "on-track").length,
    },
    {
      title: "Need Attention", // Renamed to match Figma better
      value: friends.filter((f) => f.status !== "on-track").length,
    },
    {
      title: "Interactions", // Matches the "12" in the screenshot
      value: 12, 
    },
  ];

  return (
    <div className="text-center pt-20 pb-12 bg-[#f9fafb] px-4 border-b border-gray-100">
      {/* TITLE - Using tracking-tighter for that high-end look */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900">
        Friends to keep close in your life
      </h1>

      {/* SUBTITLE */}
      <p className="text-gray-500 mt-4 max-w-md mx-auto text-sm leading-relaxed">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      {/* BUTTON - Color matched to the dark green brand color */}
      <button className="mt-8 flex items-center gap-2 mx-auto bg-[#1a3c34] text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition-all shadow-lg shadow-emerald-900/10">
        <UserPlus size={18} />
        Add a Friend
      </button>

      {/* SUMMARY CARDS - Grid spacing and card styling updated */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Value first, then label - following typical Dashboard hierarchy */}
            <h2 className="text-3xl font-black tracking-tighter text-gray-900">
              {item.value}
            </h2>
            <p className="text-[#999999] text-[10px] font-bold uppercase tracking-widest mt-1">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}