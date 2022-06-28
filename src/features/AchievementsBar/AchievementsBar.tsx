import AchievementsBarItem from "@features/AchievementsBar/AchievementsBarItem/AchievementsBarItem";
import styles from "./AchievementsBar.module.scss";

const AchievementsBar = () => {
    return (
        <div className={styles.achievements}>
            <AchievementsBarItem
                description="Луп из семи"
                icon="arrow_up"
                stats="50%"
            />
            <AchievementsBarItem
                description="Луп из семи"
                icon="friends"
                stats="50%"
            />
            <AchievementsBarItem
                description="Луп из семи"
                icon="timer"
                stats="50%"
            />
            <AchievementsBarItem
                description="Луп из семи"
                icon="matches"
                stats="50%"
            />
            <AchievementsBarItem
                description="Луп из семи"
                icon="groups"
                stats="50%"
            />
        </div>
    );
};

export default AchievementsBar;
