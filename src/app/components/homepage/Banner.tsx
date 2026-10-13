import Image from 'next/image';
import React from 'react';
import banner from "@/assets/banner.png"

const Banner = () => {
    return (

        <div className="min-h-screen bg-[#0b0c0f] p-5 text-white">
            <div className="mx-auto flex min-h-[420px] max-w-7xl flex-col items-center justify-between gap-8 rounded-2xl border border-[#252830] bg-[#15171c] px-8 py-10 md:flex-row md:px-12 lg:px-14">

                {/* Left Content */}
                <div className="max-w-xl">
                    <p className="mb-5 text-xs font-bold tracking-widest text-[#c6ff00]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="font-oswald mb-4 text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
                        Train with intent. Log every set.
                    </h1>

                    <p className="mb-6 max-w-lg text-sm leading-6 text-gray-400 md:text-base">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today's plan, and watch the week's work add up.
                    </p>

                    <a
                        href="#workouts"
                        className="inline-flex items-center justify-center rounded-md bg-[#c6ff00] px-6 py-3 text-xs font-bold uppercase text-black transition hover:bg-[#b4e600]"
                    >
                        Browse Workouts
                    </a>
                </div>

                {/* Right Image */}
                <div className="flex w-full items-center justify-center md:w-[40%]">
                    <Image src={banner} alt="banner pic"></Image>
                </div>

            </div>
        </div>


    );
};

export default Banner;