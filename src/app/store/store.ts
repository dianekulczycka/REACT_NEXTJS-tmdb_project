import {configureStore} from "@reduxjs/toolkit";
import {themeTogglerSlice} from "@/app/store/slices/themeTogglerSlice";

export const actions = themeTogglerSlice.actions;
export const store = configureStore({
    reducer: {
        themeTogglerSliceState: themeTogglerSlice.reducer
    }
});