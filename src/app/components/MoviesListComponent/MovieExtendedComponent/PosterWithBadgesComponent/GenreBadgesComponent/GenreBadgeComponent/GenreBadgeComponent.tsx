import ClientNavLinkComponent from '@/app/components/HeaderComponent/MenuComponent/MenuItemComponent/ClientNavLink/ClientNavLinkComponent';
import { IGenre } from '@/app/interfaces/IGenre';
import React, {FC} from 'react';
import Badge from 'react-bootstrap/Badge';

interface IProps {
    genre: IGenre;
}

const GenreBadgeComponent: FC<IProps> = ({genre:{id, name}}) => {
    return (
        <Badge className="badge cursor-pointer">
            <ClientNavLinkComponent
                to={`/genres/${id}`}>
                {name}
            </ClientNavLinkComponent>
        </Badge>
    );
};

export default GenreBadgeComponent;