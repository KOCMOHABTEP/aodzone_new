import { AchievementsBarItem } from '@/components/ui/AchievementsBar/AchievementsBarItem';

import styles from './AchievementsBar.module.scss';

export const AchievementsBar = () => {
  return (
    <div className={styles.item}>
      <AchievementsBarItem
        description="Всего матчей"
        icon="matches"
        stats="678"
      />
      <AchievementsBarItem
        description="Коэффициент выигрыша"
        icon="arrow_up"
        stats="68%"
      />
      <AchievementsBarItem
        description="Среднее время"
        icon="timer"
        stats="43"
      />
      <AchievementsBarItem description="Друзей" icon="friends" stats="22" />
      <AchievementsBarItem description="Достижения" icon="groups" stats="12" />
    </div>
  );
};
