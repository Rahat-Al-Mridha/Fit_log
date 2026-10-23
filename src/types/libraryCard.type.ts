
// export interface IlibraryCard {
//    id: number,
//     name: string,
//     image:string,
//     muscleGroups: string[],
//     equipment: string,
//     difficulty: string,
//     duration: number,
//     caloriesBurned: number,
//     sets: number,
//     reps: string,
//     rating: number,
//     description:string,
//     instructions: string[]
// }



export interface IlibraryCard {
  id: string | number;
  name: string;
  image: string;
  description?: string;
  category?: string;
  muscleGroup?: string;
  equipment?: string;
  difficulty?: string;
  sets?: number | string;
  reps?: string;
  duration?: string;
  calories?: number | string;
  rating?: number | string;
  instructions?: string[];
}
