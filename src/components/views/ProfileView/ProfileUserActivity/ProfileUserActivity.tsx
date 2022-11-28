import { Icon } from "@/components/ui/Icon";
import styles from "./ProfileUserActivity.module.scss";

export const ProfileUserActivity = () => {
    return (
        <div className={styles.user}>
            <div className={styles.list}>
                <div className={styles.item}>
                    <div className={styles.item__time}>05:24</div>
                    <Icon name="home" className={styles.icon} />
                    <div className={styles.content}>
                        <div className={styles.content__title}>
                            Завершение игры
                        </div>
                        <div className={styles.content__subtitle}>
                            Вы играли матч с
                        </div>
                    </div>
                    <Icon name="arrow_right" />
                </div>
                <div className={styles.item}>
                    <div className={styles.item__time}>05:24</div>
                    <Icon name="home" className={styles.icon} />
                    <div className={styles.content}>
                        <div className={styles.content__title}>
                            Завершение игры
                        </div>
                        <div className={styles.content__subtitle}>
                            Вы завершили игру
                        </div>
                    </div>
                    <Icon name="arrow_right" />
                </div>
                <div className={styles.item}>
                    <div className={styles.item__time}>05:24</div>
                    <Icon name="home" className={styles.icon} />
                    <div className={styles.content}>
                        <div className={styles.content__title}>
                            Вы добавили в друзья
                        </div>
                    </div>
                    <Icon name="arrow_right" />
                </div>
                <div className={styles.item}>
                    <div className={styles.item__time}>05:24</div>
                    <Icon name="home" className={styles.icon} />
                    <div className={styles.content}>
                        <div className={styles.content__title}>
                            Вас добавили в друзья
                        </div>
                    </div>
                    <Icon name="arrow_right" />
                </div>
            </div>
        </div>
    );
};
