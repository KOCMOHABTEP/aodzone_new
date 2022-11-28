import { ForumDetailAvatar } from "@/components/views/ForumDetailView/ForumDetailAvatar";
import { Icon } from "@/components/ui/Icon";
import styles from "./ForumDetailItem.module.scss";

interface ForumDetailItemProps {
    title: string;
    description: string;
    data: string;
}

export const ForumDetailItem = ({
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
            <div className={styles.right}>
                <div className={styles.right__data}>{data}</div>
                <div className={styles.right__title}>{title}</div>
                <div className={styles.right__description}>{description}</div>
            </div>
            <div className={styles.icon}>
                <Icon name="home" size={20} />
                <Icon name="home" size={20} />
                <Icon className={styles.icon__share} name="home" size={20} />
            </div>
        </div>
    );
};
