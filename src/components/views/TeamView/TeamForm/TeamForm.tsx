import Button from "@/components/ui/Button/Button";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import styles from "./TeamForm.module.scss";

interface TeamFormProps {
    teamFormVisible: boolean;
    handleCloseTeamModal: () => void;
}

export const TeamForm = ({
    teamFormVisible,
    handleCloseTeamModal,
}: TeamFormProps) => {
    const [formData, setFormData] = useState({
        teamName: "",
        teamTag: "",
        teamAddPlayer: "",
        teamTagCommand: "",
    });

    const handleOnChange = e => {
        const { name, value } = e.target;
        setFormData(() => ({
            ...formData,
            [name]: value,
        }));
        console.log(value);
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
                <div className={styles.item}>
                    <div className={styles.item__field}>
                        <Input
                            name="teamName"
                            label="Название команды"
                            value={formData.teamName}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className={styles.item__field}>
                        <Input
                            name="teamTag"
                            label="Тег команды"
                            value={formData.teamTag}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className={styles.item__field}>
                        <Input
                            name="teamAddPlayer"
                            label="Добавить игроков"
                            value={formData.teamAddPlayer}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className={styles.item__field}>
                        <Input
                            name="teamTagCommand"
                            label="Добавить игроков"
                            value={formData.teamTagCommand}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
                <div className={styles.button}>
                    <Button
                        buttonClassName={styles.button__btn}
                        text="Добавить команду"
                    />
                </div>
            </>
        </Modal>
    );
};
