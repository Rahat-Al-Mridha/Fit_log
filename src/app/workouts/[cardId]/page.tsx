// import { IlibraryCard } from '@/types/libraryCard.type';
// import React from 'react';
// interface ILibraryDetailsPageProps {
//     params : Promise<{
//         id:string;
//     }>; 
// }

// const getLibraryData = async () => {
//     const res = await fetch('https://api.api-store.workers.dev/api/fitlog')
//     return res.json();
// }

// const LibraryDetailsPage = async({params}:ILibraryDetailsPageProps) => {
//     const {cardId}= await params;
//     const libraryCardsData = await getLibraryData();
//     const libraryCard = libraryCardsData.find((libraryCard:IlibraryCard)=> String(libraryCard.id) ===  String(cardId))
//     console.log(libraryCard,"libraryCard")
//     return (
//         <div>
//             Cards Details Page
//         </div>
//     );
// };

// export default LibraryDetailsPage;

import SavedButton from "@/app/components/LibraryDetails/SavedButton";
import TodaysPlanButton from "@/app/components/LibraryDetails/TodaysPlanButton";
import { IlibraryCard } from "@/types/libraryCard.type";
import Image from "next/image";

interface ILibraryDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getLibraryData = async (): Promise<IlibraryCard[]> => {
    const res = await fetch(
        "https://api.api-store.workers.dev/api/fitlog"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch exercise data");
    }

    return res.json();
};

const LibraryDetailsPage = async ({
    params,
}: ILibraryDetailsPageProps) => {
    const { cardId } = await params;
    const libraryCardsData = await getLibraryData();

    const libraryCard = libraryCardsData.find(
        (libraryCard) => String(libraryCard.id) === String(cardId)
    );

    if (!libraryCard) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#0d0f13] text-white">
                <h1 className="text-xl font-bold">Exercise not found!</h1>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#0d0f13] px-5 py-8 text-white sm:px-8 lg:px-12">
            <div className="mx-auto grid max-w-[62rem] grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">

                {/* Exercise Image */}
                <div className="relative h-[450px] overflow-hidden rounded-xl sm:h-[500px]">
                    <Image
                        src={libraryCard.image}
                        alt={libraryCard.name}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                {/* Exercise Information */}
                <div className="flex flex-col gap-5">

                    <div>
                        <h1 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
                            {libraryCard.name}
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-gray-400">
                            {libraryCard.description}
                        </p>

                        {/* Categories */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {libraryCard.category && (
                                <span className="rounded-full bg-[#c8ff00] px-3 py-1 text-xs font-bold text-black">
                                    {libraryCard.category}
                                </span>
                            )}

                            {libraryCard.muscleGroup && (
                                <span className="rounded-full bg-[#c8ff00] px-3 py-1 text-xs font-bold text-black">
                                    {libraryCard.muscleGroup}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Exercise Details */}
                    <div className="overflow-hidden rounded-xl border border-[#252a34] bg-[#151922]">
                        {[
                            ["EQUIPMENT", libraryCard.equipment ?? "N/A"],
                            ["DIFFICULTY", libraryCard.difficulty ?? "Intermediate"],
                            ["SETS", libraryCard.sets ?? "4"],
                            ["REPS", libraryCard.reps ?? "6-8"],
                            ["DURATION", libraryCard.duration ?? "25 min"],
                            ["CALORIES", libraryCard.calories ?? "180 kcal"],
                            ["RATING", libraryCard.rating ?? "4.8"],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="flex min-h-[42px] items-center justify-between gap-4 border-b border-[#252a34] px-4 py-3 last:border-b-0"
                            >
                                <span className="text-[10px] font-bold tracking-wider text-gray-400">
                                    {label}
                                </span>

                                <span className="text-right text-xs text-gray-200">
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Instructions */}
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-wide">
                            Instructions
                        </h2>

                        <ol className="mt-3 list-decimal space-y-3 pl-5 text-xs leading-5 text-gray-300">
                            {(libraryCard.instructions ?? [
                                "Lie on the bench with eyes under the bar and feet planted.",
                                "Unrack with locked elbows and lower the bar to mid-chest.",
                                "Press up in a slight arc until elbows lock without bouncing.",
                                "Keep shoulder blades pinched and a natural arch in the back.",
                            ]).map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                    </section>

                    {/* Action Buttons */}
                    <div className="mt-auto flex flex-wrap gap-3 pt-2">
                       <TodaysPlanButton libraryCard={libraryCard}></TodaysPlanButton>

                        <SavedButton libraryCard={libraryCard} ></SavedButton>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default LibraryDetailsPage;





















