import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { InputDatapicker } from "@/components/ui/Input/InputDatapicker";
import { useState } from "react";
import { Dropdown } from "@/components/ui/Dropdown";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { MyEditor } from "@/components/ui/MyEditor";
import styles from "./EditProfileView.module.scss";

export const EditProfileView = () => {
    const [birthdayDate, setBirthdayDate] = useState(null);
    const [dropdownLocal, setDropdownLocal] = useState("");

    const profileForm = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
            nickName: "",
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

    // onScaleChange = scaleChangeEvent => {
    //     const scaleValue = parseFloat(scaleChangeEvent.target.value);
    //     setState({ scaleValue });
    // };

    return (
        <div className={styles.item}>
            <div className={styles.title}>Редактирование профиля</div>
            <div className={styles.wrapper}>
                <div className={styles.avatar}>
                    <div className={styles.avatarTitle}>
                        Добавить / изменить аватар
                    </div>
                    <MyEditor img="data:image/jpeg;base64,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" />
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
                                        label="Никнейм"
                                        {...profileForm.register("nickName")}
                                    />
                                </div>
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
                            </div>
                        </div>
                        <div className={styles.wrapperContent}>
                            <div className={styles.profileTitle}>
                                Пароль / Email{" "}
                            </div>
                            <div className={styles.block}>
                                <div className={styles.input}>
                                    <Input
                                        label="Email / изменить"
                                        {...profileForm.register("email")}
                                    />
                                </div>
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
                        <Button
                            buttonClassName={styles.buttonBtn}
                            text="Вернуться в профиль"
                        />
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
