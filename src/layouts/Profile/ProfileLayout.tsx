import ProfileUserBanner from "@layouts/Profile/ProfileUserBanner/ProfileUserBanner";
import AchievementsBar from "@features/AchievementsBar/AchievementsBar";
import ProfileUserInfo from "@layouts/Profile/ProfileUserInfo/ProfileUserInfo";
import ProfileUserActivity from "@layouts/Profile/ProfileUserActivity/ProfileUserActivity";
import { WidgetLastMatches } from "@features/Widget/WidgetLastMatches/WidgetLastMatches";
import styles from "./ProfileLayout.module.css";

const ProfileLayout = () => {
    return (
        <>
            <ProfileUserBanner />
            <div>
                <AchievementsBar />
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <ProfileUserInfo />
                </div>
                <div className={styles.column}>
                    <ProfileUserActivity />
                </div>
            </div>
            <WidgetLastMatches />
        </>
    );
};

export default ProfileLayout;
