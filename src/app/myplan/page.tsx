// 'use client';

// import { LibraryContext } from '@/context/LibraryProvider';
// import { IlibraryCard } from '@/types/libraryCard.type';
// import React, { useContext, useState } from 'react';
// import LibraryCard from '../components/LibraryCard';

// const MyPlanPage = () => {
//     const [activeTab, setActiveTab] = useState("Saved");
//      const [sortBy, setSortBy] = useState("Duration");
//     const { todaysPlanLibrary, savedLibrary } = useContext(LibraryContext);
//     console.log(todaysPlanLibrary, savedLibrary, "todaysPlanLibrary", "savedLibrary")
//     return (
//         <main className="min-h-screen bg-[#0e0f12] px-5 py-4 text-white sm:px-9">
//             <div className="container mx-auto max-w-[61rem]">
//                 <header className="mb-5">
//                     <h1 className="text-2xl font-extrabold tracking-tight">
//                         MY PLAN
//                     </h1>
//                     <p className="mt-1 text-xs text-gray-500">
//                         Cap of five lifts for today. Finish them, then load more.
//                     </p>
//                 </header>
//                 <section className="grid grid-cols-1 gap-4 rounded-xl border border-[#242730] bg-[#13161c] p-5 sm:grid-cols-3 sm:gap-0">
//                     <div className="border-b border-[#242730] pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
//                         <p className="text-[10px] text-gray-500">Exercises</p>
//                         <h2 className="mt-1 text-3xl font-extrabold text-[#c5ff00]">
//                             0
//                         </h2>
//                     </div>

//                     <div className="border-b border-[#242730] pb-4 sm:border-b-0 sm:border-r sm:px-6 sm:pb-0">
//                         <p className="text-[10px] text-gray-500">Minutes</p>
//                         <h2 className="mt-1 text-3xl font-extrabold">0</h2>
//                     </div>

//                     <div className="sm:pl-6">
//                         <p className="text-[10px] text-gray-500">Calories</p>
//                         <h2 className="mt-1 text-3xl font-extrabold">0</h2>
//                     </div>
//                 </section>
//                 <section className="mt-6 flex flex-wrap items-center justify-between gap-4">
//                     <div className="flex rounded-xl border border-[#242730] bg-[#151820] p-1">
//                         {[todaysPlanLibrary,savedLibrary].map((libraryCard:IlibraryCard) => {
//                            return <LibraryCard key={LibraryCard.id} libraryCard ={libraryCard}></LibraryCard>
//                         })}
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <label
//                             htmlFor="sort"
//                             className="text-[10px] text-gray-500"
//                         >
//                             Sort By
//                         </label>

//                         <select
//                             id="sort"
//                             value={sortBy}
//                             onChange={(e) => setSortBy(e.target.value)}
//                             className="rounded-lg border border-[#292d37] bg-[#13161c] px-3 py-2 text-[10px] outline-none focus:border-[#c5ff00]"
//                         >
//                             <option>Duration</option>
//                             <option>Name</option>
//                             <option>Calories</option>
//                         </select>
//                     </div>
//                 </section>
//             </div>
//         </main >
//     );
// };

// export default MyPlanPage;







// "use client";

// import { LibraryContext } from "@/context/LibraryProvider";
// import { useContext, useState } from "react";

// export default function MyPlan() {
//     const [activeTab, setActiveTab] = useState("Saved");
//     // console.log(activeTab,"home")
//     const [sortBy, setSortBy] = useState("Duration");
//     console.log(sortBy)
//     const { todaysPlanLibrary, savedLibrary } = useContext(LibraryContext);

//     return (
//         <main className="min-h-screen bg-[#0e0f12] px-5 py-4 text-white sm:px-9">
//             <div className="mx-auto max-w-6xl">
//                 {/* Header */}
//                 <header className="mb-5">
//                     <h1 className="text-2xl font-extrabold tracking-tight">
//                         MY PLAN
//                     </h1>
//                     <p className="mt-1 text-xs text-gray-500">
//                         Cap of five lifts for today. Finish them, then load more.
//                     </p>
//                 </header>

//                 {/* Statistics */}
//                 <section className="grid grid-cols-1 gap-4 rounded-xl border border-[#242730] bg-[#13161c] p-5 sm:grid-cols-3 sm:gap-0">
//                     <div className="border-b border-[#242730] pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
//                         <p className="text-[10px] text-gray-500">Exercises</p>
//                         <h2 className="mt-1 text-3xl font-extrabold text-[#c5ff00]">
//                             2
//                         </h2>
//                     </div>

