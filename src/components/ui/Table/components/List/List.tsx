import styles from './List.module.scss';

interface ListProps {
  number: number;
}

export const List = ({ number }: ListProps) => {
  return <div className={styles.list}>{number}</div>;
};
