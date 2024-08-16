import {IGenre} from "@/app/interfaces/IGenre";

export interface IMovie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    genres: IGenre[];
    budget: number;
    revenue: number;
    tagline: string;
}