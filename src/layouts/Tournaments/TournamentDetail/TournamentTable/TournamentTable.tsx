import TournamentTableTeam from "@layouts/Tournaments/TournamentDetail/TournamentTable/TournamentTableTeam/TournamentTableTeam";
import styles from "./TournamentTable.module.css";

const TournamentTable = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemInfo}>
                <div className={styles.wrapperMatchTournament}>
                    <TournamentTableTeam />
                    <TournamentTableTeam />
                </div>
            </div>
        </div>
    );
};

export default TournamentTable;
