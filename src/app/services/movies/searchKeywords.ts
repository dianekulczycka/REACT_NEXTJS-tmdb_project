import {headerWithToken} from "../helpers/auth-header";
import {IFormType} from "@/app/interfaces/IForm";
import {IQuerySearchResult} from "@/app/interfaces/IQuerySearchResult";

export const searchKeywords = async (data: IFormType): Promise<IQuerySearchResult[]> => {
    return await fetch(`https://api.themoviedb.org/3/search/keyword?query=${data.query}`, {
        method: "GET",
        headers: headerWithToken,
    })
        .then(response => response.json())
        .then(value => value.results);
}