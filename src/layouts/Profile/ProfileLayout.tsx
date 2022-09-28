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
                <UserHeader />
            </div>
            <div className={styles.itemAchievementsBar}>
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
            <WidgetLastMatches title="Последние матчи" />
        </>
    );
};

export default ProfileLayout;
