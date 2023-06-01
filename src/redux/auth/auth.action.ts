import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "@/services/api";
import { IUser } from "@/types/IUser";
import { IAuthLogin, IAuthRegistration } from "@/types/IAuth";

export const registration = createAsyncThunk(
    "auth/registration",
    async (params: IAuthRegistration) => {
        const { data } = await $api.post<IUser>(
            `${process.env.NEXT_PUBLIC_API_KEY}/auth/register`,
            params
        );
        return data;
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (params: IAuthLogin, { rejectWithValue }) => {
        try {
            const { data } = await $api.post<{ token: string }>(
                `${process.env.NEXT_PUBLIC_API_KEY}/auth/login`,
                params
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
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
