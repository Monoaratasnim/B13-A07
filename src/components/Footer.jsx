"use client";

import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
  <footer className="bg-gradient-to-b from-[#132c26] to-[#0f1f1b] text-white mt-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">

      {/* FULL WIDTH CONTAINER */}
     <div className="w-full px-4 sm:px-6 md:px-8 py-14">

        {/* CENTER ONLY ON LARGE SCREENS */}
          <div className="max-w-6xl mx-auto">

          {/* TOP */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              KeenKeeper
            </h2>

            <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
              Your personal shelf of meaningful connections. Keep your relationships alive and strong.
            </p>

            <p className="mt-6 text-sm font-semibold text-gray-300">
              Social Links
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition cursor-pointer">
              <FaYoutube size={18} />
            </div>

            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition cursor-pointer">
              <FaFacebook size={18} />
            </div>

            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition cursor-pointer">
              <FaTwitter size={18} />
            </div>
          </div>

          {/* BOTTOM */}
          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 text-center md:text-left">

            <p>© 2026 KeenKeeper. All rights reserved.</p>

            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
              <span className="hover:underline cursor-pointer">Terms of Service</span>
              <span className="hover:underline cursor-pointer">Cookies</span>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}