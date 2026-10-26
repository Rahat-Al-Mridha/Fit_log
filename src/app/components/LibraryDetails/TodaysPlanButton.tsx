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

            //  setTodaysPlanLibrary((prevTodaysPlanLibrary) =>[...todaysPlanLibrary, libraryCard]);
        setTodaysPlanLibrary([...todaysPlanLibrary, libraryCard]);
        toast.success(`added to today's plan ${libraryCard.name}`)

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