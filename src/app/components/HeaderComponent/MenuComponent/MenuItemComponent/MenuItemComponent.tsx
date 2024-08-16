import React, {FC} from 'react';
import ClientNavLinkComponent
    from "@/app/components/HeaderComponent/MenuComponent/MenuItemComponent/ClientNavLink/ClientNavLinkComponent";

interface IProps {
    target: string;
}

const MenuItemComponent: FC<IProps> = ({target}) => {
    return (
        <li>
            <ClientNavLinkComponent to={`/${target}`}>{target}</ClientNavLinkComponent>
        </li>
    );
};

export default MenuItemComponent;