import {headerWithToken} from "../helpers/auth-header";
import {IPaginatedMovies} from "@/app/interfaces/IPaginatedMovies";

export const getMoviesByKeyword = async (keywordId: number, page: number): Promise<IPaginatedMovies> => {
    return await fetch(`https://api.themoviedb.org/3/discover/movie?with_keywords=${keywordId}&page=${page}`, {
        method: "GET",
        headers: headerWithToken,
        next: {
            revalidate: 60 * 60 * 24 // 24hrs
        }
    })
        .then(response => response.json())
};

