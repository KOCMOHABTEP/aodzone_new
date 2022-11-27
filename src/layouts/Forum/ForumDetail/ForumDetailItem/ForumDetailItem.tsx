import Icon from "@/components/Icon/Icon";
import ForumDetailAvatar from "@/layouts/Forum/ForumDetail/ForumDetailAvatar/ForumDetailAvatar";
import styles from "./ForumDetailItem.module.css";

interface ForumDetailItemProps {
    title: string;
    description: string;
    data: string;
}

const ForumDetailItem = ({
    title,
    description,
    data,
}: ForumDetailItemProps) => {
    return (
        <div className={styles.item}>
            <ForumDetailAvatar
                title="КОСМОНАВТ"
                messages="259 собщений"
                src="https://cdn.7days.ru/pic/5d1/978888/1425947/86.jpg"
            />
            <div className={styles.itemRightContent}>
                <div className={styles.itemRightContentData}>{data}</div>
                <div className={styles.itemRightContentTitle}>{title}</div>
                <div className={styles.itemRightContentDescription}>
                    {description}
                </div>
            </div>
            <div className={styles.itemIcon}>
                <Icon name="home" size={20} />
                <Icon name="home" size={20} />
                <Icon className={styles.itemIconShare} name="home" size={20} />
            </div>
        </div>
    );
};

export default ForumDetailItem;
