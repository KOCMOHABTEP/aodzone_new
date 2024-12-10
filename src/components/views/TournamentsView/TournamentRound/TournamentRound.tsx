import styles from './TournamentRound.module.scss';

interface TournamentRoundProps {
  title: string;
  label: string;
  data: string;
}

export const TournamentRound = ({
  title,
  label,
  data,
}: TournamentRoundProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.header__title}>{title}</div>
          <div className={styles.header__label}>{label}</div>
        </div>
        <div className={styles.header__description}>{data}</div>
      </div>
    </div>
  );
};
