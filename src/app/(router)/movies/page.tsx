import React, {FC} from 'react';
import {getAllMovies} from "@/app/services/movies/getAllMovies";
import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";
import GenresComponent from "@/app/components/GenresComponent/GenresComponent";
import MoviesListComponent from "@/app/components/MoviesListComponent/MoviesListComponent";

interface IProps {
    searchParams: {
        page: number
    }
}

const MoviesPage: FC<IProps> = async ({searchParams}) => {

    const page = +searchParams.page || 1;
    const {results, total_pages} = await getAllMovies(page);

    return (
        <div className="flex-column">
            <HeaderComponent/>
            <GenresComponent/>
            <MoviesListComponent page={page} totalPages={total_pages} movies={results}/>
        </div>
    );
};
export default MoviesPage;