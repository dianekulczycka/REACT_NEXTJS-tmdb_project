import {headerWithToken} from "../helpers/auth-header";
import {IMovie} from "@/app/interfaces/IMovie";

export const getMovieById = async (id: number): Promise<IMovie> => {
    return await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        method: "GET",
        headers: headerWithToken,
        cache: "force-cache"
    })
        .then(value => value.json())
}