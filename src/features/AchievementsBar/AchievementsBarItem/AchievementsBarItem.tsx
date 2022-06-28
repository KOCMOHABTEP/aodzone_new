import Icon from "@components/Icon/Icon";
import { ICON_NAME } from "@components/Icon/Icon.library";
import styles from "./AchievementsBarItem.module.scss";

interface AchievementsBarItemProps {
    description: string;
    stats: number | string;
    icon: ICON_NAME;
}

const AchievementsBarItem = ({
    description,
    stats,
    icon,
}: AchievementsBarItemProps) => {
    return (
        <div className={styles.component}>
            <div className={styles.icon}>
                <Icon size={48} name={icon} />
            </div>
            <div className={styles.content}>
                <div className={styles.stats}>{stats}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    );
};

export default AchievementsBarItem;
