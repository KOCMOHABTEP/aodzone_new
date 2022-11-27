import Icon from "@/components/Icon/Icon";
import cn from "classnames";
import Link from "next/link";
import styles from "./StreamItem.module.css";

interface StreamItemProps {
    title: string;
    nickName: string;
    numbersViews: number;
    nameGame: string;
    src: string;
}

const StreamItem = ({
    title,
    nickName,
    nameGame,
    numbersViews,
    src,
}: StreamItemProps) => {
    return (
        <Link href="/streams/1">
            <a className={styles.item}>
                <div className={styles.itemHeader}>
                    <div className={styles.itemHeaderImage}>
                        <img className={styles.itemHeaderImageImg} src={src} />
                    </div>
                    <div className={styles.itemHeaderInfo}>
                        <div
                            className={cn(
                                styles.itemHeaderStats,
                                styles.itemHeaderStatsLeft
                            )}
                        >
                            <Icon
                                className={styles.itemHeaderStatsIcon}
                                name="views"
                                size={16}
                            />
                            <div className={styles.itemHeaderStatsLabel}>
                                LIVE
                            </div>
                        </div>
                        <div
                            className={cn(
                                styles.itemHeaderStats,
                                styles.itemHeaderStatsRight
                            )}
                        >
                            <Icon
                                className={styles.itemHeaderStatsIcon}
                                name="friends"
                                size={16}
                            />
                            <div className={styles.itemHeaderStatsLabel}>
                                {numbersViews}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.itemContent}>
                    <Icon name="matches" />
                    <div className={styles.itemContentText}>
                        <div className={styles.itemContentTextTitle}>
                            {title}
                        </div>
                        <div className={styles.itemContentTexDescriptionInfo}>
                            <div className={styles.itemContentTexDescription}>
                                {nickName}
                            </div>
                            <span
                                className={cn(
                                    styles.itemContentTexDescription,
                                    styles.itemContentDescriptionSeparation
                                )}
                            >
                                •
                            </span>
                            <div className={styles.itemContentTexDescription}>
                                {nameGame}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default StreamItem;
