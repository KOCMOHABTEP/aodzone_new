export type IUser = {
  firstName: string;
  lastName: string;
  username: string;
  nickname: string;
  role: 'ADMIN' | 'USER';
  email: string;
  birthdayDate: string;
  linkSteam: string;
  linkTwitch: string;
  createdDate: string;
  countryUser: string;
};
