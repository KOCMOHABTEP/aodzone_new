import Icon from "@/components/Icon/Icon";
import styles from "./Achievement.module.scss";

interface AchievementProps {
    level?: number;
    image: string;
    alt?: string;
}

const Achievement = ({ level, image, alt = "" }: AchievementProps) => {
    return (
        <div className={styles.achievement}>
            {level && <div className={styles.achievement__level}>{level}</div>}
            <div className={styles.achievement__image}>
                <img
                    className={styles.achievement__image__icon}
                    src={image}
                    alt={alt}
                />
            </div>
        </div>
    );
};

export default Achievement;
