import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import styles from "./LoginView.module.scss";

type LoginProcessType = "login" | "registration";

export const LoginView = () => {
    const [loginProcess, setLoginProcess] = useState<LoginProcessType>("login");

    const handleChangeProcess = (process: LoginProcessType) => {
        setLoginProcess(process);
    };

    return (
        <div>
            <div className={styles.form}>
                <div className={styles.item}>
                    <div className={styles.wrapper}>
                        <div
                            className={styles.title}
                            onClick={() => handleChangeProcess("registration")}
                        >
                            Зарегистрироваться
                        </div>
                        /
                        <div
                            className={styles.title}
                            onClick={() => handleChangeProcess("login")}
                        >
                            Войти
                        </div>
                    </div>
                    {loginProcess === "login" && null}
                    {loginProcess === "registration" && (
                        <>
                            <Input
                                name="Никнейм"
                                label="Введите ваш никмейн"
                                value=""
                            />
                            <Input
                                name="Почта"
                                label="Введите вашу почту"
                                value=""
                            />
                            <Input
                                name="Пароль"
                                label="Придумайте пароль"
                                value=""
                            />
                            <Input
                                name="Почта"
                                label="Повторите пароль"
                                value=""
                            />
                            <Button text="Зарегистрироваться" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
