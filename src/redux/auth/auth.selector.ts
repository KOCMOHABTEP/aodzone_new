import { RootState } from "@/redux/store";

export const getUserAuth = (state: RootState) => state.auth.isAuth;
