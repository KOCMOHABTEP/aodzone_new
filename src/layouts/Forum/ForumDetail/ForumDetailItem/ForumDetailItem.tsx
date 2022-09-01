import styles from "./ForumDetailItem.module.css";
import Icon from "@components/Icon/Icon";

const ForumDetailItem = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemLeft}>
                <div className={styles.itemLeftImage}>
                    <img
                        className={styles.itemLeftImg}
                        src="https://games.mail.ru/hotbox/content_files/game/2017/11/3d60df5.jpeg"
                        alt="logoUser"
                    />
                </div>
                <div className={styles.itemLeftContent}>
                    <div className={styles.itemLeftTitle}>Server Vik</div>
                    <div className={styles.itemLeftDescription}>
                        259 messages
                    </div>
                </div>
            </div>
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
                <Icon name={"home"} size={20} />
                <Icon name={"home"} size={20} />
                <Icon
                    className={styles.itemIconShare}
                    name={"home"}
                    size={20}
                />
            </div>
        </div>
    );
};

export default ForumDetailItem;
