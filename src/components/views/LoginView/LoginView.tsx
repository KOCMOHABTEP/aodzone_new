import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Chekbox";
import cn from "classnames";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/store";
import { testLogin } from "@/redux/auth/auth.slice";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./LoginView.module.scss";

type LoginProcessType = "login" | "registration";

export const LoginView = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [loginProcess, setLoginProcess] = useState<LoginProcessType>("login");
    const loginForm = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const registrationForm = useForm({
        mode: "onChange",
        defaultValues: {
            nickname: "",
            email: "",
            password: "",
            passwordConfirm: "",
            agreement: false,
        },
    });

    const handleChangeProcess = (process: LoginProcessType) => {
        setLoginProcess(process);
    };

    const handleLogin = data => {
        console.log("Логин::handleLogin", { ...data });
        dispatch(testLogin());
        router.push("/");
    };

    const handleRegister = data => {
        console.log("Регистрация::handleRegister", { ...data });
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
                                label="Введите почту"
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
                                label="Введите ваш никнейм"
                                {...registrationForm.register("nickname", {
                                    required: "Поле должно быть заполнено",
                                })}
                                error={
                                    registrationForm.formState.errors.nickname
                                        ?.message
                                }
                            />
                        </div>
                        <div className={styles.input}>
                            <Input
                                label="Введите вашу почту"
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
                                label="Придумайте пароль"
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
                                {...registrationForm.register(
                                    "passwordConfirm",
                                    {
                                        required: "Поле должно быть заполнено",
                                    }
                                )}
                                error={
                                    registrationForm.formState.errors
                                        .passwordConfirm?.message
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
                        <Link href="/profile/edit">
                            <a className={styles.button}>
                                <Button
                                    text="Зарегистрироваться"
                                    onClick={registrationForm.handleSubmit(
                                        handleRegister
                                    )}
                                    disabled={
                                        !registrationForm.formState.isValid
                                    }
                                    buttonClassName={styles.btn}
                                />
                            </a>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};
