import React, {FC} from 'react';
import Link from "next/link";
import {IGenre} from "@/app/interfaces/IGenre";

interface IProps {
    genre: IGenre;
}

const GenreLinkComponent: FC<IProps> = ({genre}) => {
    return (
        <li className="flex-row border-red bg-red-hover padding-0">
            <Link
                href={`/genres/${genre.id}`}
                className="width-100-perc bg-red-hover text-centered margin-0 padding-5px-10px">
                {genre.name}
            </Link>
        </li>
    );
};

export default GenreLinkComponent;