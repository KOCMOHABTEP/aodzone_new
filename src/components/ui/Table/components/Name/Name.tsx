import styles from "./Name.module.scss";

interface TableCellNameProps {
    title: string;
}

export const Name = ({ title }: TableCellNameProps) => {
    return <div className={styles.title}>{title}</div>;
};
