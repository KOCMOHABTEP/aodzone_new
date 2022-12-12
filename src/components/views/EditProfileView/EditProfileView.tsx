import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { InputDatapicker } from "@/components/ui/Input/InputDatapicker";
import { useState } from "react";
import { Dropdown } from "@/components/ui/Dropdown";
import { useForm } from "react-hook-form";
import Link from "next/link";
import styles from "./EditProfileView.module.scss";

export const EditProfileView = () => {
    const [birthdayDate, setBirthdayDate] = useState(null);
    const [dropdownLocal, setDropdownLocal] = useState("");

    const profileForm = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            birthdayDate: "",
            linkSteam: "",
            linkTwitch: "",
            countryUser: "",
        },
    });

    const dropdownCountry = [
        {
            label: "Россия",
            value: "RU",
        },
        {
            label: "Турция",
            value: "TR",
        },
        {
            label: "Белоруссия",
            value: "BY",
        },
    ];

    const handleBirthdayDate = data => {
        setBirthdayDate(data);
    };

    return (
        <div className={styles.item}>
            <div className={styles.title}>Редактирование профиля</div>
            <div className={styles.wrapper}>
                <div className={styles.avatar}>
                    <Avatar />
                    <div>Загрузить аватар</div>
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.wrapperContent}>
                            <div className={styles.profileTitle}>
                                Основная информация
                            </div>
                            <div className={styles.block}>
                                <div className={styles.input}>
                                    <Input
                                        label="Имя"
                                        {...profileForm.register("firstname")}
                                    />
                                </div>
                                <div className={styles.input}>
                                    <Input
                                        label="Фамилия"
                                        {...profileForm.register("lastname")}
                                    />
                                </div>
                                <div className={styles.input}>
                                    <InputDatapicker
                                        showPopperArrow={true}
                                        selected={birthdayDate}
                                        label="Дата рождения"
                                        dateFormat="dd.MM.yyyy"
                                        onChange={handleBirthdayDate}
                                        name="birthdayDate"
                                    />
                                </div>
                                <div className={styles.input}>
                                    <Input
                                        label="Email / изменить"
                                        {...profileForm.register("email")}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.wrapperContent}>
                            <div className={styles.profileTitle}>Пароль</div>
                            <div className={styles.block}>
                                <div className={styles.input}>
                                    <Input
                                        label="Введите текущий пароль"
                                        {...profileForm.register("password")}
                                    />
                                </div>
                                <div className={styles.input}>
                                    <Input
                                        label="Введите новый пароль"
                                        {...profileForm.register("password")}
                                    />
                                </div>
                                <div className={styles.input}>
                                    <Input
                                        label="Повторите новый пароль"
                                        {...profileForm.register("password")}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.wrapperContent}>
                            <div className={styles.profileTitle}>
                                Локация / Ссылки
                            </div>
                            <div className={styles.block}>
                                <div className={styles.input}>
                                    <Dropdown
                                        label="Страна"
                                        options={dropdownCountry}
                                        value={dropdownLocal}
                                        {...profileForm.register("countryUser")}
                                        onSelect={({ option }) =>
                                            setDropdownLocal(option.value)
                                        }
                                    />
                                </div>
                                <div className={styles.input}>
                                    <Input
                                        label="Ссылка на Twitch"
                                        {...profileForm.register("linkTwitch")}
                                    />
                                </div>
                                <div className={styles.input}>
                                    <Input
                                        label="Ссылка на Steam"
                                        {...profileForm.register("linkSteam")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wrapperButton}>
                <div className={styles.button}>
                    <Link href="/profile">
                        <a>
                            <Button
                                buttonClassName={styles.buttonBtn}
                                text="Вернуться в профиль"
                            />
                        </a>
                    </Link>
                </div>
                <div className={styles.button}>
                    <Button
                        buttonClassName={styles.buttonBtn}
                        text="Сохранить изменения"
                    />
                </div>
            </div>
        </div>
    );
};
