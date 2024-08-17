"use client";

import React, {FC, useEffect} from 'react';
import {Provider} from "react-redux";
import {useAppSelector} from "@/app/store/helpers/useAppSelector";
import {useAppDispatch} from "@/app/store/helpers/useAppDispatch";
import {actions, store} from "@/app/store/store";

const DarkThemeToggleBtn: FC = () => {
    const isDarkThemeEnabled: boolean = useAppSelector(state => state.themeTogglerSliceState.isDarkThemeEnabled);
    const dispatch = useAppDispatch();

    useEffect(() => {
        document.body.className = isDarkThemeEnabled ? "body-dark" : "body-light";
    }, [isDarkThemeEnabled]);

    return (
        <Provider store={store}>
            <button
                id="themeToggler"
                className="border-red bg-red padding-5px-10px side-mar-1em cursor-pointer"
                onClick={() => {
                    dispatch(actions.toggleTheme())
                }}> change to {isDarkThemeEnabled ? "light" : "dark"} theme
            </button>
        </Provider>
    );
};

export default DarkThemeToggleBtn;