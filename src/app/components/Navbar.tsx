'use client'
import React, { useState } from "react";
import logo from "@/assets/logo.png"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  const [isClicked, setIsClicked] = useState(false);
  const [areClicked, setAreClicked] = useState(false);
  return (
    <nav className="w-full border-b border-gray-800 bg-[#0c0d10] text-white">
      <div className="mx-auto container flex h-[75px] items-center justify-between px-6">

        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="navbar logo" />
          <h2 className="text-lg font-extrabold tracking-wide">
            FITLOG
          </h2>
        </div>

        {/* Center: Navigation */}
        <div className="flex items-center gap-2">
          <Link href="/workouts">
            <button
              onClick={() => setIsClicked(!isClicked)}
              className={`rounded-full px-4 py-2 text-xs font-semibold  ${isClicked ? " bg-lime-400/10 text-lime-400" : "text-gray-400"}`}>
              Workouts
            </button>
          </Link>
          <Link href="/myplan">
            <button
              onClick={() => setAreClicked(!areClicked)}
              className={`rounded-full px-4 py-2 text-xs font-semibold  ${areClicked ? " bg-lime-400/10 text-lime-400" : "text-gray-400"}`}>
              My Plan
            </button>
          </Link>
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