import Button from "@components/Button/Button";
import styles from "./NotificationDetail.module.css";

interface NotificationDetailProps {
    title: string;
    data: string;
    description: string;
}

const NotificationDetail = ({
    title,
    data,
    description,
}: NotificationDetailProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemContent}>
                <div className={styles.itemContentTitle}>{title}</div>
                <div className={styles.itemContentData}>{data}</div>
                <div className={styles.itemContentDescription}>
                    {description}
                </div>
            </div>
            <div className={styles.itemButton}>
                <Button buttonClassName={styles.itemButtonBtn} text="Перейти" />
            </div>
        </div>
    );
};

export default NotificationDetail;
