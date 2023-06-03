import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthLogin, IAuthRegistration } from "@/types/IAuth";
import AuthService from "@/services/auth.service";
import { AuthResponse } from "@/types/AuthResponse";

interface AuthRegistrationParams {
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

/**
 *
 * export const authRegistration = createAsyncThunk(
 *     "auth/authRegistration",
 *     async (params: IAuthRegistration) => {
 *         const { data } = await $publicApi.post<IBasicResponse<IUser>>(
 *             `${process.env.NEXT_PUBLIC_API_KEY}/api/auth/signUp`,
 *             params
 *         );
 *         return data.data;
 *     }
 * );
 *
 * export const adminAuthLogin = createAsyncThunk(
 *     "auth/adminAuthLogin",
 *     async (params: IAuthLogin, { rejectWithValue }) => {
 *         try {
 *             const { data } = await $publicApi.post<
 *                 IBasicResponse<{ token: string }>
 *             >(`${process.env.NEXT_PUBLIC_API_KEY}/api/auth/signIn`, params);
 *             return data.data;
 *         } catch (error) {
 *             return rejectWithValue(error.response.data);
 *         }
 *     }
 * );
 *
 * export const authLogin = createAsyncThunk(
 *     "auth/authLogin",
 *     async (params: IAuthLogin, { rejectWithValue }) => {
 *         try {
 *             const { data } = await $publicApi.post<
 *                 IBasicResponse<{ token: string }>
 *             >(`${process.env.NEXT_PUBLIC_API_KEY}/api/auth/signIn`, params);
 *             return data.data;
 *         } catch (error) {
 *             return rejectWithValue(error.response.data);
 *         }
 *     }
 * );
 *
 *
 */
