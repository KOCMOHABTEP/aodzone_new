import TeamForm from "@layouts/Team/TeamForm/TeamForm";
import ProfileUserInfo from "@layouts/Profile/ProfileUserInfo/ProfileUserInfo";
import TeamMembers from "@layouts/Team/TeamMembers/TeamMembers";
import { WidgetLastMatches } from "@features/Widget/WidgetLastMatches/WidgetLastMatches";
import AchievementsBar from "@features/AchievementsBar/AchievementsBar";
import { useState } from "react";
import UserHeader from "@components/UserHeader/UserHeader";
import styles from "./TeamPage.module.css";

const TeamPage = () => {
    const [teamFormVisible, setTeamFormVisible] = useState(false);

    const handleOpenTeamModal = () => {
        setTeamFormVisible(true);
    };

    const handleCloseTeamModal = () => {
        setTeamFormVisible(false);
    };

    return (
        <div className={styles.teamPage}>
            <div>
                <UserHeader handleOpenTeamModal={handleOpenTeamModal} />
            </div>
            <div className={styles.teamPageForm}>
                <TeamForm
                    teamFormVisible={teamFormVisible}
                    handleCloseTeamModal={handleCloseTeamModal}
                />
            </div>
            <div className={styles.teamAchievements}>
                <AchievementsBar />
            </div>
            <div>
                <div className={styles.teamProfileUser}>
                    <ProfileUserInfo />
                    <TeamMembers />
                </div>
            </div>
            <div>
                <WidgetLastMatches />
            </div>
        </div>
    );
};

export default TeamPage;
