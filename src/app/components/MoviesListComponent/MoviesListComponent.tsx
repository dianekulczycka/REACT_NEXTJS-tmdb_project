import React, {FC} from 'react';
import Link from "next/link";
import {IMovie} from "@/app/interfaces/IMovie";
import MovieCardComponent from "@/app/components/MoviesListComponent/MovieCardComponent/MovieCardComponent";
import PaginationComponent from "@/app/components/MoviesListComponent/PaginationComponent/PaginationComponent";


interface IProps {
    movies: IMovie[] | [];
    page: number;
    totalPages: number
}

const MovieListComponent: FC<IProps> = async ({movies, page, totalPages}) => {

    return (
        <div>
            <PaginationComponent totalPages={totalPages} page={page}/>
            <div className="grid-3-columns">
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
        </div>
    );
};

export default MovieListComponent;