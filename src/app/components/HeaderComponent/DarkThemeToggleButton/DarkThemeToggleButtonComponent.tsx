"use client";

import React, {FC} from 'react';
import {Provider} from "react-redux";
import {useAppSelector} from "@/app/store/helpers/useAppSelector";
import {useAppDispatch} from "@/app/store/helpers/useAppDispatch";
import {actions, store} from "@/app/store/store";

const DarkThemeToggleBtn: FC = () => {
    const isDarkThemeEnabled: boolean = useAppSelector(state => state.themeTogglerSliceState.isDarkThemeEnabled);
    const dispatch = useAppDispatch();

    return (
        <Provider store={store}>
            <button onClick={() => {
                dispatch(actions.toggleTheme())
            }}> Change to: {isDarkThemeEnabled ? "light" : "dark"}
            </button>
        </Provider>
    );
};

export default DarkThemeToggleBtn;