import Icon from "@components/Icon/Icon";
import TournamentItem from "@layouts/Tournaments/TournamentItem/TournamentItem";
import styles from "./TournamentsPage.module.css";
import Button from "@components/Button/Button";
import TournamentActionItem from "@layouts/Tournaments/TournamentActionItem/TournamentActionItem";
import TournamentFilter from "@layouts/Tournaments/TournamentFilter/TournamentFilter";

const TournamentsPage = () => {
    return (
        <div className={styles.wrapperTournamentsPage}>
            <div className={styles.tournamentActionsBanner}>
                <div className={styles.tournamentActionsBannerColumn}>
                    <TournamentActionItem type={"SOLO"} />
                </div>
                <div className={styles.tournamentActionsBannerColumn}>
                    <TournamentActionItem type={"PARTY"} />
                </div>
                <div className={styles.tournamentActionsBannerColumn}>
                    <TournamentActionItem type={"TEAM"} />
                </div>
            </div>
            <TournamentFilter />
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