//                     <div className="border-b border-[#242730] pb-4 sm:border-b-0 sm:border-r sm:px-6 sm:pb-0">
//                         <p className="text-[10px] text-gray-500">Minutes</p>
//                         <h2 className="mt-1 text-3xl font-extrabold">23</h2>
//                     </div>

//                     <div className="sm:pl-6">
//                         <p className="text-[10px] text-gray-500">Calories</p>
//                         <h2 className="mt-1 text-3xl font-extrabold">190</h2>
//                     </div>
//                 </section>

//                 {/* Tabs and Sorting */}
//                 <section className="mt-6 flex flex-wrap items-center justify-between gap-4">
//                     <div className="flex rounded-xl border border-[#242730] bg-[#151820] p-1">
//                         {["Today's Plan", "Saved"].map((tab) => (
//                             <button
//                                 key={tab}
//                                 onClick={() => setActiveTab(tab)}
//                                 className={`rounded-lg px-4 py-2 text-[10px] transition ${activeTab === tab
//                                         ? "bg-[#252a34] font-semibold text-white"
//                                         : "text-gray-500 hover:text-white"
//                                     }`}
//                             >
//                                 {tab}
//                             </button>
//                         ))}
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <label
//                             htmlFor="sort"
//                             className="text-[10px] text-gray-500"
//                         >
//                             Sort By
//                         </label>

//                         <select
//                             id="sort"
//                             value={sortBy}
//                             onChange={(e) => setSortBy(e.target.value)}
//                             className="rounded-lg border border-[#292d37] bg-[#13161c] px-3 py-2 text-[10px] outline-none focus:border-[#c5ff00]"
//                         >
//                             <option>Duration</option>
//                             <option>Rating</option>
//                             <option>Calories</option>
//                         </select>
//                     </div>
//                 </section>

//                 {/* Empty State */}
//                 <section className="mt-5 flex min-h-[230px] flex-col items-center justify-center rounded-xl border border-dashed border-[#292c34] px-4 py-10 text-center sm:min-h-[230px]">
//                     <h2 className="text-base font-extrabold tracking-wide">
//                         NOTHING HERE YET
//                     </h2>

//                     <p className="mt-1 text-[10px] text-gray-500">
//                         Browse the library and add a lift to get today moving.
//                     </p>

//                     <button
//                         onClick={() => {
//                             window.location.href = "/workouts";
//                         }}
//                         className="mt-5 rounded-full bg-[#c5ff00] px-5 py-2 text-[10px] font-bold text-black shadow-[0_0_18px_rgba(197,255,0,0.12)] transition hover:bg-[#d5ff45] active:scale-95"
//                     >
//                         Go to workouts
//                     </button>
//                 </section>
//             </div>
//         </main>
//     );
// }















// "use client";

// import { LibraryContext } from "@/context/LibraryProvider";
// import { useContext, useMemo, useState } from "react";

// type Exercise = {
//     id?: string | number;
//     _id?: string | number;
//     name?: string;
//     title?: string;
//     image?: string;
//     imageUrl?: string;
//     equipment?: string;
//     category?: string;
//     duration?: number;
//     minutes?: number;
//     calories?: number;
//     rating?: number;
//     [key: string]: unknown;
// };

// export default function MyPlan() {
//     const [activeTab, setActiveTab] = useState("Today's Plan");
//     const [sortBy, setSortBy] = useState("Duration");

//     const { todaysPlanLibrary, savedLibrary } =
//         useContext(LibraryContext);

//     // Select the correct list according to the active tab
//     const currentLibrary = (
//         activeTab === "Today's Plan"
//             ? todaysPlanLibrary
//             : savedLibrary
//     ) as Exercise[];

//     // Sort the selected list
//     const sortedExercises = useMemo(() => {
//         const exercises = [...(currentLibrary ?? [])];

//         exercises.sort((a, b) => {
//             if (sortBy === "Duration") {
//                 return (
//                     Number(a.duration ?? a.minutes ?? 0) -
//                     Number(b.duration ?? b.minutes ?? 0)
//                 );
//             }

//             if (sortBy === "Rating") {
//                 return (
//                     Number(b.rating ?? 0) -
//                     Number(a.rating ?? 0)
//                 );
//             }

//             if (sortBy === "Calories") {
//                 return (
//                     Number(b.calories ?? 0) -
//                     Number(a.calories ?? 0)
//                 );
//             }

//             return 0;
//         });

//         return exercises;
//     }, [currentLibrary, sortBy]);

//     // Statistics for the selected tab
//     const totalExercises = sortedExercises.length;

//     const totalMinutes = sortedExercises.reduce(
//         (total, exercise) =>
//             total + Number(exercise.duration ?? exercise.minutes ?? 0),
//         0
//     );

