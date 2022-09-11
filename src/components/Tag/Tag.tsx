import styles from "./Tag.module.css";

interface TagProps {
    label: string;
}

const Tag = ({ label }: TagProps) => {
    return <div className={styles.item}>{label}</div>;
};

export default Tag;
