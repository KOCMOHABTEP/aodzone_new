import cn from "classnames";
import Icon from "@components/Icon/Icon";
import Link from "next/link";
import styles from "./ForumItem.module.css";

interface ForumItemProps {
    title: string;
    description?: string;
    created: string;
}

const ForumItem = ({ title, description, created }: ForumItemProps) => {
    return (
        <Link href="/forum/1">
            <a className={styles.item}>
                <div className={styles.itemImage}>
                    <Icon name="home" size={40} />
                    <Icon
                        className={styles.itemImageImg}
                        name="comments"
                        size={16}
                    />
                </div>
                <div className={styles.itemContent}>
                    <div className={styles.itemContentHeader}>
                        <div className={styles.itemContentHeaderInfo}>
                            [Sticky]
                        </div>
                        <div className={styles.itemContentHeaderTitle}>
                            {title}
                        </div>
                        <div
                            className={cn(
                                styles.itemContentStatusLabel,
                                styles.itemContentStatusLabelViolet
                            )}
                        >
                            FINISHED
                        </div>
                    </div>
                    <div className={styles.itemContentDescription}>
                        {description}
                    </div>
                    <div className={styles.itemContentCreatedForum}>
                        Тема создана {created}
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default ForumItem;
