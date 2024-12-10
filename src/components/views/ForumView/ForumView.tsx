import { ForumItem } from '@/components/views/ForumView/ForumItem';
import { ForumFilter } from '@/components/views/ForumView/ForumFilter';
import styles from './ForumView.module.scss';

export const ForumView = () => {
  return (
    <div className={styles.item}>
      <div className={styles.item__title}>COUNTER STRIKE</div>
      <div className={styles.item__list}>
        <ForumItem
          title="Правила и этикет форума сообщества"
          description="Обсуждение Call of Duty "
          created="5 дней назад"
        />
        <ForumItem
          title="Правила и этикет форума сообщества"
          created="10 часов назад"
        />
        <ForumItem
          title="Игра аоладо"
          description="Обсуждение игры COUNTER STRIKE "
          created="2 дня назад"
        />
      </div>
      <ForumFilter />
    </div>
  );
};
