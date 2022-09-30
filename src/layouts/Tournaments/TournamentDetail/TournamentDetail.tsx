import MatchesBanner from "@layouts/Tournaments/TournamentDetail/TournamentBanner/TournamentBanner";
import TournamentTable from "@layouts/Tournaments/TournamentDetail/TournamentTable/TournamentTable";
import Layout from "@layouts/Layout/Layout";
import TournamentRound from "@layouts/Tournaments/TournamentDetail/TournamentRound/TournamentRound";
import Icon from "@components/Icon/Icon";
import cn from "classnames";
import TournamentTableTeam from "@layouts/Tournaments/TournamentDetail/TournamentTable/TournamentTableTeam/TournamentTableTeam";
import styles from "./TournamentDetail.module.css";

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
                <TournamentRound
                    title="Раунд 1"
                    label="BEST OF1"
                    data="22АПРЕЛЯ2018"
                />
                <TournamentRound
                    title="Раунд 2"
                    label="BEST OF1"
                    data="23АПРЕЛЯ2019"
                />
                <TournamentRound
                    title="Раунд 3"
                    label="BEST OF23"
                    data="25МАЯ2015"
                />
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
                <TournamentTable>
                    <TournamentTableTeam nameTeam="Лупа" gameScore={2} />
                    <TournamentTableTeam nameTeam="Пупа" gameScore={3} />
                </TournamentTable>
                <TournamentTable>
                    <TournamentTableTeam nameTeam="КОСМОНАВТ" gameScore={10} />
                    <TournamentTableTeam nameTeam="Пупа" gameScore={15} />
                </TournamentTable>
                <TournamentTable>
                    <TournamentTableTeam nameTeam="Лупа" gameScore={2} />
                    <TournamentTableTeam nameTeam="Пупа" gameScore={3} />
                </TournamentTable>
            </div>
        </Layout>
    );
};

export default TournamentDetail;
