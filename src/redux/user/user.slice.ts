import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
    role: "ADMIN";
    firstName: string;
    lastName: string;
    nickName: string;
    email: string;
    birthdayDate: string;
    linkSteam: string;
    linkTwitch: string;
    createdDate: string;
    countryUser: string;
}

const initialState: IUserState = {
    role: "ADMIN",
    firstName: "Вика",
    lastName: "Смирнова",
    nickName: "Viktorina",
    email: "test@test.ru",
    birthdayDate: "01.01.1990",
    linkSteam: "",
    linkTwitch: "",
    createdDate: "12.12.2022",
    countryUser: "RU",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export default userSlice.reducer;
