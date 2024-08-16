import React from 'react';
import {getAllMovies} from "@/app/services/movies/getAllMovies";
import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";
import GenresComponent from "@/app/components/GenresComponent/GenresComponent";
import MoviesListComponent from "@/app/components/MoviesListComponent/MoviesListComponent";

const MoviesPage = async () => {
    let allMovies = await getAllMovies();

    return (
        <div className="flex-column">
            <HeaderComponent/>
            <GenresComponent/>
            <MoviesListComponent movies={allMovies}/>
        </div>
    );
};

export default MoviesPage;