//     const totalCalories = sortedExercises.reduce(
//         (total, exercise) =>
//             total + Number(exercise.calories ?? 0),
//         0
//     );

//     return (
//         <main className="min-h-screen bg-[#0e0f12] px-5 py-4 text-white sm:px-9">
//             <div className="mx-auto max-w-6xl">

//                 {/* Header */}
//                 <header className="mb-5">
//                     <h1 className="text-2xl font-extrabold tracking-tight">
//                         MY PLAN
//                     </h1>

//                     <p className="mt-1 text-xs text-gray-500">
//                         Cap of five lifts for today. Finish them, then load more.
//                     </p>
//                 </header>

//                 {/* Statistics */}
//                 <section className="grid grid-cols-1 gap-4 rounded-xl border border-[#242730] bg-[#13161c] p-5 sm:grid-cols-3 sm:gap-0">

//                     <div className="border-b border-[#242730] pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
//                         <p className="text-[10px] text-gray-500">
//                             Exercises
//                         </p>
//                         <h2 className="mt-1 text-3xl font-extrabold text-[#c5ff00]">
//                             {totalExercises}
//                         </h2>
//                     </div>

//                     <div className="border-b border-[#242730] pb-4 sm:border-b-0 sm:border-r sm:px-6 sm:pb-0">
//                         <p className="text-[10px] text-gray-500">
//                             Minutes
//                         </p>
//                         <h2 className="mt-1 text-3xl font-extrabold">
//                             {totalMinutes}
//                         </h2>
//                     </div>

//                     <div className="sm:pl-6">
//                         <p className="text-[10px] text-gray-500">
//                             Calories
//                         </p>
//                         <h2 className="mt-1 text-3xl font-extrabold">
//                             {totalCalories}
//                         </h2>
//                     </div>
//                 </section>

//                 {/* Tabs and Sorting */}
//                 <section className="mt-6 flex flex-wrap items-center justify-between gap-4">

//                     <div className="flex rounded-xl border border-[#242730] bg-[#151820] p-1">
//                         {["Today's Plan", "Saved"].map((tab) => (
//                             <button
//                                 key={tab}
//                                 onClick={() => setActiveTab(tab)}
//                                 className={`rounded-lg px-4 py-2 text-[10px] transition ${
//                                     activeTab === tab
//                                         ? "bg-[#252a34] font-semibold text-white"
//                                         : "text-gray-500 hover:text-white"
//                                 }`}
//                             >
//                                 {tab}
//                             </button>
//                         ))}
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <label
//                             htmlFor="sort"
//                             className="text-[10px] text-gray-500"
//                         >
//                             Sort By
//                         </label>

//                         <select
//                             id="sort"
//                             value={sortBy}
//                             onChange={(e) => setSortBy(e.target.value)}
//                             className="rounded-lg border border-[#292d37] bg-[#13161c] px-3 py-2 text-[10px] outline-none focus:border-[#c5ff00]"
//                         >
//                             <option>Duration</option>
//                             <option>Rating</option>
//                             <option>Calories</option>
//                         </select>
//                     </div>
//                 </section>

//                 {/* Exercise Cards or Empty State */}
//                 <section className="mt-5 space-y-3">

//                     {sortedExercises.length > 0 ? (
//                         sortedExercises.map((exercise, index) => (
//                             <article
//                                 key={exercise.id ?? exercise._id ?? index}
//                                 className="flex flex-col gap-4 rounded-xl border border-[#242730] bg-[#13161c] p-3 sm:flex-row sm:items-center sm:justify-between"
//                             >
//                                 {/* Image and Exercise Details */}
//                                 <div className="flex min-w-0 items-center gap-3">

//                                     <div className="h-16 w-28 shrink-0 overflow-hidden rounded-lg bg-[#20242d]">
//                                         <img
//                                             src={
//                                                 exercise.image ??
//                                                 exercise.imageUrl ??
//                                                 "/placeholder.png"
//                                             }
//                                             alt={exercise.name ?? exercise.title ?? "Exercise"}
//                                             className="h-full w-full object-cover"
//                                         />
//                                     </div>

//                                     <div className="min-w-0">
//                                         <h2 className="text-xs font-extrabold uppercase">
//                                             {exercise.name ?? exercise.title ?? "Untitled Exercise"}
//                                         </h2>

//                                         <p className="mt-1 text-[10px] text-gray-500">
//                                             {exercise.equipment ?? exercise.category ?? "Exercise"}
//                                         </p>

