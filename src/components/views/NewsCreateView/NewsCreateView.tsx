import { ContentEditor } from "@/components/ui/Editor";
import { Dropdown } from "@/components/ui/Dropdown";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import styles from "./NewsCreateView.module.scss";

export const NewsCreateView = () => {
    const [dropdownValue, setDropdownValue] = useState("");

    const dropdownOptions = [
        {
            label: "Counter Strike",
            value: "cs",
        },
        {
            label: "Call of Duty",
            value: "cod",
        },
    ];
    return (
        <div>
            <div className={styles.dropdown}>
                <Dropdown
                    name="titleGame"
                    label="Выберите игру:"
                    options={dropdownOptions}
                    value={dropdownValue}
                    onSelect={({ option }) => setDropdownValue(option.value)}
                />
            </div>
            <Input label="Название материала" />
            <Input label="Название отображаемое в URL" />
            <ContentEditor />
        </div>
    );
};
