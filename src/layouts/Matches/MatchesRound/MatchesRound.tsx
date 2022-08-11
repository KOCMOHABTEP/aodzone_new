import Icon from "@components/Icon/Icon";
import styles from "./MatchesRound.module.css";

const MatchesRound = () => {
    return (
        <div className={styles.componentFutureMatchesRound}>
            <Icon name="arrow_left" className={styles.iconMatchesLeft} />
            <div className={styles.roundMatchesList}>
                <div className={styles.roundComponentMatches}>
                    <div className={styles.roundsContainer}>
                        <div className={styles.headerAchievementMatches}>
                            ROUND OF16
                        </div>
                        <div className={styles.achievementMatches}>
                            BEST OF1
                        </div>
                    </div>
                    <div className={styles.textRound}>22APRIL2018</div>
                </div>
                <div className={styles.roundComponentMatches}>
                    <div className={styles.roundsContainer}>
                        <div className={styles.headerAchievementMatches}>
                            ROUND OF16
                        </div>
                        <div className={styles.achievementMatches}>
                            BEST OF1
                        </div>
                    </div>
                    <div className={styles.textRound}>22APRIL2018</div>
                </div>
                <div className={styles.roundComponentMatches}>
                    <div className={styles.roundsContainer}>
                        <div className={styles.headerAchievementMatches}>
                            ROUND OF16
                        </div>
                        <div className={styles.achievementMatches}>
                            BEST OF1
                        </div>
                    </div>
                    <div className={styles.textRound}>22APRIL2018</div>
                </div>
            </div>
            <Icon name="arrow_right" className={styles.iconMatchesRight} />
        </div>
    );
};

export default MatchesRound;
