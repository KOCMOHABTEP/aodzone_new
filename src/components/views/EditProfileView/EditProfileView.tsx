import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { InputDatapicker } from "@/components/ui/Input/InputDatapicker";
import { useState } from "react";
import { Dropdown } from "@/components/ui/Dropdown";
import { useForm } from "react-hook-form";
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
            birthdayUser: "",
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
        <div className={styles.edit}>
            <div className={styles.title}>Редактирование профиля</div>
            <div>
                <div className={styles.editAvatar}>
                    <Avatar />
                </div>
                <div className={styles.wrapperContent}>
                    <div className={styles.left}>
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
                                selected={birthdayDate}
                                label="Дата рождения"
                                dateFormat="dd.MM.yyyy"
                                onChange={handleBirthdayDate}
                                name="birthdayUser"
                            />
                        </div>
                        <div className={styles.input}>
                            <Input
                                label="Ссылка на Steam"
                                {...profileForm.register("linkSteam")}
                            />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.input}>
                            <Input
                                label="Email / изменить"
                                {...profileForm.register("email")}
                            />
                        </div>
                        <div className={styles.input}>
                            <Input
                                label="Введите старый пароль"
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
                                label="Ссылка на Twitch"
                                {...profileForm.register("linkTwitch")}
                            />
                        </div>
                    </div>
                </div>

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
            </div>
            <div className={styles.button}>
                <Button text="Изменить данные" />
            </div>
        </div>
    );
};
