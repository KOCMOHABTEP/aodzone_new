import styles from "./TournamentRound.module.css";

interface TournamentRoundProps {
    title: string;
    label: string;
    data: string;
}

const TournamentRound = ({ title, label, data }: TournamentRoundProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemContent}>
                <div className={styles.itemHeader}>
                    <div className={styles.itemTitle}>{title}</div>
                    <div className={styles.itemLabel}>{label}</div>
                </div>
                <div className={styles.itemDescription}>{data}</div>
            </div>
        </div>
    );
};

export default TournamentRound;