//                                         <div className="mt-1 flex flex-wrap items-center gap-3 text-[10px] text-gray-300">
//                                             <span className="flex items-center gap-1">
//                                                 <span className="text-[#c5ff00]">◷</span>
//                                                 {Number(exercise.duration ?? exercise.minutes ?? 0)} min
//                                             </span>

//                                             <span className="flex items-center gap-1">
//                                                 <span className="text-[#c5ff00]">🔥</span>
//                                                 {Number(exercise.calories ?? 0)} kcal
//                                             </span>

//                                             <span className="flex items-center gap-1">
//                                                 <span className="text-[#c5ff00]">☆</span>
//                                                 {Number(exercise.rating ?? 0).toFixed(1)}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Card Actions */}
//                                 <div className="flex shrink-0 items-center gap-2">
//                                     <button
//                                         onClick={() =>
//                                             window.location.href =
//                                                 `/workouts/${exercise.id ?? exercise._id}`
//                                         }
//                                         className="rounded-full border border-[#303541] px-4 py-2 text-[10px] transition hover:bg-[#252a34]"
//                                     >
//                                         View Details
//                                     </button>

//                                     {activeTab === "Today's Plan" && (
//                                         <button
//                                             className="rounded-full bg-[#c5ff00] px-3 py-2 text-[10px] font-bold text-black transition hover:bg-[#d5ff45]"
//                                             onClick={() =>
//                                                 alert("Connect this button to your completed-exercises context action.")
//                                             }
//                                         >
//                                             ✓ Mark as Done
//                                         </button>
//                                     )}

//                                     <button
//                                         title="Remove exercise"
//                                         onClick={() =>
//                                             alert("Connect this button to your remove-exercise context action.")
//                                         }
//                                         className="px-1 text-gray-500 transition hover:text-white"
//                                     >
//                                         ×
//                                     </button>
//                                 </div>
//                             </article>
//                         ))
//                     ) : (
//                         <div className="flex min-h-[230px] flex-col items-center justify-center rounded-xl border border-dashed border-[#292c34] px-4 py-10 text-center">
//                             <h2 className="text-base font-extrabold tracking-wide">
//                                 NOTHING HERE YET
//                             </h2>

//                             <p className="mt-1 text-[10px] text-gray-500">
//                                 {activeTab === "Today's Plan"
//                                     ? "Add an exercise from the library to get started."
//                                     : "Save an exercise to see it here."}
//                             </p>

//                             <button
//                                 onClick={() => {
//                                     window.location.href = "/workouts";
//                                 }}
//                                 className="mt-5 rounded-full bg-[#c5ff00] px-5 py-2 text-[10px] font-bold text-black transition hover:bg-[#d5ff45] active:scale-95"
//                             >
//                                 Go to workouts
//                             </button>
//                         </div>
//                     )}
//                 </section>
//             </div>
//         </main>
//     );
// }


















// "use client";

// import { LibraryContext } from "@/context/LibraryProvider";
// import { useContext, useEffect, useMemo, useState } from "react";
// import { toast } from "react-toastify";

// type Exercise = {
//     id?: string | number;
//     _id?: string | number;
//     name?: string;
//     title?: string;
//     image?: string;
//     imageUrl?: string;
//     equipment?: string;
//     category?: string;
//     duration?: number | string;
//     minutes?: number | string;
//     calories?: number | string;
//     kcal?: number | string;
//     caloriesBurned?: number | string;
//     estimatedCalories?: number | string;
//     rating?: number | string;
//     [key: string]: unknown;
// };

// function getCalories(exercise: Exercise): number {
//     const value =
//         exercise.calories ??
//         exercise.kcal ??
//         exercise.caloriesBurned ??
//         exercise.estimatedCalories;

//     return Number(value) || 0;
// }

// function getDuration(exercise: Exercise): number {
//     return Number(exercise.duration ?? exercise.minutes ?? 0) || 0;
// }

// function getExerciseKey(exercise: Exercise) {
//     return exercise.id ?? exercise._id ?? exercise.name ?? exercise.title;
// }

// export default function MyPlan() {
//     const [activeTab, setActiveTab] = useState("Today's Plan");
//     const [sortBy, setSortBy] = useState("Duration");

//     const { todaysPlanLibrary, savedLibrary } =
//         useContext(LibraryContext);

//     const [todayExercises, setTodayExercises] = useState<Exercise[]>([]);
//     const [savedExercises, setSavedExercises] = useState<Exercise[]>([]);

//     // Keep local lists synchronized with context data
//     useEffect(() => {
//         setTodayExercises([...(todaysPlanLibrary ?? [])] as Exercise[]);
//     }, [todaysPlanLibrary]);

//     useEffect(() => {
//         setSavedExercises([...(savedLibrary ?? [])] as Exercise[]);
//     }, [savedLibrary]);

