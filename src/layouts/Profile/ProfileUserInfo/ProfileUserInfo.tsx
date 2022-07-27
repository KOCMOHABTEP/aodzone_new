import Button from "@components/Button/Button";
import Icon from "@components/Icon/Icon";
import styles from "./ProfileUserInfo.module.css";

const ProfileUserInfo = () => {
    return (
        <div className={styles.activityInfo}>
            <div className={styles.title}>ABOUT</div>
            <div className={styles.description}>
                Nothing intresting hasn't been written here, what a pity. It is
                a nice field
            </div>
            <div className={styles.button}>
                <Button text="Add description" />
            </div>
            <div className={styles.infoContainer}>
                {/** Item 1 * */}
                <div className={styles.infoItem}>
                    <Icon
                        className={styles.infoItemIcon}
                        name="home"
                        size={20}
                    />
                    <div className={styles.infoItemText}> from Serbia</div>
                </div>
                <div className={styles.infoItem}>
                    <Icon
                        className={styles.infoItemIcon}
                        name="comments"
                        size={20}
                    />
                    <div className={styles.infoItemText}>
                        Joined 23 days ago
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <Icon
                        className={styles.infoItemIcon}
                        name="profile"
                        size={20}
                    />
                    <div className={styles.infoItemText}>
                        Born on 24.May.2018
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <Icon
                        className={styles.infoItemIcon}
                        name="timer"
                        size={20}
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
