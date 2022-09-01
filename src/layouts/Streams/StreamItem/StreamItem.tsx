import styles from "./StreamItem.module.css";
import Icon from "@components/Icon/Icon";
import cn from "classnames";

interface StreamItemProps {
    src: string;
}

const StreamItem = ({ src }: StreamItemProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemHead}>
                <div className={styles.itemHeadImage}>
                    <img className={styles.itemHeadImg} src={src} />
                </div>
                <div className={styles.itemHeadInfo}>
                    <div
                        className={cn(
                            styles.itemHeadStats,
                            styles.itemHeadStatsLeft
                        )}
                    >
                        <Icon
                            className={styles.itemHeadStatsIcon}
                            name={"views"}
                            size={16}
                        />
                        <div className={styles.itemHeadStatsLabel}>LIVE</div>
                    </div>
                    <div
                        className={cn(
                            styles.itemHeadStats,
                            styles.itemHeadStatsRight
                        )}
                    >
                        <Icon
                            className={styles.itemHeadStatsIcon}
                            name={"friends"}
                            size={16}
                        />
                        <div className={styles.itemHeadStatsLabel}>156</div>
                    </div>
                </div>
            </div>
            <div className={styles.itemContent}>
                <Icon name={"matches"} />
                <div className={styles.itemText}>
                    <div className={styles.itemTitle}>
                        Trying out Battlefield clone
                    </div>
                    <div className={styles.itemDescriptionInfo}>
                        <div className={styles.itemDescription}>TAGANAY</div>
                        <span
                            className={cn(
                                styles.itemDescription,
                                styles.itemDescriptionSeparation
                            )}
                        >
                            •
                        </span>
                        <div className={styles.itemDescription}>
                            WORLD WAY 3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StreamItem;
