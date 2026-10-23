import React from 'react';
import { Clock, Flame, Star } from "lucide-react";
import Image from 'next/image';
import { IlibraryCard } from '@/types/libraryCard.type';
import Link from 'next/link';

interface IlibraryCardprops {
    data: IlibraryCard
}

const LibraryCard = ({ data }: IlibraryCardprops) => {
    return (

        <Link href={`/workouts/${data.id}` }>
            <div className="w-full max-w-[480px] overflow-hidden rounded-[22px] border border-[#252932] bg-[#15171c] text-white shadow-lg">


                {/* Exercise Image */}
                <div className="h-[230px] w-full overflow-hidden">
                    <Image
                        src={data.image}
                        alt={data.name}
                        width={600}
                        height={800}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Card Content */}
                <div className="p-[30px]">
                    {/* Categories */}
                    <div className="mb-5 flex flex-wrap gap-2.5">
                        <span className="rounded-full bg-[#c6ff00] px-3.5 py-1 text-sm font-bold text-black">
                            CHEST
                        </span>

                        <span className="rounded-full bg-[#c6ff00] px-3.5 py-1 text-sm font-bold text-black">
                            ARMS
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-[23px] font-extrabold uppercase leading-tight tracking-wide">
                        Barbell Bench Press
                    </h2>

                    <p className="mt-1.5 text-sm text-gray-400">
                        Barbell, Bench
                    </p>

                    {/* Divider */}
                    <div className="my-5 border-t border-[#252932]" />

                    {/* Workout Information */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Clock size={17} />
                            <span>25 min</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Flame size={17} fill="currentColor" />
                            <span>180 kcal</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Star size={18} />
                            <span>4.8</span>
                        </div>
                    </div>
                </div>

            </div>
        </Link>

    )
}

export default LibraryCard;