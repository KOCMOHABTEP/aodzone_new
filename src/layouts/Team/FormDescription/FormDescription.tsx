import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import styles from "./FormDescription.module.css";

const FormDescription = () => {
    return (
        <>
            <div className={styles.item}>
                <div className={styles.itemTitle}>ДОБАВИТЬ ОПИСАНИЕ</div>
                <div className={styles.itemInput}>
                    <Input name="aboutMeLocation" label="Страна" value="" />
                </div>
                <div className={styles.itemInput}>
                    <Input name="aboutMeLocation" label="Город" value="" />
                </div>
                <div className={styles.itemInput}>
                    <Input
                        name="aboutMeDataBDay"
                        label="Дата рождения"
                        value=""
                    />
                </div>
                <div>
                    <Button text="Добавить" />
                </div>
            </div>
        </>
    );
};

export default FormDescription;
