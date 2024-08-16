import React, {FC} from 'react';
import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";
import GenresComponent from "@/app/components/GenresComponent/GenresComponent";
import MoviesListComponent from "@/app/components/MoviesListComponent/MoviesListComponent";
import {getMoviesByGenre} from "@/app/services/movies/getMoviesByGenre";

interface IProps {
    params: {
        id: number
    }
}

const SelectedMoviesPage: FC<IProps> = async ({params: {id}}) => {

    let selectedMovies = await getMoviesByGenre(id);

    return (
        <div className="flex-column">
            <HeaderComponent/>
            <GenresComponent/>
            <MoviesListComponent movies={selectedMovies}/>
        </div>
    );
};

export default SelectedMoviesPage;