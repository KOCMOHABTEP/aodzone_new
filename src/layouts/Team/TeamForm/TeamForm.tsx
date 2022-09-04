import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import { useState } from "react";
import styles from "./TeamForm.module.css";

const TeamForm = () => {
    const [formData, setFormData] = useState({
        teamName: "",
        teamTag: "",
        teamAddPlayer: "",
        teamTagCommand: "",
    });

    const handleOnChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className={styles.item}>
            <div className={styles.itemClose}>x</div>
            <div className={styles.itemHead}>
                <div className={styles.itemHeadTitle}>СОЗДАТЬ КОМАНДУ</div>
                <div className={styles.itemHeadDescription}>
                    Начни добавлять друзей в команду уже сегодня!
                </div>
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemContentField}>
                    <Input
                        name="teamName"
                        label="Название команды"
                        value={formData.teamName}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={styles.itemContentField}>
                    <Input
                        name="teamTag"
                        label="Тег команды"
                        value={formData.teamTag}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={styles.itemContentField}>
                    <Input
                        name="teamAddPlayer"
                        label="Добавить игроков"
                        value={formData.teamAddPlayer}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={styles.itemContentField}>
                    <Input
                        name="teamTagCommand"
                        label="Добавить игроков"
                        value={formData.teamTagCommand}
                        onChange={handleOnChange}
                    />
                </div>
            </div>
            <div className={styles.itemButton}>
                <Button
                    buttonClassName={styles.buttonAddTeamBtn}
                    text="Добавить команду"
                />
            </div>
        </div>
    );
};

export default TeamForm;
