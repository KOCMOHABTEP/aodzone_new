import Icon from "@components/Icon/Icon";
import ForumDetailAvatar from "@layouts/Forum/ForumDetail/ForumDetailAvatar/ForumDetailAvatar";
import styles from "./ForumDetailItem.module.css";

const ForumDetailItem = () => {
    return (
        <div className={styles.item}>
            <ForumDetailAvatar />
            <div className={styles.itemRightContent}>
                <div className={styles.itemRightContentData}>
                    30.12.2022 12:57
                </div>
                <div className={styles.itemRightContentTitle}>
                    Another update another gun
                </div>
                <div className={styles.itemRightContentDescription}>
                    Another update another gunAnother update another gunAnother
                    update another gunAnother update another gunAnother update
                    another gunAnother update another gunAnother update another
                    gunAnother update another gunAnother update another
                    gunAnother update another gunAnother update another
                    gunAnother update another gun
                </div>
            </div>
            <div className={styles.itemIcon}>
                <Icon name="home" size={20} />
                <Icon name="home" size={20} />
                <Icon className={styles.itemIconShare} name="home" size={20} />
            </div>
        </div>
    );
};

export default ForumDetailItem;
