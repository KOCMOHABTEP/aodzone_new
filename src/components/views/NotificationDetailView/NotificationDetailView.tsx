import Button from "@/components/ui/Button/Button";
import styles from "./NotificationDetailView.module.scss";

interface NotificationDetailProps {
    title: string;
    data: string;
    description: string;
}

export const NotificationDetailView = ({
    title,
    data,
    description,
}: NotificationDetailProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.content}>
                <div className={styles.content__title}>{title}</div>
                <div className={styles.content__data}>{data}</div>
                <div className={styles.content__description}>{description}</div>
            </div>
            <div className={styles.button}>
                <Button buttonClassName={styles.button__btn} text="Перейти" />
            </div>
        </div>
    );
};
