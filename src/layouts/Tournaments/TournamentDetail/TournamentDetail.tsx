import MatchesBanner from "@layouts/Matches/MatchesBanner/MatchesBanner";
import TournamentTable from "@layouts/Tournaments/TournamentDetail/TournamentTable/TournamentTable";
import Layout from "@layouts/Layout/Layout";
import TournamentRound from "@layouts/Tournaments/TournamentDetail/TournamentRound/TournamentRound";
import styles from "./TournamentDetail.module.css";
import Icon from "@components/Icon/Icon";
import cn from "classnames";

const TournamentDetail = () => {
    const handleArrowLeftClick = () => {
        console.log("Щёлк влево");
    };

    const handleArrowRightClick = () => {
        console.log("Щёлк вправо");
    };

    return (
        <Layout title="AOD Zone | Турнир">
            <MatchesBanner />
            <div className={styles.rounds}>
                <div onClick={handleArrowLeftClick}>
                    <Icon
                        name="arrow_left"
                        className={cn(styles.roundsIcon, styles.roundsIconLeft)}
                    />
                </div>
                <TournamentRound />
                <TournamentRound />
                <TournamentRound />
                <div onClick={handleArrowRightClick}>
                    <Icon
                        name="arrow_right"
                        className={cn(
                            styles.roundsIcon,
                            styles.roundsIconRight
                        )}
                    />
                </div>
            </div>
            <div className={styles.tournaments}>
                <TournamentTable />
                <TournamentTable />
                <TournamentTable />
            </div>
        </Layout>
    );
};

export default TournamentDetail;
