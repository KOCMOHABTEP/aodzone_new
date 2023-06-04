import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthLogin, IAuthRegistration } from "@/types/IAuth";
import AuthService from "@/services/auth.service";
import { AuthResponse } from "@/types/AuthResponse";

interface AuthRegistrationParams {
    username: string;
    email: string;
    password: string;
}

interface AuthLoginParams {
    email: string;
    password: string;
}

export const registration = createAsyncThunk<
    AuthResponse,
    AuthRegistrationParams
>("auth/registration", async params => {
    const { data } = await AuthService.registration(params);
    return data;
});

export const login = createAsyncThunk<AuthResponse, AuthLoginParams>(
    "auth/login",
    async ({ email, password }) => {
        try {
            const { data } = await AuthService.login({
                email,
                password,
            });

            return data;
        } catch (error: any) {
            return error;
        }
    }
);
