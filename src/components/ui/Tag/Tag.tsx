import styles from './Tag.module.scss';

interface TagProps {
  label: string;
}

export const Tag = ({ label }: TagProps) => {
  return <div className={styles.item}>{label}</div>;
};
