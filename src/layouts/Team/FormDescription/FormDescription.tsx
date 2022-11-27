import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import styles from "./FormDescription.module.css";

interface FormDescriptionProps {
    descriptionFormVisible: boolean;
    handleCloseDescriptionForm: () => void;
}

const FormDescription = ({
    descriptionFormVisible,
    handleCloseDescriptionForm,
}: FormDescriptionProps) => {
    const [formData, setFormData] = useState({
        aboutMeLocation: "",
        aboutMeLocationCity: "",
        aboutMeDataBDay: "",
    });

    const handleOnChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <Modal
                title="ОБО МНЕ"
                description="Заполни информацию о себе"
                visibility={descriptionFormVisible}
                onClose={handleCloseDescriptionForm}
            >
                <div className={styles.itemInput}>
                    <Input
                        name="aboutMeLocation"
                        label="Страна"
                        value={formData.aboutMeLocation}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={styles.itemInput}>
                    <Input
                        name="aboutMeLocationCity"
                        label="Город"
                        value={formData.aboutMeLocationCity}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={styles.itemInput}>
                    <Input
                        name="aboutMeDataBDay"
                        label="Дата рождения"
                        value={formData.aboutMeDataBDay}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={styles.itemButton}>
                    <Button text="Добавить" />
                </div>
            </Modal>
        </>
    );
};

export default FormDescription;
