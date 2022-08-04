import Icon from "@components/Icon/Icon";
import styles from "./TeamMembers.module.css";

const TeamMembers = () => {
    return (
        <div className={styles.componentTeamMembers}>
            <div className={styles.headerTeamMembers}>
                <div>
                    <div className={styles.titleTeamMembers}>TEAM MEMBERS</div>
                </div>
                <div>
                    <div> Team Roster</div>
                </div>
            </div>
            <div className={styles.characterTeamMembers}>
                <Icon name="profile" />
                <div className={styles.nicknameTeamMembers}>Boris Wick</div>
                <div className={styles.achievementsTeamMembers}>captain</div>
            </div>
            <div className={styles.characterTeamMembers}>
                <Icon name="profile" />
                <div className={styles.nicknameTeamMembers}>Boris Wick</div>
                <div className={styles.achievementsTeamMembers}>captain</div>
            </div>
            <div className={styles.characterTeamMembers}>
                <Icon name="profile" />
                <div className={styles.nicknameTeamMembers}>Boris Wick</div>
                <div className={styles.achievementsTeamMembers}>captain</div>
            </div>
            <div className={styles.characterTeamMembers}>
                <Icon name="profile" />
                <div className={styles.nicknameTeamMembers}>Boris Wick</div>
                <div className={styles.achievementsTeamMembers}>captain</div>
            </div>
        </div>
    );
};

export default TeamMembers;
