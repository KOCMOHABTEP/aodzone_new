import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import styles from "./ProfileUserInfo.module.scss";

interface ProfileUserInfoProps {
    title?: string;
    description?: string;
    location?: string;
    joined?: string;
    born?: string;
    online: string;
    handleOpenDescriptionForm?: () => void;
}

export const ProfileUserInfo = ({
    title,
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
                <div className={styles.title}>Обо мне</div>
                <div className={styles.description}>{description}</div>
            </div>
            <div className={styles.button}>
                <Button
                    buttonClassName={styles.button__btn}
                    text="Добавить описание"
                    onClick={handleOpenDescriptionForm}
                />
            </div>
            <div className={styles.content}>
                {/** Item 1 * */}
                <div className={styles.icon}>
                    <Icon
                        className={styles.icon__icn}
                        name="profile"
                        size={18}
                    />
                    <div className={styles.text}> {title}</div>
                </div>
                <div className={styles.icon}>
                    <Icon className={styles.icon__icn} name="home" size={18} />
                    <div className={styles.text}> {location}</div>
                </div>
                <div className={styles.icon}>
                    <Icon
                        className={styles.icon__icn}
                        name="comments"
                        size={18}
                    />
                    <div className={styles.text}>
                        Присоеденился {joined} дня назад
                    </div>
                </div>
                <div className={styles.icon}>
                    <Icon
                        className={styles.icon__icn}
                        name="profile"
                        size={18}
                    />
                    <div className={styles.text}>День рождения: {born}</div>
                </div>
                <div className={styles.icon}>
                    <Icon className={styles.icon__icn} name="timer" size={18} />
                    <div className={styles.text}>{online}</div>
                </div>
            </div>
        </div>
    );
};
