import styles from "./ForumDetailAvatar.module.css";

const ForumDetailAvatar = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemImage}>
                <img
                    className={styles.itemImg}
                    src="https://games.mail.ru/hotbox/content_files/game/2017/11/3d60df5.jpeg"
                    alt="logoUser"
                />
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemContentTitle}>Server Vik</div>
                <div className={styles.itemContentDescription}>
                    259 messages
                </div>
            </div>
        </div>
    );
};

export default ForumDetailAvatar;
