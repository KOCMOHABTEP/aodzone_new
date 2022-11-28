import styles from "./MatchCardInfo.module.scss";

interface MatchCardInfoProps {
    title: string;
    description: string;
}

export const MatchCardInfo = ({ title, description }: MatchCardInfoProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__title}>{title}</div>
            <div className={styles.item__description}>{description}</div>
        </div>
    );
};
