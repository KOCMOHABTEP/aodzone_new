import Icon from "@components/Icon/Icon";
import TournamentItem from "@layouts/Tournaments/TournamentItem/TournamentItem";
import styles from "./TournamentsPage.module.css";

const TournamentsPage = () => {
    return (
        <div className={styles.wrapperTournamentsPage}>
            <div>header</div>
            <div>
                <div className={styles.tournamentsList}>
                    <TournamentItem type="IN_PROGRESS" />
                    <TournamentItem type="IN_PROGRESS" />
                    <TournamentItem type="FINISHED" />
                    <TournamentItem type="UPCOMING" />
                    <TournamentItem type="FINISHED" />
                </div>
            </div>
        </div>
    );
};

export default TournamentsPage;
