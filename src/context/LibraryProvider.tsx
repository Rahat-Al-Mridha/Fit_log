// 'use client';

// import React, { createContext, ReactNode, useState } from 'react';

// export const LibraryContext =createContext({})

// const LibraryProvider = ({children}:{children: ReactNode}) => {
//     const [todaysPlanLibrary,setTodaysPlanLibrary] = useState([]);
//     const [savedLibrary,setSavedPlanLibrary] = useState([]);
//     const sharedData ={
//         todaysPlanLibrary,
//         setTodaysPlanLibrary,
//         savedLibrary,
//         setSavedPlanLibrary
//     };
//     return (
//         <LibraryContext.Provider value={sharedData}>{children}</LibraryContext.Provider>
//     );
// };

// export default LibraryProvider;









"use client";

import {
    createContext,
    useCallback,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import type { IlibraryCard } from "@/types/libraryCard.type";

type LibraryContextType = {
    todaysPlanLibrary: IlibraryCard[];
    savedLibrary: IlibraryCard[];
    addToTodaysPlan: (exercise: IlibraryCard) => boolean;
    addToSaved: (exercise: IlibraryCard) => boolean;
    removeFromTodaysPlan: (exercise: IlibraryCard) => void;
    removeFromSaved: (exercise: IlibraryCard) => void;
};

export const LibraryContext = createContext<LibraryContextType>({
    todaysPlanLibrary: [],
    savedLibrary: [],
    addToTodaysPlan: () => false,
    addToSaved: () => false,
    removeFromTodaysPlan: () => {},
    removeFromSaved: () => {},
});

function getKey(exercise: IlibraryCard) {
    return String(exercise.id);
}

function removeDuplicates(items: IlibraryCard[]) {
    const unique = new Map<string, IlibraryCard>();

    items.forEach((item) => {
        unique.set(getKey(item), item);
    });

    return Array.from(unique.values());
}

export default function LibraryProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [todaysPlanLibrary, setTodaysPlanLibrary] = useState<
        IlibraryCard[]
    >([]);
    const [savedLibrary, setSavedLibrary] = useState<IlibraryCard[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load saved data once, after the component mounts.
    // useEffect(() => {
    //     try {
    //         const todayData = localStorage.getItem("todaysPlan");
    //         const savedData = localStorage.getItem("savedExercises");

    //         if (todayData) {
    //             setTodaysPlanLibrary(
    //                 removeDuplicates(JSON.parse(todayData) as IlibraryCard[])
    //             );
    //         }

    //         if (savedData) {
    //             setSavedLibrary(
    //                 removeDuplicates(JSON.parse(savedData) as IlibraryCard[])
    //             );
    //         }
    //     } catch {
    //         localStorage.removeItem("todaysPlan");
    //         localStorage.removeItem("savedExercises");
    //     } finally {
    //         setIsLoaded(true);
    //     }
    // }, []);

    // Keep localStorage synchronized with the shared lists.
    useEffect(() => {
        if (!isLoaded) return;

        localStorage.setItem(
            "todaysPlan",
            JSON.stringify(todaysPlanLibrary)
        );
        localStorage.setItem(
            "savedExercises",
            JSON.stringify(savedLibrary)
        );
    }, [todaysPlanLibrary, savedLibrary, isLoaded]);

    const addToTodaysPlan = useCallback((exercise: IlibraryCard) => {
        let added = false;

        setTodaysPlanLibrary((previous) => {
            if (
                previous.some(
                    (item) => getKey(item) === getKey(exercise)
                )
            ) {
                return previous;
            }

            added = true;
            return [...previous, exercise];
        });

        return added;
    }, []);

    const addToSaved = useCallback((exercise: IlibraryCard) => {
        let added = false;

        setSavedLibrary((previous) => {
            if (
                previous.some(
                    (item) => getKey(item) === getKey(exercise)
                )
            ) {
                return previous;
            }

            added = true;
            return [...previous, exercise];
        });

        return added;
    }, []);

    const removeFromTodaysPlan = useCallback((exercise: IlibraryCard) => {
        setTodaysPlanLibrary((previous) =>
            previous.filter(
                (item) => getKey(item) !== getKey(exercise)
            )
        );
    }, []);

    const removeFromSaved = useCallback((exercise: IlibraryCard) => {
        setSavedLibrary((previous) =>
            previous.filter(
                (item) => getKey(item) !== getKey(exercise)
            )
        );
    }, []);

    return (
        <LibraryContext.Provider
            value={{
                todaysPlanLibrary,
                savedLibrary,
                addToTodaysPlan,
                addToSaved,
                removeFromTodaysPlan,
                removeFromSaved,
                setSavedLibrary,
                setTodaysPlanLibrary
            }}
        >
            {children}
        </LibraryContext.Provider>
    );
}
