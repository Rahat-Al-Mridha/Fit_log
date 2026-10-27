'use client';

import { LibraryContext } from '@/context/LibraryProvider';
import { IlibraryCard } from '@/types/libraryCard.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';




const TodaysPlanButton = ({ libraryCard }: { libraryCard: IlibraryCard }) => {

    const { todaysPlanLibrary,
        setTodaysPlanLibrary } = useContext(LibraryContext);

    const handleTodaysPlanButton = () => {
        console.log("todays plan btn")
              const isadded = todaysPlanLibrary.find(i=>i.id===libraryCard.id)
              if (!isadded){
                 setTodaysPlanLibrary([...todaysPlanLibrary, libraryCard]);
                toast.success(`added to today's plan ${libraryCard.name}`)

              }
              else{
                toast.warn("already added")
              }
            //  setTodaysPlanLibrary((prevTodaysPlanLibrary) =>[...todaysPlanLibrary, libraryCard]);
        // setTodaysPlanLibrary([...todaysPlanLibrary, libraryCard]);
        // toast.success(`added to today's plan ${libraryCard.name}`)

    }
    return (
        <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-[#c8ff00] px-4 py-3 text-xs font-bold text-black transition hover:bg-[#b4e600]"
            onClick={() => handleTodaysPlanButton()}
        >
            <span>▣</span>
            Add to today's plan
        </button>
    );
};

export default TodaysPlanButton;







// "use client";

// import { useContext } from "react";
// import { toast } from "react-toastify";
// import { LibraryContext } from "@/context/LibraryProvider";
// import type { IlibraryCard } from "@/types/libraryCard.type";

// export default function TodaysPlanButton({
//     libraryCard,
// }: {
//     libraryCard: IlibraryCard;
// }) {
//     const { todaysPlanLibrary, addToTodaysPlan } =
//         useContext(LibraryContext);

//     const alreadyAdded = todaysPlanLibrary.some(
//         (item) => String(item.id) === String(libraryCard.id)
//     );

//     function handleClick() {
//         if (alreadyAdded) {
//             toast.info("This exercise is already in Today's Plan!");
//             return;
//         }

//         addToTodaysPlan(libraryCard);
//         toast.success("Added to Today's Plan successfully!");
//     }

//     return (
//         <button
//             type="button"
//             onClick={handleClick}
//             className="rounded-full bg-[#c8ff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#d8ff45]"
//         >
//             {alreadyAdded ? "Already in Today's Plan" : "Add to Today's Plan"}
//         </button>
//     );
// }
