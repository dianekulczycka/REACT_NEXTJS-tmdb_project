"use client";
import React from 'react';
import UserInfoComponent from "@/app/components/HeaderComponent/UserInfoComponent/UserInfoComponent";
import MenuComponent from "@/app/components/HeaderComponent/MenuComponent/MenuComponent";
import DarkThemeToggleBtn from "@/app/components/HeaderComponent/DarkThemeToggleButton/DarkThemeToggleButtonComponent";
import {Provider} from "react-redux";
import {store} from "@/app/store/store";

const HeaderComponent = () => {
    return (
        <div>
            <div className="flex-row">
                <MenuComponent/>
                <UserInfoComponent/>
                <Provider store={store}>
                    <DarkThemeToggleBtn/>
                </Provider>
            </div>
        </div>

    );
};

export default HeaderComponent;