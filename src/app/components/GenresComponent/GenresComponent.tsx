import React, {FC} from 'react';
import {getAllGenres} from "@/app/services/genres/getAllGenres";
import GenreLinkComponent from "@/app/components/GenresComponent/GenreLinkComponent/GenreLinkComponent";
import {IMovie} from "@/app/interfaces/IMovie";


const GenresComponent = async () => {
    let genres = await getAllGenres();
    return (
        <div>
            <ul className="grid-5cols grid-gap-075em">
                {
                    genres.map(genre =>
                        <GenreLinkComponent key={genre.id} genre={genre}/>)
                }
            </ul>

        </div>
    );
};

export default GenresComponent;