import Icon from "@components/ui/Icon/Icon";
import Link from "next/link";
import styles from "./NewsItem.module.css";

interface INewsItem {
    image: string;
    title: string;
    description: string;
    date: string;
    link: string;
    stats: {
        views: number;
        comments: number;
    };
}

const NewsItem = ({
    image,
    title,
    description,
    // date,
    // link,
    stats,
}: INewsItem) => {
    return (
        <Link href="news/1">
            <div className={styles.newsItem}>
                <div
                    className={styles.newsItemImage}
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className={styles.newsItemContent}>
                    <div className={styles.newsItemTitle}>{title}</div>
                    <div className={styles.newsItemDescription}>
                        {description}
                    </div>
                    <div className={styles.newsItemStats}>
                        <div className={styles.newsItemStatsControl}>
                            <Icon
                                className={styles.newsItemStatsControlIcon}
                                name="views"
                                size={16}
                            />
                            <span>{stats.views}</span>
                        </div>
                        <div className={styles.newsItemStatsControl}>
                            <Icon
                                className={styles.newsItemStatsControlIcon}
                                name="comments"
                                size={16}
                            />
                            <span>{stats.comments}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NewsItem;
