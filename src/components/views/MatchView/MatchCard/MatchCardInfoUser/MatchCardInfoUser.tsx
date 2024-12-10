import cn from 'classnames';
import { Avatar } from '@/components/ui/Avatar';
import styles from './MatchCardInfoUser.module.scss';

interface MatchCardInfoUserProps {
  title: string;
  level: number;
  align: 'left' | 'right';
}

export const MatchCardInfoUser = ({
  title,
  level,
  align,
}: MatchCardInfoUserProps) => {
  return (
    <div className={styles.item}>
      <div
        className={cn(styles.player, {
          [styles.player__left]: align === 'left',
          [styles.player__right]: align === 'right',
        })}
      >
        <Avatar level={0} />
        <div className={styles.info}>
          <div className={styles.info__name}>{title}</div>
          <div className={styles.info__level}>Уровень {level}</div>
        </div>
      </div>
    </div>
  );
};
