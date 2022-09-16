import cn from "classnames";
import styles from "./HeaderNotification.module.css";

interface HeaderNotificationProps {
    title: string;
    description?: string;
    data: string;
    read: boolean;
}

const HeaderNotification = ({
    title,
    description,
    data,
    read,
}: HeaderNotificationProps) => {
    return (
        <div className={styles.item}>
            <div>
                <div
                    className={cn(styles.itemTitle, {
                        [styles.itemTitleRead]: read,
                    })}
                >
                    {title}
                </div>
                {description && (
                    <div
                        className={cn(styles.itemDescription, {
                            [styles.itemDescriptionRead]: read,
                        })}
                    >
                        {description}
                    </div>
                )}
                <div className={styles.itemData}>{data}</div>
            </div>
            {!read && <div className={styles.notificationIndicator} />}
        </div>
    );
};

export default HeaderNotification;
