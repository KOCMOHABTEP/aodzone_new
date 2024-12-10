import styles from './Games.module.scss';

interface GamesProps {
  value: string;
}

export const Games = ({ value }: GamesProps) => {
  return <div className={styles.title}>{value}</div>;
};
