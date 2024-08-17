import {IMovie} from "./IMovie";

export interface IPaginatedMovies {
    page: number;
    total_pages: number; // In this API, it won't go further than 500
    results: IMovie[] | [];
}