import Link from 'next/link';
import cn from 'classnames';
import styles from './NotificationItem.module.scss';

interface NotificationItemProps {
    title: string;
    data: string;
    description?: string;
    read: boolean;
}

export const NotificationItem = ({
    title,
    data,
    description,
    read,
}: NotificationItemProps) => {
    return (
        <Link href="/notifications/1" className={styles.item}>
            <>
                <div className={styles.content}>
                    <div
                        className={cn(styles.title, {
                            [styles.title__read]: read,
                        })}
                    >
                        {title}
                    </div>
                    <div className={styles.data}>{data}</div>
                    <div
                        className={cn(styles.description, {
                            [styles.description__read]: read,
                        })}
                    >
                        {description && description.length >= 50
                            ? `${description}...`
                            : description}
                    </div>
                </div>
                {!read && <div className={styles.indicator} />}
            </>
        </Link>
    );
};
