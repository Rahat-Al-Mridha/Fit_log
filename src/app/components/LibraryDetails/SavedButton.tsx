'use client';

import { LibraryContext } from '@/context/LibraryProvider';
import { IlibraryCard } from '@/types/libraryCard.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SavedButton = ({ libraryCard }: { libraryCard: IlibraryCard }) => {

    const { savedLibrary,
        setSavedPlanLibrary} = useContext(LibraryContext);

    const handleSavedButton = () => {
        console.log("todays plan btn")

        //  setTodaysPlanLibrary((prevTodaysPlanLibrary) =>[...todaysPlanLibrary, libraryCard]);
        setSavedPlanLibrary([...savedLibrary, libraryCard]);
        toast.success(`added to Save for later ${libraryCard.name}`)

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