import AchievementsBar from "@features/AchievementsBar/AchievementsBar";
import ProfileUserInfo from "@layouts/Profile/ProfileUserInfo/ProfileUserInfo";
import ProfileUserActivity from "@layouts/Profile/ProfileUserActivity/ProfileUserActivity";
import { WidgetLastMatches } from "@features/Widget/WidgetLastMatches/WidgetLastMatches";
import UserHeader from "@components/UserHeader/UserHeader";
import styles from "./ProfileLayout.module.css";

const ProfileLayout = () => {
    return (
        <>
            <div className={styles.itemUserHeader}>
                <UserHeader nickName="КОСМОНАВТ" level={23} date="23.05.2022" />
            </div>
            <div className={styles.itemAchievementsBar}>
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

export default ProfileLayout;
