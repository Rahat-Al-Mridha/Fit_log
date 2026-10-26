'use client';

import { LibraryContext } from '@/context/LibraryProvider';
import { IlibraryCard } from '@/types/libraryCard.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SavedButton = ({ libraryCard }: { libraryCard: IlibraryCard }) => {

    const { savedLibrary,
        addToSaved ,setSavedLibrary} = useContext(LibraryContext);

    const handleSavedButton = () => {
        console.log("todays plan btn")
        const isAdded = savedLibrary.find(item=>item.id===libraryCard.id)
                      if (!isAdded){
                         setSavedLibrary([...savedLibrary, libraryCard]);
                        toast.success(`added to today's plan ${libraryCard.name}`)
        
                      }
                      else{
                        toast.warn("already added")
                      }

        //  setTodaysPlanLibrary((prevTodaysPlanLibrary) =>[...todaysPlanLibrary, libraryCard]);
        // setSavedPlanLibrary([...savedLibrary, libraryCard]);

        // addToSaved(libraryCard)
        // toast.success(`added to Save for later ${libraryCard.name}`)

    }
    return (
        <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-[#c8ff00] px-4 py-3 text-xs font-bold text-black transition hover:bg-[#b4e600]"
            onClick={() => handleSavedButton()}
        >
            <span>▣</span>
            Save for later
        </button>
    );
};

export default SavedButton;







// "use client";

// import { useContext } from "react";
// import { toast } from "react-toastify";
// import { LibraryContext } from "@/context/LibraryProvider";
// import type { IlibraryCard } from "@/types/libraryCard.type";

// export default function SavedButton({
//     libraryCard,
// }: {
//     libraryCard: IlibraryCard;
// }) {
//     const { savedLibrary, addToSaved } = useContext(LibraryContext);

//     const alreadySaved = savedLibrary.some(
//         (item) => String(item.id) === String(libraryCard.id)
//     );

//     function handleClick() {
//         if (alreadySaved) {
//             toast.info("This exercise is already saved!");
//             return;
//         }

//         // addToSaved(libraryCard);
//         toast.success("Exercise saved successfully!");
//     }

//     return (
//         <button
//             type="button"
//             onClick={handleClick}
//             className="rounded-full border border-[#c8ff00] px-5 py-3 text-xs font-bold text-[#c8ff00] transition hover:bg-[#c8ff00] hover:text-black"
//         >
//             {alreadySaved ? "Already Saved" : "Save Exercise"}
//         </button>
//     );
// }
