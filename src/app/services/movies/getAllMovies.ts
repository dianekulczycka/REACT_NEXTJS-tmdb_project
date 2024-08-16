import {headerWithToken} from "../helpers/auth-header";
import {IMovie} from "@/app/interfaces/IMovie";

export const getAllMovies = async (page: number = 1): Promise<IMovie[]> => {
    return await fetch(`https://api.themoviedb.org/3/discover/movie`, { // todo &page=${page}
        method: "GET",
        headers: headerWithToken,
        next: {
            revalidate: 60 * 60 * 4 // 4hrs
        },
    })
        .then(value => value.json())
        .then(value => value.results)
}