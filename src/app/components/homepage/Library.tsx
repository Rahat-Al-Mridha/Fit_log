import React from 'react';
import LibraryCard from '../LibraryCard';
import { IlibraryCard } from '@/types/libraryCard.type';

const getLibraryData = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog')
    return res.json();
}

const Library = async () => {

    const libraryData = await getLibraryData();
    console.log(libraryData, "library data")

    return (
        <div className='w-full border-b border-gray-800 bg-[#0c0d10] text-white'>
            <div className='mx-auto container'>
                <h1 className="font-oswald mb-2 text-4xl font-black uppercase leading-[0.95] tracking-tight"> THE LIBRARY</h1>
                <p className='mb-4'>Twelve lifts covering every major muscle group.</p>
                <div className='grid grid-cols-3 gap-2'>
                    {
                        libraryData.map((data : IlibraryCard, id:number) => {
                            return <LibraryCard key={id} data={data}></LibraryCard>
                        })
                    }
                </div >
            </div>
        </div>);
};

export default Library;
