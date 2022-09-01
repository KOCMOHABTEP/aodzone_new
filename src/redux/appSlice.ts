import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";
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
        loadSidebarCollapseState: state => {
            const storageState = LocalStorageHelper.loadState();
            state.userConfig.sidebarCollapsed =
                storageState.userConfig.sidebarCollapsed;
        },
    },
});

export const { sidebarCollapseToggle, loadSidebarCollapseState } =
    appSlice.actions;

export const getSidebarCollapsed = (state: RootState) =>
    state.app.userConfig.sidebarCollapsed;

export default appSlice.reducer;
