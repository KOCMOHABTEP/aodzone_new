import AchievementsBarItem from "@features/AchievementsBar/AchievementsBarItem/AchievementsBarItem";
import styles from "./AchievementsBar.module.scss";

const AchievementsBar = () => {
    return (
        <div className={styles.achievements}>
            <AchievementsBarItem
                description="TOTAL MATCHES"
                icon="matches"
                stats="678"
            />
            <AchievementsBarItem
                description="WIN RATIO"
                icon="arrow_up"
                stats="68%"
            />
            <AchievementsBarItem description="TIMES" icon="timer" stats="43" />
            <AchievementsBarItem
                description="FRIENDS"
                icon="friends"
                stats="22"
            />
            <AchievementsBarItem
                description="ACHIEVEMENTS"
                icon="groups"
                stats="22"
            />
        </div>
    );
};

export default AchievementsBar;
