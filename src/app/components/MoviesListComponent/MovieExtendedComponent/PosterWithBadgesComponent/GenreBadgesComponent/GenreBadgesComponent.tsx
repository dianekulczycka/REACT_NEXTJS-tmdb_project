import React, {FC} from 'react';
import {IGenre} from "@/app/interfaces/IGenre";
import GenreBadgeComponent
    from "@/app/components/MoviesListComponent/MovieExtendedComponent/PosterWithBadgesComponent/GenreBadgesComponent/GenreBadgeComponent/GenreBadgeComponent";

interface IProps {
    genres: IGenre[]
}

const GenreBadgesComponent: FC<IProps> = ({genres}) => {
    return (
        <div className="badges">
            {
                genres.map(genre => <GenreBadgeComponent key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export default GenreBadgesComponent;