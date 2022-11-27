import TeamForm from "@/layouts/Team/TeamForm/TeamForm";
import ProfileUserInfo from "@/layouts/Profile/ProfileUserInfo/ProfileUserInfo";
import TeamMembers from "@/layouts/Team/TeamMembers/TeamMembers";
import { WidgetLastMatches } from "@/features/Widget/WidgetLastMatches/WidgetLastMatches";
import AchievementsBar from "@/features/AchievementsBar/AchievementsBar";
import { useState } from "react";
import UserHeader from "@/components/UserHeader/UserHeader";
import FormDescription from "@/layouts/Team/FormDescription/FormDescription";
import Input from "@/components/ui/Input/Input";
import styles from "./TeamPage.module.css";

const TeamPage = () => {
    const [teamFormVisible, setTeamFormVisible] = useState(false);
    const [descriptionFormVisible, setDescriptionFormVisible] = useState(false);

    const handleOpenTeamModal = () => {
        setTeamFormVisible(true);
    };

    const handleCloseTeamModal = () => {
        setTeamFormVisible(false);
    };

    const handleOpenDescriptionModal = () => {
        setDescriptionFormVisible(true);
    };

    const handleCloseDescriptionModal = () => {
        setDescriptionFormVisible(false);
    };

    return (
        <div className={styles.teamPage}>
            <div>
                <UserHeader
                    nickName="КОСМОНАВТ"
                    level={32}
                    date="23.09.2022"
                    steam={{
                        link: "https://steamcommunity.com/id/KOCMOHABTYC",
                        id: "KOCMOHABTYC",
                    }}
                    handleOpenTeamModal={handleOpenTeamModal}
                />
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
                    <ProfileUserInfo
                        description={
                            "Nothing intresting hasn't been written here, what a pity. It\n" +
                            "                    is a nice field"
                        }
                        location="Сербия"
                        joined="23"
                        born="27.03.1968"
                        online="Был в сети 5 дней назад"
                        handleOpenDescriptionForm={handleOpenDescriptionModal}
                    />
                    <TeamMembers />
                </div>
            </div>
            <div>
                <WidgetLastMatches title="Все матчи команды" />
            </div>
            <div>
                <FormDescription
                    descriptionFormVisible={descriptionFormVisible}
                    handleCloseDescriptionForm={handleCloseDescriptionModal}
                />
            </div>
        </div>
    );
};

export default TeamPage;
