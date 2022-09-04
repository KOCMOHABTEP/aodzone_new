import Button from "@components/Button/Button";
import Icon from "@components/Icon/Icon";
import styles from "./ProfileUserInfo.module.css";

const ProfileUserInfo = () => {
    return (
        <div className={styles.item}>
            <div>
                <div className={styles.itemHeadTitle}>ABOUT</div>
                <div className={styles.itemHeadDescription}>
                    Nothing intresting hasn't been written here, what a pity. It
                    is a nice field
                </div>
            </div>
            <div className={styles.itemButton}>
                <Button text="Add description" />
            </div>
            <div className={styles.itemContent}>
                {/** Item 1 * */}
                <div className={styles.infoItem}>
                    <Icon
                        className={styles.infoItemIcon}
                        name="home"
                        size={18}
                    />
                    <div className={styles.infoItemText}> from Serbia</div>
                </div>
                <div className={styles.infoItem}>
                    <Icon
                        className={styles.infoItemIcon}
                        name="comments"
                        size={18}
                    />
                    <div className={styles.infoItemText}>
                        Joined 23 days ago
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <Icon
                        className={styles.infoItemIcon}
                        name="profile"
                        size={18}
                    />
                    <div className={styles.infoItemText}>
                        Born on 24.May.2018
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <Icon
                        className={styles.infoItemIcon}
                        name="timer"
                        size={18}
                    />
                    <div className={styles.infoItemText}>
                        Last seen 5 day ago
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileUserInfo;
