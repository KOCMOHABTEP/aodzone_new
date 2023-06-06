import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Chekbox";
import cn from "classnames";
import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/store";
import { logout, testLogin } from "@/redux/auth/auth.slice";
import { useRouter } from "next/router";
import Link from "next/link";
import { login, registration } from "@/redux/auth/auth.action";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./LoginView.module.scss";

type LoginProcessType = "login" | "registration";

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

    const handleChangeProcess = (process: LoginProcessType) => {
        setLoginProcess(process);
    };

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

    return (
        <div className={styles.form}>
            <div className={styles.item}>
                <div className={styles.wrapper}>
                    <span
                        className={cn(styles.title, {
                            [styles.titleActive]: loginProcess === "login",
                        })}
                        onClick={() => handleChangeProcess("login")}
                    >
                        Войти
                    </span>
                    <span> / </span>
                    <span
                        className={cn(styles.title, {
                            [styles.titleActive]:
                                loginProcess === "registration",
                        })}
                        onClick={() => handleChangeProcess("registration")}
                    >
                        Зарегистрироваться
                    </span>
                </div>
                {loginProcess === "login" && (
                    <>
                        <div className={styles.input}>
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
                        <div className={styles.input}>
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
                        <div className={styles.button}>
                            <Button
                                text="Войти"
                                onClick={loginForm.handleSubmit(handleLogin)}
                                disabled={!loginForm.formState.isValid}
                                buttonClassName={styles.btn}
                            />
                        </div>
                    </>
                )}
                {loginProcess === "registration" && (
                    <>
                        <div className={styles.input}>
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
                        <div className={styles.input}>
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
                        <div className={styles.input}>
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
                        <div className={styles.input}>
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
                        <div className={styles.checkbox}>
                            <Checkbox
                                label="Согласен с соглашением AODZONE"
                                {...registrationForm.register("agreement", {
                                    required: "Поле должно быть заполнено",
                                })}
                            />
                        </div>
                        <Button
                            text="Зарегистрироваться"
                            onClick={registrationForm.handleSubmit(
                                handleRegister
                            )}
                            disabled={!registrationForm.formState.isValid}
                            buttonClassName={styles.button}
                        />
                    </>
                )}
            </div>
        </div>
    );
};
