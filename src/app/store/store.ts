import {configureStore, createSlice} from "@reduxjs/toolkit";

interface ITogglerState {
    isDarkThemeEnabled: boolean;
}

const initialTogglerState: ITogglerState = {
    isDarkThemeEnabled: false
}

const themeTogglerSlice = createSlice(
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

export const actions = themeTogglerSlice.actions;
export const store = configureStore({
    reducer: {
        themeTogglerSliceState: themeTogglerSlice.reducer
    }
});