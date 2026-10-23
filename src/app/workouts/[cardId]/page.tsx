import { IlibraryCard } from '@/types/libraryCard.type';
import React from 'react';
interface ILibraryDetailsPageProps {
    params : Promise<{
        id:string;
    }>; 
}

const getLibraryData = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog')
    return res.json();
}

const LibraryDetailsPage = async({params}:ILibraryDetailsPageProps) => {
    const {cardId}= await params;
    const libraryCardsData = await getLibraryData();
    const libraryCard = libraryCardsData.find((libraryCard:IlibraryCard)=> String(libraryCard.id) ===  String(cardId))
    console.log(libraryCard,"libraryCard")
    return (
        <div>
            Cards Details Page
        </div>
    );
};

export default LibraryDetailsPage;