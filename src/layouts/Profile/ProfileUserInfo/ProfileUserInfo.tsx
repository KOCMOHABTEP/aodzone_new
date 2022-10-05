import Button from "@components/Button/Button";
import Icon from "@components/Icon/Icon";
import styles from "./ProfileUserInfo.module.css";

interface ProfileUserInfoProps {
    description?: string;
    location?: string;
    joined?: string;
    born?: string;
    online: string;
    handleOpenDescriptionForm?: () => void;
}

const ProfileUserInfo = ({
    location,
    description,
    joined,
    born,
    online,
    handleOpenDescriptionForm,
}: ProfileUserInfoProps) => {
    return (
        <div className={styles.item}>
            <div>
                <div className={styles.itemHeaderTitle}>ABOUT</div>
                <div className={styles.itemHeaderDescription}>
                    {description}
                </div>
            </div>
            <div className={styles.itemButton}>
                <Button
                    buttonClassName={styles.itemButtonBtn}
                    text="Добавить описание"
                    onClick={handleOpenDescriptionForm}
                />
            </div>
            <div className={styles.itemContent}>
                {/** Item 1 * */}
                <div className={styles.infoItem}>
                    <Icon
                        className={styles.infoItemIcon}
                        name="home"
                        size={18}
                    />
                    <div className={styles.infoItemText}> {location}</div>
                </div>
                <div className={styles.infoItem}>
                    <Icon
                        className={styles.infoItemIcon}
                        name="comments"
                        size={18}
                    />
                    <div className={styles.infoItemText}>
                        Присоеденился {joined} дня назад
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <Icon
                        className={styles.infoItemIcon}
                        name="profile"
                        size={18}
                    />
                    <div className={styles.infoItemText}>
                        День рождения: {born}
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <Icon
                        className={styles.infoItemIcon}
                        name="timer"
                        size={18}
                    />
                    <div className={styles.infoItemText}>{online}</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileUserInfo;
