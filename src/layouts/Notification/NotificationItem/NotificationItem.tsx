import Link from "next/link";
import cn from "classnames";
import styles from "./NotificationItem.module.css";

interface NotificationItemProps {
    title: string;
    data: string;
    description?: string;
    read: boolean;
}

const NotificationItem = ({
    title,
    data,
    description,
    read,
}: NotificationItemProps) => {
    return (
        <Link href="/notification/1">
            <a className={styles.item}>
                <div className={styles.itemContent}>
                    <div
                        className={cn(styles.itemContentTitle, {
                            [styles.itemContentTitleRead]: read,
                        })}
                    >
                        {title}
                    </div>
                    <div className={styles.itemContentData}>{data}</div>
                    <div
                        className={cn(styles.itemContentDescription, {
                            [styles.itemContentDescriptionRead]: read,
                        })}
                    >
                        {description && description.length >= 50
                            ? `${description}...`
                            : description}
                    </div>
                </div>
                {!read && <div className={styles.notificationIndicator} />}
            </a>
        </Link>
    );
};

export default NotificationItem;
