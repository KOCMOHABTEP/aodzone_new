import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthLogin, IAuthRegistration } from "@/types/IAuth";
import AuthService from "@/services/auth.service";
import { AuthResponse } from "@/types/AuthResponse";
import {
    AuthLoginParams,
    AuthRegistrationParams,
} from "@/redux/auth/auth.types";

export const registration = createAsyncThunk<
    AuthResponse,
    AuthRegistrationParams
>(
    "auth/registration",
    async ({ email, password, username }, { rejectWithValue }) => {
        try {
            const { data } = await AuthService.registration({
                email,
                password,
                username,
            });

            return data;
        } catch (error: any) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk<AuthResponse, AuthLoginParams>(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const { data } = await AuthService.login({
                email,
                password,
            });

            return data;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);
