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
        <div className={styles.item}>
            <div className={styles.itemIcon}>
                <Icon size={48} name={icon} />
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemContentStats}>{stats}</div>
                <div className={styles.itemContentDescription}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default AchievementsBarItem;
