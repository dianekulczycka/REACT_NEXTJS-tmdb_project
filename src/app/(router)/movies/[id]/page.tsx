import React, {FC} from 'react';
import MovieCardComponent from "@/app/components/MoviesListComponent/MovieCardComponent/MovieCardComponent";
import {getMovieById} from "@/app/services/movies/getMovieById";
import MovieExtendedComponent
    from "@/app/components/MoviesListComponent/MovieExtendedComponent/MovieExtendedComponent";

interface IProps {
    params: {
        id: number
    }
}

const MoviePage: FC<IProps> = async ({params: {id}}) => {
    let movie = await getMovieById(id);

    return (
        <div>
            <MovieExtendedComponent movie={movie}/>
        </div>
    );
};

export default MoviePage;