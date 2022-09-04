import Icon from "@components/Icon/Icon";
import TournamentItem from "@layouts/Tournaments/TournamentItem/TournamentItem";
import Button from "@components/Button/Button";
import TournamentActionItem from "@layouts/Tournaments/TournamentActionItem/TournamentActionItem";
import TournamentFilter from "@layouts/Tournaments/TournamentFilter/TournamentFilter";
import styles from "./TournamentsPage.module.css";

const TournamentsPage = () => {
    return (
        <div className={styles.wrapperTournamentsPage}>
            <div className={styles.tournamentActionsBanner}>
                <div className={styles.tournamentActionsBannerColumn}>
                    <TournamentActionItem type="SOLO" />
                </div>
                <div className={styles.tournamentActionsBannerColumn}>
                    <TournamentActionItem type="PARTY" />
                </div>
                <div className={styles.tournamentActionsBannerColumn}>
                    <TournamentActionItem type="TEAM" />
                </div>
            </div>
            <TournamentFilter />
            <div>
                <div className={styles.tournamentsList}>
                    <TournamentItem
                        type="IN_PROGRESS"
                        src="https://media.kasperskydaily.com/wp-content/uploads/sites/90/2020/02/17181010/game-ratings-featured.jpg"
                    />
                    <TournamentItem
                        type="IN_PROGRESS"
                        src="https://img1.akspic.ru/previews/2/3/2/8/6/168232/168232-battlefield_2042-battlefield_1-ekshn_igra-voda-podzemnye_vody-550x310.jpg"
                    />
                    <TournamentItem
                        type="FINISHED"
                        src="https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2022%2F07%2F02F28BDB-D9E6-4540-93CD-D62052C754BE.jpeg"
                    />
                    <TournamentItem
                        type="UPCOMING"
                        src="https://gl-img.rg.ru/uploads/images/2018/02/26/c4379d0633494f0.jpg"
                    />
                    <TournamentItem
                        type="FINISHED"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bGbax_OXFk3FlbEm6UQSOqdBVUg9T_jVbw&usqp=CAU"
                    />
                </div>
            </div>
        </div>
    );
};

export default TournamentsPage;
