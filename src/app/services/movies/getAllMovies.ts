import {headerWithToken} from "../helpers/auth-header";
import {IPaginatedMovies} from "@/app/interfaces/IPaginatedMovies";

export const getAllMovies = async (page: number = 1): Promise<IPaginatedMovies> => {
    return await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, {
        method: 'GET',
        headers: headerWithToken,
        next: {
            revalidate: 60 * 60 * 6
        },
    }).then(response => response.json())
};