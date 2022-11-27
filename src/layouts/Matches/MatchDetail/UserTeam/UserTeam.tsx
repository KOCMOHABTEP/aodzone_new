import cn from "classnames";
import UserTeamItem from "@/layouts/Matches/MatchDetail/UserTeam/UserTeamItem/UserTeamItem";
import styles from "./UserTeam.module.css";

const UserTeam = () => {
    return (
        <div className={styles.item}>
            <div
                className={cn(styles.itemStatistics, {
                    [styles.itemStatisticsLeft]: true,
                    [styles.itemStatisticsRight]: false,
                })}
            >
                <div className={styles.itemHeader}>
                    <div className={styles.itemHeaderTeamName}>user team</div>
                    <div>K-A-D</div>
                    <div>K/D</div>
                    <div>HS</div>
                </div>
                <UserTeamItem
                    title="КОСМОНАВТ"
                    level={6}
                    steamNickName="КОСМОНАВТЕР"
                    src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1476661/draw_svg20220113-19449-1pj5omn.svg.png"
                />
            </div>
        </div>
    );
};

export default UserTeam;
