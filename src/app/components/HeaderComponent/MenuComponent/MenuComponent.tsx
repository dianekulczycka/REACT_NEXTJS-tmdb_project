import React from 'react';
import MenuItemComponent from "@/app/components/HeaderComponent/MenuComponent/MenuItemComponent/MenuItemComponent";

const MenuComponent = () => {
    return (
        <div className="side-mar-1em">
            <ul className="flex-row clean-li clean-text">
                <MenuItemComponent target={"movies"}/>
                <MenuItemComponent target={"search"}/>
            </ul>
        </div>
    );
};

export default MenuComponent;