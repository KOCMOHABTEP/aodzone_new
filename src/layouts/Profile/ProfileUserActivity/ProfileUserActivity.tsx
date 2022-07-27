import Icon from "@components/Icon/Icon";
import styles from "./ProfileUserActivity.module.css";

const ProfileUserActivity = () => {
    return (
        <div className={styles.userActivity}>
            <div className={styles.userActivityList}>
                <div className={styles.userActivityItem}>
                    <div className={styles.userActivityTime}>05:24</div>
                    <Icon name="home" className={styles.userActivityIcon} />
                    <div className={styles.userActivityContent}>
                        <div className={styles.userActivityTitle}>
                            Завершение игры
                        </div>
                        <div className={styles.userActivitySubtitle}>
                            Вы играли матч с
                        </div>
                    </div>
                    <Icon name="arrow_right" />
                </div>
                <div className={styles.userActivityItem}>
                    <div className={styles.userActivityTime}>05:24</div>
                    <Icon name="home" className={styles.userActivityIcon} />
                    <div className={styles.userActivityContent}>
                        <div className={styles.userActivityTitle}>
                            Завершение игры
                        </div>
                        <div className={styles.userActivitySubtitle}>
                            Вы завершили игру
                        </div>
                    </div>
                    <Icon name="arrow_right" />
                </div>
                <div className={styles.userActivityItem}>
                    <div className={styles.userActivityTime}>05:24</div>
                    <Icon name="home" className={styles.userActivityIcon} />
                    <div className={styles.userActivityContent}>
                        <div className={styles.userActivityTitle}>
                            Вы добавили в друзья
                        </div>
                    </div>
                    <Icon name="arrow_right" />
                </div>
                <div className={styles.userActivityItem}>
                    <div className={styles.userActivityTime}>05:24</div>
                    <Icon name="home" className={styles.userActivityIcon} />
                    <div className={styles.userActivityContent}>
                        <div className={styles.userActivityTitle}>
                            Вас добавили в друзья
                        </div>
                    </div>
                    <Icon name="arrow_right" />
                </div>
            </div>
        </div>
    );
};

export default ProfileUserActivity;
