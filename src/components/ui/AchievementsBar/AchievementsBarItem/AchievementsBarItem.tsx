import { ICON_NAME } from '@/components/ui/Icon/Icon.library';
import { Icon } from '@/components/ui/Icon';
import styles from './AchievementsBarItem.module.scss';

interface AchievementsBarItemProps {
  description: string;
  stats: number | string;
  icon: ICON_NAME;
}

export const AchievementsBarItem = ({
  description,
  stats,
  icon,
}: AchievementsBarItemProps) => {
  return (
    <div className={styles.item}>
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