//     const currentLibrary =
//         activeTab === "Today's Plan"
//             ? todayExercises
//             : savedExercises;

//     // Remove a card from the currently selected list
//     function handleRemove(exercise: Exercise) {
//         const exerciseKey = getExerciseKey(exercise);

//         if (activeTab === "Today's Plan") {
//             setTodayExercises((previous) =>
//                 previous.filter(
//                     (item) => getExerciseKey(item) !== exerciseKey
//                 )
//             );
//         } else {
//             setSavedExercises((previous) =>
//                 previous.filter(
//                     (item) => getExerciseKey(item) !== exerciseKey
//                 )
//             );
//         }
//        toast.success("Exercise removed successfully!");
//     }

//     // Sort cards
//     const sortedExercises = useMemo(() => {
//         const exercises = [...currentLibrary];

//         exercises.sort((a, b) => {
//             if (sortBy === "Duration") {
//                 return getDuration(a) - getDuration(b);
//             }

//             if (sortBy === "Rating") {
//                 return Number(b.rating ?? 0) - Number(a.rating ?? 0);
//             }

//             if (sortBy === "Calories") {
//                 return getCalories(b) - getCalories(a);
//             }

//             return 0;
//         });

//         return exercises;
//     }, [currentLibrary, sortBy]);

//     const totalExercises = sortedExercises.length;

//     const totalMinutes = sortedExercises.reduce(
//         (total, exercise) => total + getDuration(exercise),
//         0
//     );

//     const totalCalories = sortedExercises.reduce(
//         (total, exercise) => total + getCalories(exercise),
//         0
//     );

//     return (
//         <main className="min-h-screen bg-[#0e0f12] px-5 py-4 text-white sm:px-9">
//             <div className="mx-auto max-w-[61rem]">
//                 {/* Header */}
//                 <header className="mb-5">
//                     <h1 className="text-2xl font-extrabold tracking-tight">
//                         MY PLAN
//                     </h1>

//                     <p className="mt-1 text-xs text-gray-500">
//                         Cap of five lifts for today. Finish them, then load more.
//                     </p>
//                 </header>

//                 {/* Statistics */}
//                 <section className="grid grid-cols-1 gap-4 rounded-xl border border-[#242730] bg-[#13161c] p-5 sm:grid-cols-3 sm:gap-0">
//                     <div className="border-b border-[#242730] pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
//                         <p className="text-[10px] text-gray-500">
//                             Exercises
//                         </p>
//                         <h2 className="mt-1 text-3xl font-extrabold text-[#c5ff00]">
//                             {totalExercises}
//                         </h2>
//                     </div>

//                     <div className="border-b border-[#242730] pb-4 sm:border-b-0 sm:border-r sm:px-6 sm:pb-0">
//                         <p className="text-[10px] text-gray-500">
//                             Minutes
//                         </p>
//                         <h2 className="mt-1 text-3xl font-extrabold">
//                             {totalMinutes}
//                         </h2>
//                     </div>

//                     <div className="sm:pl-6">
//                         <p className="text-[10px] text-gray-500">
//                             Calories
//                         </p>
//                         <h2 className="mt-1 text-3xl font-extrabold">
//                             {totalCalories}
//                         </h2>
//                     </div>
//                 </section>

//                 {/* Tabs and Sorting */}
//                 <section className="mt-6 flex flex-wrap items-center justify-between gap-4">
//                     <div className="flex rounded-xl border border-[#242730] bg-[#151820] p-1">
//                         {["Today's Plan", "Saved"].map((tab) => (
//                             <button
//                                 key={tab}
//                                 onClick={() => setActiveTab(tab)}
//                                 className={`rounded-lg px-4 py-2 text-[10px] transition ${
//                                     activeTab === tab
//                                         ? "bg-[#252a34] font-semibold text-white"
//                                         : "text-gray-500 hover:text-white"
//                                 }`}
//                             >
//                                 {tab}
//                             </button>
//                         ))}
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <label
//                             htmlFor="sort"
//                             className="text-[10px] text-gray-500"
//                         >
//                             Sort By
//                         </label>

//                         <select
//                             id="sort"
//                             value={sortBy}
//                             onChange={(e) => setSortBy(e.target.value)}
//                             className="rounded-lg border border-[#292d37] bg-[#13161c] px-3 py-2 text-[10px] outline-none focus:border-[#c5ff00]"
//                         >
//                             <option>Duration</option>
//                             <option>Rating</option>
//                             <option>Calories</option>
//                         </select>
//                     </div>
//                 </section>

