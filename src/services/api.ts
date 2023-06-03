import axios, { AxiosResponse } from "axios";
import AuthService from "@/services/auth.service";
import StoreService from "@/redux/store.service";

const $api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_KEY,
    timeout: 8000,
    // withCredentials: true,
});

$api.interceptors.request.use(config => {
    if (config.headers) {
        config.headers.Authorization = `Bearer ${
            StoreService.getState().auth.token
        }`;
    }

    return config;
});

$api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async error => {
        const originalRequest = { ...error.config };
        originalRequest.isRetry = true;
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config.isRetry
        ) {
            try {
                const { data } = await AuthService.refresh();

                // const { data: accessToken } = await $api.get("/api/refresh");
                localStorage.setItem("token", data.accessToken);

                return $api.request(originalRequest);
            } catch (e: any) {
                console.log("AUTH ERROR");
            }
        }
        throw error;
    }
);

export default $api;
