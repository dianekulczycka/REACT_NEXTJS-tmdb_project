import React, {FC} from 'react';
import {Rating} from '@smastrom/react-rating'
import {
    starRatingsStyle
} from "@/app/components/MoviesListComponent/MovieCardComponent/StarsRatingComponent/star-ratings-style";

interface IProps {
    rating: number;
}

const StarsRatingComponent: FC<IProps> = ({rating}) => {
    return (
        <Rating style={{maxWidth: 180}} readOnly={true} value={rating / 2} itemStyles={starRatingsStyle}/>
    )
};

export default StarsRatingComponent;
