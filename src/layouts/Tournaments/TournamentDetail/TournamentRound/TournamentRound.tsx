import styles from "./TournamentRound.module.css";

const TournamentRound = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemContent}>
                <div className={styles.itemHeader}>
                    <div className={styles.itemTitle}>ROUND OF16</div>
                    <div className={styles.itemLabel}>BEST OF1</div>
                </div>
                <div className={styles.itemDescription}>22APRIL2018</div>
            </div>
        </div>
    );
};

export default TournamentRound;