//                 {/* Exercise Cards */}
//                 <section className="mt-5 space-y-3">
//                     {sortedExercises.length > 0 ? (
//                         sortedExercises.map((exercise, index) => (
//                             <article
//                                 key={
//                                     getExerciseKey(exercise) ?? index
//                                 }
//                                 className="flex flex-col gap-4 rounded-xl border border-[#242730] bg-[#13161c] p-3 sm:flex-row sm:items-center sm:justify-between"
//                             >
//                                 {/* Exercise Details */}
//                                 <div className="flex min-w-0 items-center gap-3">
//                                     <div className="h-16 w-28 shrink-0 overflow-hidden rounded-lg bg-[#20242d]">
//                                         <img
//                                             src={
//                                                 exercise.image ??
//                                                 exercise.imageUrl ??
//                                                 "/placeholder.png"
//                                             }
//                                             alt={
//                                                 exercise.name ??
//                                                 exercise.title ??
//                                                 "Exercise"
//                                             }
//                                             className="h-full w-full object-cover"
//                                         />
//                                     </div>

//                                     <div className="min-w-0">
//                                         <h2 className="text-xs font-extrabold uppercase">
//                                             {exercise.name ??
//                                                 exercise.title ??
//                                                 "Untitled Exercise"}
//                                         </h2>

//                                         <p className="mt-1 text-[10px] text-gray-500">
//                                             {exercise.equipment ??
//                                                 exercise.category ??
//                                                 "Exercise"}
//                                         </p>

//                                         <div className="mt-1 flex flex-wrap items-center gap-3 text-[10px] text-gray-300">
//                                             <span className="flex items-center gap-1">
//                                                 <span className="text-[#c5ff00]">
//                                                     ◷
//                                                 </span>
//                                                 {getDuration(exercise)} min
//                                             </span>

//                                             <span className="flex items-center gap-1">
//                                                 <span className="text-[#c5ff00]">
//                                                     🔥
//                                                 </span>
//                                                 {getCalories(exercise)} kcal
//                                             </span>

//                                             <span className="flex items-center gap-1">
//                                                 <span className="text-[#c5ff00]">
//                                                     ☆
//                                                 </span>
//                                                 {Number(
//                                                     exercise.rating ?? 0
//                                                 ).toFixed(1)}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Actions */}
//                                 <div className="flex shrink-0 items-center gap-2">
//                                     <button
//                                         onClick={() => {
//                                             const id =
//                                                 exercise.id ?? exercise._id;

//                                             if (id != null) {
//                                                 window.location.href =
//                                                     `/workouts/${id}`;
//                                             }
//                                         }}
//                                         className="rounded-full border border-[#303541] px-4 py-2 text-[10px] transition hover:bg-[#252a34]"
//                                     >
//                                         View Details
//                                     </button>

//                                     {activeTab === "Today's Plan" && (
//                                         <button
//                                             onClick={() =>
//                                                 toast.success(
//                                                     "Mark as Done Successfully"
//                                                 )
//                                             }
//                                             className="rounded-full bg-[#c5ff00] px-3 py-2 text-[10px] font-bold text-black transition hover:bg-[#d5ff45]"
//                                         >
//                                             ✓ Mark as Done
//                                         </button>
//                                     )}

//                                     <button
//                                         type="button"
//                                         title="Remove exercise"
//                                         aria-label={`Remove ${
//                                             exercise.name ??
//                                             exercise.title ??
//                                             "exercise"
//                                         }`}
//                                         onClick={() =>
//                                             handleRemove(exercise)

//                                         }
//                                         className="px-1 text-gray-500 transition hover:text-white"
//                                     >
//                                         ×
//                                     </button>
//                                 </div>
//                             </article>
//                         ))
//                     ) : (
//                         <div className="flex min-h-[230px] flex-col items-center justify-center rounded-xl border border-dashed border-[#292c34] px-4 py-10 text-center">
//                             <h2 className="text-base font-extrabold tracking-wide">
//                                 NOTHING HERE YET
//                             </h2>

//                             <p className="mt-1 text-[10px] text-gray-500">
//                                 {activeTab === "Today's Plan"
//                                     ? "Add an exercise from the library to get started."
//                                     : "Save an exercise to see it here."}
//                             </p>

//                             <button
//                                 onClick={() => {
//                                     window.location.href = "/workouts";
//                                 }}
//                                 className="mt-5 rounded-full bg-[#c5ff00] px-5 py-2 text-[10px] font-bold text-black transition hover:bg-[#d5ff45] active:scale-95"
//                             >
//                                 Go to workouts
//                             </button>
//                         </div>
//                     )}
//                 </section>
//             </div>
//         </main>
//     );
// }



