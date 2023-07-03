import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Chekbox";
import cn from "classnames";
import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/router";
import { login, registration } from "@/redux/auth/auth.action";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormError } from "@/components/ui/Form/FormError";
import styles from "./LoginView.module.scss";

type LoginProcessType = "login" | "registration" | "forget_password";

type LoginFormValues = {
    email: string;
    password: string;
};

type RegistrationFormValues = {
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    agreement: boolean;
};

type ForgetPasswordFormValues = {
    email: string;
};

export const LoginView = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [loginProcess, setLoginProcess] = useState<LoginProcessType>("login");

    const loginFormValidationSchema = Yup.object().shape({
        email: Yup.string().required("Укажите Email").email("Укажите Email"),
        password: Yup.string()
            .required("Введите пароль")
            .min(6, "Минимум 6 символов")
            .max(40, "Пароль не должен превышать 40 символов"),
    });
    const loginForm = useForm<LoginFormValues>({
        mode: "onChange",
        defaultValues: {
            email: "test@test.ru",
            password: "12345678",
        },
        resolver: yupResolver(loginFormValidationSchema),
    });

    const registrationFormValidationSchema = Yup.object().shape({
        username: Yup.string().required("Укажите имя пользователя"),
        email: Yup.string().required("Укажите Email").email("Укажите Email"),
        password: Yup.string()
            .required("Введите пароль")
            .min(6, "Минимум 6 символов")
            .max(40, "Пароль не должен превышать 40 символов"),
        passwordConfirmation: Yup.string()
            .required("Введите пароль")
            .oneOf([Yup.ref("password")], "Пароли не совпадают"),
        agreement: Yup.boolean()
            .required("Необходимо согласие")
            .oneOf([true], "Необходимо согласие"),
    });
    const registrationForm = useForm<RegistrationFormValues>({
        mode: "onChange",
        defaultValues: {
            username: "kocmohabtep",
            email: "test@test2.ru",
            password: "b5440b",
            passwordConfirmation: "b5440b",
            agreement: true,
        },
        resolver: yupResolver(registrationFormValidationSchema),
    });

    const forgetPasswordFormValidationSchema = Yup.object().shape({
        email: Yup.string().required("Укажите Email").email("Укажите Email"),
    });
    const forgetPasswordForm = useForm<ForgetPasswordFormValues>({
        mode: "onChange",
        defaultValues: {
            email: "",
        },
        resolver: yupResolver(forgetPasswordFormValidationSchema),
    });

    const handleLogin: SubmitHandler<LoginFormValues> = async data => {
        console.log("Логин::handleLogin", { ...data });

        const { email, password } = data;
        try {
            await dispatch(login({ email, password })).unwrap();
            await router.push("/profile");
        } catch (e) {
            console.log(e);
            toast.error("Произошла ошибка");
        }
    };

    const handleRegister: SubmitHandler<
        RegistrationFormValues
    > = async data => {
        console.log("Регистрация::handleRegister", { ...data });
        const { username, email, password } = data;
        try {
            await dispatch(
                registration({ username, email, password })
            ).unwrap();
            await dispatch(login({ email, password }));
            toast.success(`${username} добро пожаловать на Aodzone`);
            await router.push("/profile");
        } catch (e) {
            console.log(e);
            registrationForm.setError("email", {
                type: "custom",
                message: "Пользователь с таким email уже существует",
            });
            toast.error("Ошибка регистрации");
        }
    };

    const handleForgetPasswordLogin: SubmitHandler<
        ForgetPasswordFormValues
    > = async data => {
        console.log("Забыли пароль::handleForgetPasswordLogin", { ...data });

        // const { email} = data;

        // try {
        //     await dispatch(login({ email, password })).unwrap();
        //     await router.push("/profile");
        // } catch (e) {
        //     console.log(e);
        //     toast.error("Произошла ошибка");
        // }
    };

    const generateImagePathByType = () => {
        switch (loginProcess) {
            case "login":
                return "/illustrations/illustration-test2.png";
            case "forget_password":
                return "/illustrations/illustration-2.png";
            case "registration":
                return "/illustrations/illustration-3.png";
            default:
                return "";
        }
    };

    const renderProcessForm = () => {
        if (loginProcess === "login") {
            return (
                <div className={styles.content}>
                    <div className={styles.contentHead}>
                        <div className={styles.contentHeadTitle}>
                            С возвращением!
                        </div>
                        <div className={styles.contentHeadDescription}>
                            Войти в аккаунт
                        </div>
                    </div>

                    <div className={styles.contentBody}>
                        <div className={styles.contentRow}>
                            <Input
                                label="Эл. почта"
                                {...loginForm.register("email", {
                                    required: "Поле должно быть заполнено",
                                })}
                                error={
                                    loginForm.formState.errors.email?.message
                                }
                            />
                        </div>
                        <div className={styles.contentRow}>
                            <Input
                                label="Введите пароль"
                                {...loginForm.register("password", {
                                    required: "Поле должно быть заполнено",
                                })}
                                error={
                                    loginForm.formState.errors.password?.message
                                }
                            />
                        </div>
                        <div className={styles.contentRow}>
                            <div className={styles.contentInfo}>
                                <a
                                    className={styles.contentInfoLink}
                                    onClick={() =>
                                        setLoginProcess("forget_password")
                                    }
                                >
                                    Забыли пароль?
                                </a>
                            </div>
                        </div>
                        <div className={styles.contentRow}>
                            <Button
                                text="Войти"
                                onClick={loginForm.handleSubmit(handleLogin)}
                                disabled={!loginForm.formState.isValid}
                                buttonClassName={styles.contentButton}
                            />
                        </div>
                        <div className={styles.contentRow}>
                            <div className={styles.contentFooter}>
                                <span className={styles.contentFooterCaption}>
                                    Нет аккаунта?
                                </span>
                                <span>&nbsp;</span>
                                <a
                                    className={styles.contentFooterLink}
                                    onClick={() =>
                                        setLoginProcess("registration")
                                    }
                                >
                                    Регистрация
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (loginProcess === "registration") {
            return (
                <div className={styles.content}>
                    <div className={styles.contentHead}>
                        <div className={styles.contentHeadTitle}>
                            Регистрация
                        </div>
                        <div className={styles.contentHeadDescription}>
                            Создать аккаунт
                        </div>
                    </div>

                    <div className={styles.contentBody}>
                        <div className={styles.contentRow}>
                            <Input
                                label="Имя пользователя"
                                {...registrationForm.register("username", {
                                    required: "Поле должно быть заполнено",
                                })}
                                error={
                                    registrationForm.formState.errors.username
                                        ?.message
                                }
                            />
                        </div>

                        <div className={styles.contentRow}>
                            <Input
                                label="Эл. почта"
                                {...registrationForm.register("email", {
                                    required: "Поле должно быть заполнено",
                                })}
                                error={
                                    registrationForm.formState.errors.email
                                        ?.message
                                }
                            />
                        </div>

                        <div className={styles.contentRow}>
                            <Input
                                label="Пароль"
                                type="password"
                                {...registrationForm.register("password", {
                                    required: "Поле должно быть заполнено",
                                })}
                                error={
                                    registrationForm.formState.errors.password
                                        ?.message
                                }
                            />
                        </div>

                        <div className={styles.contentRow}>
                            <Input
                                label="Подтвердите пароль"
                                type="password"
                                {...registrationForm.register(
                                    "passwordConfirmation",
                                    {
                                        required: "Поле должно быть заполнено",
                                    }
                                )}
                                error={
                                    registrationForm.formState.errors
                                        .passwordConfirmation?.message
                                }
                            />
                        </div>

                        <div className={styles.contentRow}>
                            <Checkbox
                                label="Согласен с соглашением AODZONE"
                                {...registrationForm.register("agreement", {
                                    required: "Поле должно быть заполнено",
                                })}
                            />
                        </div>

                        <div className={styles.contentRow}>
                            <Button
                                text="Зарегистрироваться"
                                onClick={registrationForm.handleSubmit(
                                    handleRegister
                                )}
                                disabled={!registrationForm.formState.isValid}
                                buttonClassName={styles.contentButton}
                            />
                        </div>
                        <div className={styles.contentRow}>
                            <div className={styles.contentFooter}>
                                <span className={styles.contentFooterCaption}>
                                    Уже есть аккаунт?
                                </span>
                                <span>&nbsp;</span>
                                <a
                                    className={styles.contentFooterLink}
                                    onClick={() => setLoginProcess("login")}
                                >
                                    Авторизоваться
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (loginProcess === "forget_password") {
            return (
                <div className={styles.content}>
                    <div className={styles.contentHead}>
                        <div className={styles.contentHeadTitle}>
                            Забыли пароль?
                        </div>
                        <div className={styles.contentHeadDescription}>
                            Не волнуйтесь, мы пришлем все инструкции для
                            восстановления пароля
                        </div>
                    </div>

                    <div className={styles.contentBody}>
                        <div className={styles.contentRow}>
                            <Input
                                label="Эл. почта"
                                {...forgetPasswordForm.register("email", {
                                    required: "Поле должно быть заполнено",
                                })}
                                error={
                                    forgetPasswordForm.formState.errors.email
                                        ?.message
                                }
                            />
                        </div>

                        <div className={styles.contentRow}>
                            <Button
                                text="Восстановить пароль"
                                onClick={forgetPasswordForm.handleSubmit(
                                    handleForgetPasswordLogin
                                )}
                                disabled={!forgetPasswordForm.formState.isValid}
                                buttonClassName={styles.contentButton}
                            />
                        </div>
                        <div className={styles.contentRow}>
                            <Button
                                text="Вернуться к авторизации"
                                secondary={true}
                                onClick={() => setLoginProcess("login")}
                                buttonClassName={styles.contentButton}
                            />
                        </div>
                        <div className={styles.contentRow}>
                            <div className={styles.contentFooter}>
                                <span className={styles.contentFooterCaption}>
                                    Нет аккаунта?
                                </span>
                                <span>&nbsp;</span>
                                <a
                                    className={styles.contentFooterLink}
                                    onClick={() =>
                                        setLoginProcess("registration")
                                    }
                                >
                                    Регистрация
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.containerRow}>
                    <div className={styles.containerHeader}>
                        <div className={styles.containerHeaderAvatar}>
                            <img
                                src={generateImagePathByType()}
                                className={styles.containerHeaderAvatarImage}
                            />
                        </div>
                        <div className={styles.containerHeaderAvatarBackdrop} />
                    </div>
                </div>
                <div className={styles.containerRow}>{renderProcessForm()}</div>
            </div>
        </div>
    );
};
