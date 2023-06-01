import axios, { AxiosError, AxiosResponse } from "axios";
import StoreService from "@/redux/store.service";
import { logOut } from "@/redux/auth/auth.slice";

export const config = {
    logGeneral: false,
    logNetworkMessages: false,
};

const $api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_KEY,
    timeout: 8000,
    // withCredentials: true,
});

$api.interceptors.request.use(
    requestConfig => {
        if (config.logNetworkMessages) {
            console.log("[Request interceptor]", requestConfig);
        }

        return requestConfig;
    },
    error => Promise.reject(error)
);

$api.interceptors.response.use(
    (response: AxiosResponse) => {
        if (config.logNetworkMessages) {
            console.log("[Response interceptor]", response);
        }

        return response;
    },
    (error: AxiosError) => {
        // const originalRequest = error.config;
        // if (error.response.status === 401 && error.config && !error.config._isRetry) {
        //     originalRequest._isRetry = true;
        //     try {
        //         const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
        //         localStorage.setItem('token', response.data.accessToken);
        //         return $api.request(originalRequest);
        //     } catch (error) {
        //         console.log('Не авторизован')
        //     }
        // }
        // throw error;

        // On unauthorized error logout and navigate to AuthStack
        if (error?.response?.status === 401) {
            StoreService.dispatch(logOut());
            // StoreService.dispatch()
            // StoreService.dispatch(logOut());
        }

        if (config.logNetworkMessages) {
            console.log("[Error interceptor]", error);
        }

        return Promise.reject(error);
    }
);

export default $api;