"use client";

import { LibraryContext } from "@/context/LibraryProvider";
import { useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

type Exercise = {
    id?: string | number;
    _id?: string | number;
    name?: string;
    title?: string;
    image?: string;
    imageUrl?: string;
    equipment?: string;
    category?: string;
    duration?: number | string;
    minutes?: number | string;
    calories?: number | string;
    kcal?: number | string;
    caloriesBurned?: number | string;
    estimatedCalories?: number | string;
    rating?: number | string;
    [key: string]: unknown;
};

function getCalories(exercise: Exercise): number {
    const value =
        exercise.calories ??
        exercise.kcal ??
        exercise.caloriesBurned ??
        exercise.estimatedCalories;

    return Number(value) || 0;
}

function getDuration(exercise: Exercise): number {
    return Number(exercise.duration ?? exercise.minutes ?? 0) || 0;
}

function getExerciseKey(exercise: Exercise) {
    return exercise.id ?? exercise._id ?? exercise.name ?? exercise.title;
}

export default function MyPlan() {
    const [activeTab, setActiveTab] = useState("Today's Plan");
    const [sortBy, setSortBy] = useState("Duration");

    const { todaysPlanLibrary, savedLibrary } =
        useContext(LibraryContext);

    const [todayExercises, setTodayExercises] = useState<Exercise[]>([]);
    const [savedExercises, setSavedExercises] = useState<Exercise[]>([]);

    // Keep local lists synchronized with context data
    useEffect(() => {
        setTodayExercises([...(todaysPlanLibrary ?? [])] as Exercise[]);
    }, [todaysPlanLibrary]);

    useEffect(() => {
        setSavedExercises([...(savedLibrary ?? [])] as Exercise[]);
    }, [savedLibrary]);

    const currentLibrary =
        activeTab === "Today's Plan"
            ? todayExercises
            : savedExercises;

    // Remove a card from the currently selected list
    function handleRemove(exercise: Exercise) {
        const exerciseKey = getExerciseKey(exercise);

        if (activeTab === "Today's Plan") {
            setTodayExercises((previous) =>
                previous.filter(
                    (item) => getExerciseKey(item) !== exerciseKey
                )
            );
        } else {
            setSavedExercises((previous) =>
                previous.filter(
                    (item) => getExerciseKey(item) !== exerciseKey
                )
            );
        }
    }

    // Sort cards
    const sortedExercises = useMemo(() => {
        const exercises = [...currentLibrary];

        exercises.sort((a, b) => {
            if (sortBy === "Duration") {
                return getDuration(a) - getDuration(b);
            }

            if (sortBy === "Rating") {
                return Number(b.rating ?? 0) - Number(a.rating ?? 0);
            }

            if (sortBy === "Calories") {
                return getCalories(b) - getCalories(a);
            }

            return 0;
        });

        return exercises;
    }, [currentLibrary, sortBy]);

    const totalExercises = sortedExercises.length;

    const totalMinutes = sortedExercises.reduce(
        (total, exercise) => total + getDuration(exercise),
        0
    );

    const totalCalories = sortedExercises.reduce(
        (total, exercise) => total + getCalories(exercise),
        0
    );

    return (
        <main className="min-h-screen bg-[#0e0f12] px-5 py-4 text-white sm:px-9">
            <div className="mx-auto max-w-[62rem]">
                {/* Header */}
                <header className="mb-5">
                    <h1 className="text-2xl font-extrabold tracking-tight">
                        MY PLAN
                    </h1>

                    <p className="mt-1 text-xs text-gray-500">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </header>

                {/* Statistics */}
                <section className="grid grid-cols-1 gap-4 rounded-xl border border-[#242730] bg-[#13161c] p-5 sm:grid-cols-3 sm:gap-0">
                    <div className="border-b border-[#242730] pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
                        <p className="text-[10px] text-gray-500">
                            Exercises
                        </p>
                        <h2 className="mt-1 text-3xl font-extrabold text-[#c5ff00]">
                            {totalExercises}
                        </h2>
                    </div>

                    <div className="border-b border-[#242730] pb-4 sm:border-b-0 sm:border-r sm:px-6 sm:pb-0">
                        <p className="text-[10px] text-gray-500">
                            Minutes
                        </p>
                        <h2 className="mt-1 text-3xl font-extrabold">
                            {totalMinutes}
                        </h2>
                    </div>

                    <div className="sm:pl-6">
                        <p className="text-[10px] text-gray-500">
                            Calories
                        </p>
                        <h2 className="mt-1 text-3xl font-extrabold">
                            {totalCalories}
                        </h2>
                    </div>
                </section>

                {/* Tabs and Sorting */}
                <section className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex rounded-xl border border-[#242730] bg-[#151820] p-1">
                        {["Today's Plan", "Saved"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`rounded-lg px-4 py-2 text-[10px] transition ${activeTab === tab
                                        ? "bg-[#252a34] font-semibold text-white"
                                        : "text-gray-500 hover:text-white"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <label
                            htmlFor="sort"
                            className="text-[10px] text-gray-500"
                        >
                            Sort By
                        </label>

                        <select
                            id="sort"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="rounded-lg border border-[#292d37] bg-[#13161c] px-3 py-2 text-[10px] outline-none focus:border-[#c5ff00]"
                        >
                            <option>Duration</option>
                            <option>Rating</option>
                            <option>Calories</option>
                        </select>
                    </div>
                </section>

                {/* Exercise Cards */}
                <section className="mt-5 space-y-3">
                    {sortedExercises.length > 0 ? (
                        sortedExercises.map((exercise, index) => (
                            <article
                                key={
                                    getExerciseKey(exercise) ?? index
                                }
                                className="flex flex-col gap-4 rounded-xl border border-[#242730] bg-[#13161c] p-3 sm:flex-row sm:items-center sm:justify-between"
                            >
                                {/* Exercise Details */}
                                <div className="flex min-w-0 items-center gap-3">
                                    <div className="h-16 w-28 shrink-0 overflow-hidden rounded-lg bg-[#20242d]">
                                        <img
                                            src={
                                                exercise.image ??
                                                exercise.imageUrl ??
                                                "/placeholder.png"
                                            }
                                            alt={
                                                exercise.name ??
                                                exercise.title ??
                                                "Exercise"
                                            }
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <h2 className="text-xs font-extrabold uppercase">
                                            {exercise.name ??
                                                exercise.title ??
                                                "Untitled Exercise"}
                                        </h2>

                                        <p className="mt-1 text-[10px] text-gray-500">
                                            {exercise.equipment ??
                                                exercise.category ??
                                                "Exercise"}
                                        </p>

                                        <div className="mt-1 flex flex-wrap items-center gap-3 text-[10px] text-gray-300">
                                            <span className="flex items-center gap-1">
                                                <span className="text-[#c5ff00]">
                                                    ◷
                                                </span>
                                                {getDuration(exercise)} min
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <span className="text-[#c5ff00]">
                                                    🔥
                                                </span>
                                                {getCalories(exercise)} kcal
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <span className="text-[#c5ff00]">
                                                    ☆
                                                </span>
                                                {Number(
                                                    exercise.rating ?? 0
                                                ).toFixed(1)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex shrink-0 items-center gap-2">
                                    <button
                                        onClick={() => {
                                            const id =
                                                exercise.id ?? exercise._id;

                                            if (id != null) {
                                                window.location.href =
                                                    `/workouts/${id}`;
                                            }
                                        }}
                                        className="rounded-full border border-[#303541] px-4 py-2 text-[10px] transition hover:bg-[#252a34]"
                                    >
                                        View Details
                                    </button>

                                    {activeTab === "Today's Plan" && (
                                        <button
                                            onClick={() =>
                                                toast.success(
                                                    "Mark as Done Successfully"
                                                )
                                            }
                                            className="rounded-full bg-[#c5ff00] px-3 py-2 text-[10px] font-bold text-black transition hover:bg-[#d5ff45]"
                                        >
                                            ✓ Mark as Done
                                        </button>
                                    )}

                                    <button
                                        type="button"
                                        title="Remove exercise"
                                        aria-label={`Remove ${exercise.name ??
                                            exercise.title ??
                                            "exercise"
                                            }`}
                                        onClick={() =>
                                            handleRemove(exercise)

                                        }
                                        className="px-1 text-gray-500 transition hover:text-white"
                                    >
                                        ×
                                    </button>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="flex min-h-[230px] flex-col items-center justify-center rounded-xl border border-dashed border-[#292c34] px-4 py-10 text-center">
                            <h2 className="text-base font-extrabold tracking-wide">
                                NOTHING HERE YET
                            </h2>

                            <p className="mt-1 text-[10px] text-gray-500">
                                {activeTab === "Today's Plan"
                                    ? "Add an exercise from the library to get started."
                                    : "Save an exercise to see it here."}
                            </p>

                            <button
                                onClick={() => {
                                    window.location.href = "/workouts";
                                }}
                                className="mt-5 rounded-full bg-[#c5ff00] px-5 py-2 text-[10px] font-bold text-black transition hover:bg-[#d5ff45] active:scale-95"
                            >
                                Go to workouts
                            </button>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}



