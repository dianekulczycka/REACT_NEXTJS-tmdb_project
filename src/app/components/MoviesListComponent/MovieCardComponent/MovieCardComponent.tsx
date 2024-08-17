import {IMovie} from "@/app/interfaces/IMovie";
import React, {FC} from "react";
import StarsRatingComponent
    from "@/app/components/MoviesListComponent/MovieCardComponent/StarsRatingComponent/StarsRatingComponent";
import PosterComponent from "@/app/components/MoviesListComponent/MovieCardComponent/PosterComponent/PosterComponent";

interface IProps {
    movie: IMovie;
}

const MovieListCardComponent: FC<IProps> = ({movie}) => {
    return (
        <div className="flex-column">
            <PosterComponent posterPath={movie.poster_path}/>
            <h3>{movie.title}</h3>
            <StarsRatingComponent rating={movie.vote_average}/>
        </div>
    );
};

export default MovieListCardComponent;