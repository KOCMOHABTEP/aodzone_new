import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "@/redux/auth/auth.action";

export interface AuthState {
    isAuth: boolean;
    user?: any;
    username: string | null;
    token: string | null;
}

const initialState: AuthState = {
    isAuth: false,
    user: null,
    username: null,
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: state => {
            state.user = null;
            state.token = null;
        },
        setAccessToken: (
            state,
            action: PayloadAction<{ accessToken: string }>
        ) => {
            state.token = action.payload.accessToken;
        },
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            const token = action.payload.accessToken;
            const user = JSON.parse(atob(token.split(".")[1]));

            state.token = token;
            state.user = user;
            state.isAuth = true;
        });
    },
    // extraReducers: {
    //     [login.fulfilled.type]: (state, action) => {
    //         const token = action.payload.accessToken;
    //         const user = JSON.parse(atob(token.split(".")[1]));
    //
    //         state.token = token;
    //         state.user = user;
    //         state.isAuth = true;
    //     },
    //     /**
    //      * [authRegistration.pending.type]: (state, action) => {
    //      *             state.user = {
    //      *                 ...state.user,
    //      *                 status: "loading",
    //      *                 data: null,
    //      *                 error: null,
    //      *             };
    //      *         },
    //      *         [authRegistration.fulfilled.type]: (state, action) => {
    //      *             state.user = {
    //      *                 ...state.user,
    //      *                 status: "idle",
    //      *                 data: action.payload,
    //      *                 error: null,
    //      *             };
    //      *         },
    //      *         [authRegistration.rejected.type]: (state, action) => {
    //      *             state.user = {
    //      *                 ...state.user,
    //      *                 status: "idle",
    //      *                 data: null,
    //      *                 error: action.payload,
    //      *             };
    //      *         },
    //      *         // Login
    //      *         [authLogin.pending.type]: (state, action) => {
    //      *             state.user = {
    //      *                 ...state.user,
    //      *                 status: "loading",
    //      *                 data: null,
    //      *                 error: null,
    //      *             };
    //      *         },
    //      *         [authLogin.fulfilled.type]: (state, action) => {
    //      *             const token = action.payload;
    //      *             const userData: IUserTokenData = JSON.parse(
    //      *                 atob(token.split(".")[1])
    //      *             );
    //      *
    //      *             state.user = {
    //      *                 ...state.user,
    //      *                 token,
    //      *                 login: userData.User.login,
    //      *                 role: userData.User.role,
    //      *                 isAuth: true,
    //      *                 status: "idle",
    //      *             };
    //      *         },
    //      *         [authLogin.rejected.type]: (state, action) => {
    //      *             state.user = {
    //      *                 ...state.user,
    //      *                 status: "idle",
    //      *                 data: null,
    //      *                 error: action.payload,
    //      *             };
    //      *         },
    //      */
    // },
});

export const { logOut, testLogin } = authSlice.actions;

export default authSlice.reducer;
