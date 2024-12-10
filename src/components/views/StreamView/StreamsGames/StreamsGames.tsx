import { Icon } from '@/components/ui/Icon';
import styles from './StreamsGames.module.scss';

interface StreamGameProps {
  nameGame: string;
  views: number;
  src: string;
}

export const StreamsGames = ({ nameGame, views, src }: StreamGameProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img className={styles.image__img} src={src} />
        </div>
        <div className={styles.description}>
          <div className={styles.description__name}>{nameGame}</div>
          <div className={styles.description__icon}>
            <Icon
              className={styles.description__icon__image}
              name="home"
              size={16}
            />
          </div>
          <div className={styles.views}>{views}</div>
        </div>
      </div>
    </div>
  );
};
