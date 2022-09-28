import styles from "./MatchCardInfo.module.css";

interface MatchCardInfoProps {
    title: string;
    description: string;
}

const MatchCardInfo = ({ title, description }: MatchCardInfoProps) => {
    return (
        <div className={styles.itemStatsInfo}>
            <div className={styles.itemStatsInfoTitle}>{title}</div>
            <div className={styles.itemStatsInfoDescription}>{description}</div>
        </div>
    );
};

export default MatchCardInfo;
