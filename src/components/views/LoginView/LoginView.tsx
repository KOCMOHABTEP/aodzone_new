import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Chekbox";
import cn from "classnames";
import { useForm, Controller } from "react-hook-form";
import styles from "./LoginView.module.scss";

type LoginProcessType = "login" | "registration";

export const LoginView = () => {
    const [loginProcess, setLoginProcess] = useState<LoginProcessType>("login");
    const {
        register,
        control,
        getValues,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "yuhjhj",
        },
    });
    console.log(control);

    const handleChangeProcess = (process: LoginProcessType) => {
        setLoginProcess(process);
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
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        label="Введите почту"
                                        value={field.value}
                                        {...field}
                                    />
                                )}
                            />
                        </div>
                        <div className={styles.input}>
                            <Input
                                name="password"
                                label="Введите пароль"
                                value=""
                            />
                        </div>
                        <div className={styles.button}>
                            <Button text="Войти" buttonClassName={styles.btn} />
                        </div>
                    </>
                )}
                {loginProcess === "registration" && (
                    <>
                        <div className={styles.input}>
                            <Input
                                name="nickname"
                                label="Введите ваш никмейн"
                                value=""
                            />
                        </div>
                        <div className={styles.input}>
                            <Input
                                name="email"
                                label="Введите вашу почту"
                                value=""
                            />
                        </div>
                        <div className={styles.input}>
                            <Input
                                name="password"
                                label="Придумайте пароль"
                                value=""
                            />
                        </div>
                        <div className={styles.input}>
                            <Input
                                name="passwordConfirm"
                                label="Повторите пароль"
                                value=""
                            />
                        </div>
                        <div className={styles.checkbox}>
                            <Checkbox label="Согласен с соглашением AODZONE" />
                        </div>

                        <div className={styles.button}>
                            <Button
                                text="Зарегистрироваться"
                                buttonClassName={styles.btn}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
