import React, {FC} from 'react';
import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";
import GenresComponent from "@/app/components/GenresComponent/GenresComponent";
import MoviesListComponent from "@/app/components/MoviesListComponent/MoviesListComponent";
import {getMoviesByGenre} from "@/app/services/movies/getMoviesByGenre";

interface IProps {
    params: {
        id: number
    },
    searchParams: {
        page: number
    }
}

const SelectedMoviesPage: FC<IProps> = async ({params: {id}, searchParams}) => {

    const page = +searchParams.page || 1;
    const {results, total_pages} = await getMoviesByGenre(id, page);

    return (
        <div className="flex-column">
            <HeaderComponent/>
            <GenresComponent/>
            <MoviesListComponent page={page} totalPages={total_pages} movies={results}/>
        </div>
    );
};

export default SelectedMoviesPage;