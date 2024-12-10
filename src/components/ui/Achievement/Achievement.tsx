import styles from './Achievement.module.scss';

interface AchievementProps {
  level?: number;
  image: string;
  alt?: string;
}

export const Achievement = ({ level, image, alt = '' }: AchievementProps) => {
  return (
    <div className={styles.achievement}>
      {level && <div className={styles.achievement__level}>{level}</div>}
      <div className={styles.image}>
        <img className={styles.image__icon} src={image} alt={alt} />
      </div>
    </div>
  );
};
