import { Avatar } from '@/components/ui/Avatar';
import styles from './MediaComment.module.scss';

export const MediaComment = () => {
  return (
    <div className={styles.item}>
      <div className={styles.item__title}>
        <Avatar size="large" />
        <div className={styles.item__name}>КОСМОНАВТ</div>
      </div>
      <div className={styles.description}>
        <div className={styles.description__text}>
          Another update another gunAnother update another gunAnother update
          another gunAnother update another gunAnother update another gunAnother
          update another gunAnother update another gunAnother update another
          gunAnother update another gunAnother update another gunAnother update
          another gunAnother update another gun
        </div>
        <div className={styles.data}>12.09.2022 15:35</div>
      </div>
    </div>
  );
};
