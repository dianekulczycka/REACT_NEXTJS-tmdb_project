import React from 'react';
import {getAllGenres} from "@/app/services/genres/getAllGenres";
import GenreLinkComponent from "@/app/components/GenresComponent/GenreLinkComponent/GenreLinkComponent";


const GenresComponent = async () => {
    let genres = await getAllGenres();
    return (
        <div className="flex-column">
            <ul className="grid-5-columns grid-gap-075em">
                {
                    genres.map(genre =>
                        <GenreLinkComponent key={genre.id} genre={genre}/>)
                }
            </ul>

        </div>
    );
};

export default GenresComponent;