import styles from "./TournamentTable.module.css";
import TournamentTableTeam from "@layouts/Tournaments/TournamentDetail/TournamentTable/TournamentTableTeam/TournamentTableTeam";

const TournamentTable = () => {
    return (
        <div className={styles.tournamentContainer}>
            <div className={styles.tournamentWrapper}>
                <div className={styles.wrapperMatchTournament}>
                    <TournamentTableTeam />
                    <TournamentTableTeam />
                </div>
            </div>
        </div>
    );
};

export default TournamentTable;
