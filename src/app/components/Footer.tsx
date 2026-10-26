import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png"
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800 bg-[#090a0d]">
      <div className="container mx-auto max-w-[65rem] flex p-4  min-h-[76px] items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="navbar logo"/>
          <span className="text-xs font-extrabold tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-[10px] text-gray-500 sm:text-xs">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;