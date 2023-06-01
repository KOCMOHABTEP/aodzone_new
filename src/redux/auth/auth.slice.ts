import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "@/redux/auth/auth.action";

// export interface IAuthState {
//     isAuth: boolean;
// }
//
// const initialState: IAuthState = {
//     isAuth: false,
// };

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        logOut: state => {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: {
        [login.fulfilled.type]: (state, action) => {
            console.log(action);
            // const token = action.payload;
            // const userData: IUserTokenData = JSON.parse(
            //     atob(token.split(".")[1])
            // );
            //
            // state.user = {
            //     ...state.user,
            //     token,
            //     login: userData.User.login,
            //     role: userData.User.role,
            //     isAuth: true,
            //     status: "idle",
            // };
        },
        /**
         * [authRegistration.pending.type]: (state, action) => {
         *             state.user = {
         *                 ...state.user,
         *                 status: "loading",
         *                 data: null,
         *                 error: null,
         *             };
         *         },
         *         [authRegistration.fulfilled.type]: (state, action) => {
         *             state.user = {
         *                 ...state.user,
         *                 status: "idle",
         *                 data: action.payload,
         *                 error: null,
         *             };
         *         },
         *         [authRegistration.rejected.type]: (state, action) => {
         *             state.user = {
         *                 ...state.user,
         *                 status: "idle",
         *                 data: null,
         *                 error: action.payload,
         *             };
         *         },
         *         // Login
         *         [authLogin.pending.type]: (state, action) => {
         *             state.user = {
         *                 ...state.user,
         *                 status: "loading",
         *                 data: null,
         *                 error: null,
         *             };
         *         },
         *         [authLogin.fulfilled.type]: (state, action) => {
         *             const token = action.payload;
         *             const userData: IUserTokenData = JSON.parse(
         *                 atob(token.split(".")[1])
         *             );
         *
         *             state.user = {
         *                 ...state.user,
         *                 token,
         *                 login: userData.User.login,
         *                 role: userData.User.role,
         *                 isAuth: true,
         *                 status: "idle",
         *             };
         *         },
         *         [authLogin.rejected.type]: (state, action) => {
         *             state.user = {
         *                 ...state.user,
         *                 status: "idle",
         *                 data: null,
         *                 error: action.payload,
         *             };
         *         },
         */
    },
});

export const { logOut, testLogin } = authSlice.actions;

export default authSlice.reducer;
