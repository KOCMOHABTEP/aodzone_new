import Avatar from "@components/Avatar/Avatar";
import styles from "./TeamPlayersItem.module.css";

const TeamPlayersItem = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemImage}>
                <Avatar />
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemTitle}>Boris Wick</div>
                <div className={styles.itemAchievement}>captain</div>
            </div>
        </div>
    );
};

export default TeamPlayersItem;
