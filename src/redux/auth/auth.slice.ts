import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
    isAuth: boolean;
}

const initialState: IAuthState = {
    isAuth: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: state => {
            state.isAuth = false;
        },
        testLogin: state => {
            state.isAuth = true;
        },
    },
});

export const { logout, testLogin } = authSlice.actions;

export default authSlice.reducer;
