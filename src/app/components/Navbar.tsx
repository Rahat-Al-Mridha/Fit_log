import React from "react";
import logo from "@/assets/logo.png"
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-800 bg-[#0c0d10] text-white">
      <div className="mx-auto container flex h-[76px] items-center justify-between px-6">

        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="navbar logo"/>
          <h2 className="text-lg font-extrabold tracking-wide">
            FITLOG
          </h2>
        </div>

        {/* Center: Navigation */}
        <div className="flex items-center gap-2">
          <button className="rounded-full bg-lime-400/10 px-4 py-2 text-xs font-semibold text-lime-400">
            Workouts
          </button>

          <button className="rounded-full px-4 py-2 text-xs text-gray-400 transition hover:text-white">
            My Plan
          </button>
        </div>

        {/* Right: Plan and Saved */}
        <div className="flex items-center gap-6 text-xs">

          <div className="flex items-center gap-2">
            <span className="text-gray-300">Plan</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-[10px] font-bold text-black">
              0
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-400">Saved</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 text-[10px] text-gray-300">
              0
            </span>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;