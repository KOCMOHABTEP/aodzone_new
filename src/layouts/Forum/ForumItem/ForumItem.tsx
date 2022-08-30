import styles from "./ForumItem.module.css";
import cn from "classnames";
import Icon from "@components/Icon/Icon";

const ForumItem = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemImage}>
                <Icon name={"home"} size={40} />
                <Icon
                    className={styles.itemImageElected}
                    name={"comments"}
                    size={16}
                />
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemContentHead}>
                    <div className={styles.itemContentHeadInfo}>[Sticky]</div>
                    <div className={styles.itemContentHeadTitle}>
                        Community Forum Guidelines & Etiquette
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
                <div className={styles.itemContentForumInfo}>
                    Call of Duty Esports General Discussion
                </div>
                <div>Started by SerbianDuke 5 Hours ago</div>
            </div>
        </div>
    );
};

export default ForumItem;
