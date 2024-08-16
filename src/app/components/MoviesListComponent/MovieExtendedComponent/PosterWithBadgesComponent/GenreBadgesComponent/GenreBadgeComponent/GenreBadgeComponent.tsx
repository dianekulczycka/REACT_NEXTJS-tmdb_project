import React, {FC} from 'react';
import Badge from 'react-bootstrap/Badge';

interface IProps {
    genreName: string;
}

const GenreBadgeComponent: FC<IProps> = ({genreName}) => {
    return (
        <Badge className="badge">
            {genreName}
        </Badge>
    );
};

export default GenreBadgeComponent;