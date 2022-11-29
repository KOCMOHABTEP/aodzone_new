import { AchievementsBar } from "@/components/ui/AchievementsBar";
import { ProfileUserInfo } from "@/components/views/ProfileView/ProfileUserInfo";
import { ProfileUserActivity } from "@/components/views/ProfileView/ProfileUserActivity";
import { WidgetLastMatches } from "@/components/ui/Widget/WidgetLastMatches/WidgetLastMatches";
import { UserHeader } from "@/components/ui/UserHeader";
import styles from "./ProfileView.module.scss";

export const ProfileView = () => {
    return (
        <>
            <div className={styles.item}>
                <UserHeader nickName="КОСМОНАВТ" level={23} date="23.05.2022" />
            </div>
            <div className={styles.wrapper}>
                <AchievementsBar />
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <ProfileUserInfo
                        location="Сербия"
                        born="25.03.1996"
                        joined="5"
                        online="Был в сети 26.08.2022"
                    />
                </div>
                <div className={styles.column}>
                    <ProfileUserActivity />
                </div>
            </div>
            <WidgetLastMatches title="Последние матчи" />
        </>
    );
};
