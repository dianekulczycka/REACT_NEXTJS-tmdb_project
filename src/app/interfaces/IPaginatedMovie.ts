import {IMovie} from "./IMovie";

export interface IPaginatedMovie {
    page: number;
    totalPages: number;
    results: IMovie[];
}