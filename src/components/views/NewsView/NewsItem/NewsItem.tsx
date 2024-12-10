import { Icon } from "@/components/ui/Icon";
import Link from "next/link";
import styles from "./NewsItem.module.scss";

interface INewsItem {
    image: string;
    title: string;
    description: string;
    date: string;
    link: string;
    stats: {
        views: number;
        comments: number;
        likes: number;
    };
}

export const NewsItem = ({
    image,
    title,
    description,
    // date,
    // link,
    stats,
}: INewsItem) => {
    return (
        <div className={styles.item}>
            <div
                className={styles.itemImage}
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className={styles.content}>
                <h2 className={styles.contentTitle}>{title}</h2>
                <p className={styles.contentDescription}>{description}</p>
                <div className={styles.contentInfo}>
                    <div className={styles.contentInfoItem}>
                        <Icon
                            className={styles.contentInfoItemIcon}
                            name="views"
                            size={16}
                        />
                        <span>{stats.views}</span>
                    </div>
                    <div className={styles.contentInfoItem}>
                        <Icon
                            className={styles.contentInfoItemIcon}
                            name="comments"
                            size={16}
                        />
                        <span>{stats.comments}</span>
                    </div>
                    <div className={styles.contentInfoItem}>
                        <Icon
                            className={styles.contentInfoItemIcon}
                            name="like"
                            size={16}
                        />
                        <span>{stats.likes}</span>
                    </div>
                </div>
            </div>
        </div>
)
    ;
};
