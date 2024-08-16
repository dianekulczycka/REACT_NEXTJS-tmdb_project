import React, {FC} from 'react';

import Link from "next/link";
import {IMovie} from "@/app/interfaces/IMovie";
import MovieCardComponent from "@/app/components/MoviesListComponent/MovieCardComponent/MovieCardComponent";


interface IProps {
    movies: IMovie[] | [];
}

const MovieListComponent: FC<IProps> = async ({movies}) => {
    return (
        <div className="grid-2cols">
            {
                movies.map(movie =>
                    <Link
                        key={movie.id}
                        href={`/movies/${movie.id}`}>
                        <MovieCardComponent
                            movie={movie}
                        />
                    </Link>)
            }
        </div>
    );
};

export default MovieListComponent;