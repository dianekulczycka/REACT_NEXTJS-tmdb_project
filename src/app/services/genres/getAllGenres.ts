import {IGenre} from "@/app/interfaces/IGenre";
import {headerWithToken} from "@/app/services/helpers/auth-header";

export const getAllGenres = async (): Promise<IGenre[]> => {
    return await fetch("https://api.themoviedb.org/3/genre/movie/list", {
        method: "GET",
        headers: headerWithToken,
        cache: "force-cache"
    })
        .then(response => response.json())
        .then(value => value.genres);
}
