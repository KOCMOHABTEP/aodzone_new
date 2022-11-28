import { TeamForm } from "@/components/views/TeamView/TeamForm";
import { ProfileUserInfo } from "@/components/views/ProfileView/ProfileUserInfo";
import { TeamMembers } from "@/components/views/TeamView/TeamMembers";
import { FormDescription } from "@/components/views/TeamView/FormDescription";
import { WidgetLastMatches } from "@/features/Widget/WidgetLastMatches/WidgetLastMatches";
import AchievementsBar from "@/features/AchievementsBar/AchievementsBar";
import { useState } from "react";
import UserHeader from "@/components/UserHeader/UserHeader";

import styles from "./TeamView.module.scss";

export const TeamView = () => {
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
        <div className={styles.item}>
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
            <div className={styles.form}>
                <TeamForm
                    teamFormVisible={teamFormVisible}
                    handleCloseTeamModal={handleCloseTeamModal}
                />
            </div>
            <div className={styles.achievements}>
                <AchievementsBar />
            </div>
            <div>
                <div className={styles.profile}>
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
