import Avatar from "@/components/Avatar/Avatar";
import styles from "./MediaComment.module.css";

const MediaComment = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemTitle}>
                <Avatar size="large" />
                <div className={styles.itemTitleName}>КОСМОНАВТ</div>
            </div>
            <div className={styles.itemDescription}>
                <div className={styles.itemDescriptionText}>
                    Another update another gunAnother update another gunAnother
                    update another gunAnother update another gunAnother update
                    another gunAnother update another gunAnother update another
                    gunAnother update another gunAnother update another
                    gunAnother update another gunAnother update another
                    gunAnother update another gun
                </div>
                <div className={styles.itemDescriptionData}>
                    12.09.2022 15:35
                </div>
            </div>
        </div>
    );
};

export default MediaComment;
