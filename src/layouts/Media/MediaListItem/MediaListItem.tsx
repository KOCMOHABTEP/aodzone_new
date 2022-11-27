import Icon from "@/components/Icon/Icon";
import styles from "./MediaListItem.module.css";

interface MediaListItemProps {
    src: string;
    stats: {
        like: number;
        comments: number;
    };
    onClick: (data: any) => void;
}

const MediaListItem = ({ src, stats, onClick }: MediaListItemProps) => {
    return (
        <div className={styles.item} onClick={onClick}>
            <div className={styles.itemImage}>
                <img
                    className={styles.itemImageImg}
                    src={src}
                    alt="картинка или видео"
                />
            </div>
            <div className={styles.itemStats}>
                <div className={styles.itemStatsLike}>
                    <Icon
                        className={styles.itemStatsIcon}
                        name="like"
                        size={16}
                    />
                    <span>{stats.like}</span>
                </div>
                <div className={styles.itemStatsComment}>
                    <Icon
                        className={styles.itemStatsIcon}
                        name="comments"
                        size={16}
                    />
                    <span>{stats.comments}</span>
                </div>
            </div>
        </div>
    );
};

export default MediaListItem;
