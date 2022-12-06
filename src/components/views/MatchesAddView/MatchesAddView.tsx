import { Input } from "@/components/ui/Input";
import { Dropdown } from "@/components/ui/Dropdown";
import { useState } from "react";
import styles from "./MatchesAddView.module.scss";

export const MatchesAddView = () => {
    const [dropdownType, setDropdownType] = useState("");

    const dropdownMatchType = [
        {
            label: "Одиночная игра",
            value: "RU",
        },
        {
            label: "Коммандная игра ",
            value: "TR",
        },
    ];

    return (
        <div>
            <div>Заполнить информацию о матче</div>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <Dropdown
                        name="Выберите матч"
                        label="Выберите матч"
                        options={dropdownMatchType}
                        onSelect={({ option }) => setDropdownType(option.value)}
                    />
                </div>
                <div className={styles.right}>
                    <Input />
                </div>
            </div>
        </div>
    );
};
