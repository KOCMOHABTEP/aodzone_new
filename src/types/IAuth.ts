export type IAuthRegistration = {
    login: string;
    password: string;
    verificationCode: string;
};

export type IAuthLogin = {
    email: string;
    // login: string;
    password: string;
};
