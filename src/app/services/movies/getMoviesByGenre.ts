import {headerWithToken} from "../helpers/auth-header";
import {IPaginatedMovies} from "@/app/interfaces/IPaginatedMovies";

export const getMoviesByGenre = async (id: number, page: number): Promise<IPaginatedMovies> => {
    return await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${page}`, {
        method: "GET",
        headers: headerWithToken,
        next: {
            revalidate: 60 * 60 * 24 // 24hrs
        }
    })
        .then(response => response.json());
};

