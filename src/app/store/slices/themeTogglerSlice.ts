import {createSlice} from "@reduxjs/toolkit";

interface ITogglerState {
    isDarkThemeEnabled: boolean;
}

const initialTogglerState: ITogglerState = {
    isDarkThemeEnabled: false
}

export const themeTogglerSlice = createSlice(
    {
        name: "themeTogglerSlice",
        initialState: initialTogglerState,
        reducers: {
            toggleTheme: (state) => {
                state.isDarkThemeEnabled = !state.isDarkThemeEnabled;
            }
        }
    }
)