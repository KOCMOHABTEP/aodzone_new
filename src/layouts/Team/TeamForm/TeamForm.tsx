import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import { useState, useRef } from "react";
import Modal from "@components/Modal/Modal";
import styles from "./TeamForm.module.css";

interface TeamFormProps {
    teamFormVisible: boolean;
    handleCloseTeamModal: () => void;
}

const TeamForm = ({ teamFormVisible, handleCloseTeamModal }: TeamFormProps) => {
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

    console.log("teamForm:: render");
    return (
        <Modal
            title="СОЗДАТЬ КОМАНДУ"
            description="Начни добавлять друзей в команду уже сегодня!"
            visibility={teamFormVisible}
            onClose={handleCloseTeamModal}
        >
            <>
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
            </>
        </Modal>
    );
};

export default TeamForm;
