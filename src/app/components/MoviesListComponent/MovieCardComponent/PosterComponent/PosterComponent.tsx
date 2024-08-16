import {FC} from 'react';
import {getPosterUrl} from "@/app/services/movies/getPosterUrl";

interface IProps {
    posterPath: string;
}

const PosterComponent: FC<IProps> = ({posterPath}) => {
    const posterUrl = getPosterUrl(posterPath);
    return (
        <div>
            <img className="badges-container" src={posterUrl} alt="poster"/>
        </div>
    );
};

export default PosterComponent;