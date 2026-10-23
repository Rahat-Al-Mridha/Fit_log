'use client';

import { LibraryContext } from '@/context/LibraryProvider';
import React, { useContext } from 'react';

const MyPlanPage = () => {
    const { todaysPlanLibrary,savedLibrary} = useContext(LibraryContext);
    console.log(todaysPlanLibrary,savedLibrary,"todaysPlanLibrary" ,"savedLibrary")
    return (
        <div>
            saved card:{savedLibrary.length}
            todays plan:{todaysPlanLibrary.length}
        </div>
    );
};

export default MyPlanPage;