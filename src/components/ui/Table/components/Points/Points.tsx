import styles from './Points.module.scss';

interface PointsProps {
  points: number;
}

export const Points = ({ points }: PointsProps) => {
  return <div className={styles.points}>{points}</div>;
};
