import { AchievementsBar } from "@/components/ui/AchievementsBar";
import { ProfileUserInfo } from "@/components/views/ProfileView/ProfileUserInfo";
import { ProfileUserActivity } from "@/components/views/ProfileView/ProfileUserActivity";
import { WidgetLastMatches } from "@/components/ui/Widget/WidgetLastMatches/WidgetLastMatches";
import { UserHeader } from "@/components/ui/UserHeader";
import { TeamMembers } from "@/components/views/ProfileView/TeamMembers";
import { useState } from "react";
import { TeamForm } from "@/components/views/ProfileView/TeamForm";
import { FormDescription } from "@/components/views/ProfileView/FormDescription";
import styles from "./ProfileView.module.scss";

export const ProfileView = () => {
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
        <>
            <div className={styles.item}>
                <UserHeader
                    handleOpenTeamModal={handleOpenTeamModal}
                    nickName="КОСМОНАВТ"
                    level={23}
                    date="23.05.2022"
                />
            </div>
            <div className={styles.form}>
                <TeamForm
                    teamFormVisible={teamFormVisible}
                    handleCloseTeamModal={handleCloseTeamModal}
                />
            </div>
            <div className={styles.wrapper}>
                <AchievementsBar />
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <ProfileUserInfo
                        title="КОСМОНАВТ"
                        location="Сербия"
                        born="25.03.1996"
                        joined="5"
                        online="Был в сети 26.08.2022"
                        handleOpenDescriptionForm={handleOpenDescriptionModal}
                    />
                </div>
                <div className={styles.column}>
                    <ProfileUserActivity />
                </div>
            </div>
            <div className={styles.team}>
                <TeamMembers />
            </div>
            <WidgetLastMatches title="Последние матчи" />
            <div>
                <FormDescription
                    descriptionFormVisible={descriptionFormVisible}
                    handleCloseDescriptionForm={handleCloseDescriptionModal}
                />
            </div>
        </>
    );
};
