import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import LocalStorageHelper from "../helpers/LocalStorageHelper";

export interface appState {
    userConfig: {
        sidebarCollapsed: boolean;
    };
}

const initialState: appState = {
    userConfig: {
        sidebarCollapsed: false,
    },
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        sidebarCollapseToggle: (state, action: PayloadAction<boolean>) => {
            state.userConfig.sidebarCollapsed = action.payload;
            LocalStorageHelper.editStorageKey("userConfig", {
                sidebarCollapsed: action.payload,
            });
        },
        getSidebarCollapseState: state => {
            const storageState = LocalStorageHelper.loadState();
            state.userConfig.sidebarCollapsed =
                storageState.userConfig.sidebarCollapsed;
        },
    },
});

export const { sidebarCollapseToggle, getSidebarCollapseState } =
    appSlice.actions;

export default appSlice.reducer;
