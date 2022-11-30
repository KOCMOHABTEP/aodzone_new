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
        <Link href="news/1">
            <div className={styles.item}>
                <div
                    className={styles.item__image}
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className={styles.content}>
                    <div className={styles.content__title}>{title}</div>
                    <div className={styles.content__description}>
                        {description}
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.control}>
                            <Icon
                                className={styles.control__icon}
                                name="views"
                                size={16}
                            />
                            <span>{stats.views}</span>
                        </div>
                        <div className={styles.control}>
                            <Icon
                                className={styles.control__icon}
                                name="comments"
                                size={16}
                            />
                            <span>{stats.comments}</span>
                        </div>
                        <div className={styles.control}>
                            <Icon
                                className={styles.control__icon}
                                name="like"
                                size={16}
                            />
                            <span>{stats.likes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
