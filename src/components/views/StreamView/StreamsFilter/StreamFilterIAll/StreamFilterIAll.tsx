import { Icon } from '@/components/ui/Icon';
import Link from 'next/link';
import styles from './StreamFilterIAll.module.scss';

export const StreamFilterIAll = () => {
  return (
    <div className={styles.item}>
      <Link href="/streams/all" className={styles.item__tabs}>
        Посмотреть все
      </Link>
      <Icon className={styles.item__icon} name="arrow_right" size={16} />
    </div>
  );
};
