import { Icon } from '@/components/ui/Icon';
import styles from './MediaListItem.module.scss';

interface MediaListItemProps {
  src: string;
  stats: {
    like: number;
    comments: number;
  };
  onClick: (data: any) => void;
}

export const MediaListItem = ({ src, stats, onClick }: MediaListItemProps) => {
  return (
    <div className={styles.item} onClick={onClick}>
      <div className={styles.image}>
        <img className={styles.image__img} src={src} alt="картинка или видео" />
      </div>
      <div className={styles.stats}>
        <div className={styles.stats__like}>
          <Icon className={styles.icon} name="like" size={16} />
          <span>{stats.like}</span>
        </div>
        <div className={styles.comment}>
          <Icon className={styles.icon} name="comments" size={16} />
          <span>{stats.comments}</span>
        </div>
      </div>
    </div>
  );
};
