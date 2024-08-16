import React, {FC} from 'react';
import Link from "next/link";
import {IGenre} from "@/app/interfaces/IGenre";
import {IMovie} from "@/app/interfaces/IMovie";

interface IProps {
    genre: IGenre;
}

const GenreLinkComponent: FC<IProps> = ({genre}) => {
    return (
        <li className="flex-row border-darkred link-hover-darkred">
            <Link
                href={`/genres/${genre.id}`}
                className="w100perc link-hover-darkred text-centered">
                {genre.name}
            </Link>
        </li>
    );
};

export default GenreLinkComponent;