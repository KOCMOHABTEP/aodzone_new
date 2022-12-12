import { ContentEditor } from "@/components/ui/Editor";
import { Dropdown } from "@/components/ui/Dropdown";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
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
            <div className={styles.title}>Предложить новость</div>
            <div className={styles.dropdown}>
                <Dropdown
                    name="titleGame"
                    label="Выберите игру:"
                    options={dropdownOptions}
                    value={dropdownValue}
                    onSelect={({ option }) => setDropdownValue(option.value)}
                />
            </div>
            <Input label="Название " />
            <Input label="Название отображаемое в URL" />
            <Textarea label="Краткое описание" value="" onChange="" />
            <ContentEditor />
            <Input label="Иконка новости" />
            <Input label="Ссылка на картинку для главной статей" />
            <Input label="Ссылка на источник материала" />
            <div>Автор</div>
            <div>
                <Button text="Отменить" />
                <Button text="Отправить" />
            </div>
        </div>
    );
};
