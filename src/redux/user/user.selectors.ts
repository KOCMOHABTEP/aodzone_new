import { RootState } from "@/redux/store";

export const getUser = (state: RootState) => state.user;

export const getUserRole = (state: RootState) => state.user.role;

export const isSuperUser = (state: RootState) => state.user.role === "ADMIN";
//
// export const getUserNickName = (state: RootState) => state.user.nickName;
//
// export const getUserFirstName = (state: RootState) => state.user.firstName;
//
// export const getUserLastName = (state: RootState) => state.user.lastName;
//
// export const getUserEmail = (state: RootState) => state.user.email;
//
// export const getUserBirthdayDate = (state: RootState) =>
//     state.user.birthdayDate;
//
// export const getUserLinkSteam = (state: RootState) => state.user.linkSteam;
//
// export const getUserLinkTwitch = (state: RootState) => state.user.linkTwitch;
//
// export const getUserCountryUser = (state: RootState) => state.user.countryUser;
