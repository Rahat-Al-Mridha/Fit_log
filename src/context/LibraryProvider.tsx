'use client';

import React, { createContext, ReactNode, useState } from 'react';

export const LibraryContext =createContext({})

const LibraryProvider = ({children}:{children: ReactNode}) => {
    const [todaysPlanLibrary,setTodaysPlanLibrary] = useState([]);
    const [savedLibrary,setSavedPlanLibrary] = useState([]);
    const sharedData ={
        todaysPlanLibrary,
        setTodaysPlanLibrary,
        savedLibrary,
        setSavedPlanLibrary
    };
    return (
        <LibraryContext.Provider value={sharedData}>{children}</LibraryContext.Provider>
    );
};

export default LibraryProvider;