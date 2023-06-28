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
    password2: string;
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
    });
    const registrationForm = useForm<RegistrationFormValues>({
        mode: "onChange",
        defaultValues: {
            username: "",
            email: "",
            password: "",
            password2: "",
            agreement: false,
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
            await dispatch(registration({ username, email, password }));
            await dispatch(login({ email, password }));
            await router.push("/profile");
        } catch (e) {
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
                                {...registrationForm.register("password2", {
                                    required: "Поле должно быть заполнено",
                                })}
                                error={
                                    registrationForm.formState.errors.password2
                                        ?.message
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
                <div className={styles.containerColumn}>
                    {renderProcessForm()}
                </div>
                <div className={styles.containerColumn}>
                    <img
                        src="/illustrations/illustration-test2.png"
                        className={styles.contentImage}
                    />
                    <div className={styles.contentImageItem} />
                </div>
            </div>
        </div>
    );
};
