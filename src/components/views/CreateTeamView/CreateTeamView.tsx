import { Avatar } from "@/components/ui/Avatar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Dropdown } from "@/components/ui/Dropdown";
import { Input } from "@/components/ui/Input";
import styles from "./CreateTeamView.module.scss";

export const CreateTeamView = () => {
    const [dropdownLocal, setDropdownLocal] = useState("");

    const teamForm = useForm({
        mode: "onChange",
        defaultValues: {
            teamName: "",
            tag: "",
            linkSteam: "",
            linkTwitch: "",
            countryTeam: "",
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

    return (
        <div className={styles.item}>
            <div className={styles.title}>Создание команды</div>
            <div>
                <div className={styles.avatar}>
                    <Avatar />
                    <div>Добавить аватар команды</div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        Основная информация
                    </div>
                    <div className={styles.block}>
                        <div className={styles.input}>
                            <Input
                                label="Название"
                                {...teamForm.register("teamName")}
                            />
                        </div>
                        <div className={styles.input}>
                            <Input label="Тег" {...teamForm.register("tag")} />
                        </div>
                        <div className={styles.input}>
                            <Dropdown
                                label="Страна"
                                options={dropdownCountry}
                                value={dropdownLocal}
                                {...teamForm.register("countryTeam")}
                                onSelect={({ option }) =>
                                    setDropdownLocal(option.value)
                                }
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.wrapperTitle}>
                        Приглашение в команду
                    </div>
                </div>
                <div>
                    <div className={styles.wrapperTitle}>Ссылки</div>
                </div>
            </div>
        </div>
    );
};
