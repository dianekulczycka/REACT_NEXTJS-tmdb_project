import React, {FC} from 'react';
import {IMovie} from "@/app/interfaces/IMovie";
import PosterWithBadgesComponent
    from "@/app/components/MoviesListComponent/MovieExtendedComponent/PosterWithBadgesComponent/PosterWithBadgesComponent";
import StarsRatingComponent
    from "@/app/components/MoviesListComponent/MovieCardComponent/StarsRatingComponent/StarsRatingComponent";

interface IProps {
    movie: IMovie
}

const MovieExtendedComponent: FC<IProps> = ({movie}) => {
    return (
        <div className="grid-2-columns margin-auto">
            <div className="flex-column">
                <PosterWithBadgesComponent genres={movie.genres} posterPath={movie.poster_path}/>
            </div>
            <div className="width-50-vw">
                <StarsRatingComponent rating={movie.vote_average}/>
                <h1>{movie.title}</h1>
                <h3>{movie.tagline}</h3>
                <h4>{movie.overview}</h4>
                <p>Release date: {movie.release_date}</p>
                {!!movie.budget && <p>Budget: ${movie.budget}</p>}
                {!!movie.revenue && <p>Revenue: ${movie.revenue}</p>}
            </div>
        </div>
    );
};

export default MovieExtendedComponent;