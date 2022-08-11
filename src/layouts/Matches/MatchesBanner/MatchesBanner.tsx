import styles from "@layouts/Matches/MatchesBanner/MatchesBanner.module.css";
import Icon from "@components/Icon/Icon";
import Button from "@components/Button/Button";

const MatchesBanner = () => {
    return (
        <div>
            <div className={styles.HeaderMatches}>
                <div className={styles.achievementsHeader}>
                    <div className={styles.teamLabels}>
                        <div className={styles.statusHeader}>Verified</div>
                        <div className={styles.statusHeader}>Premium</div>
                        <div className={styles.statusHeader}>Rokie</div>
                    </div>
                    <div className={styles.rightAchievementsHeader}>
                        <div className={styles.componentStatusHeader}>
                            <div className={styles.statusTextHeader}>
                                Join Discord
                            </div>
                            <Icon
                                name="home"
                                className={styles.buttonIconColorHeaderMatches}
                            />
                        </div>
                        <div className={styles.additionalMenuHeader}>. . .</div>
                    </div>
                </div>
                <div className={styles.componentInfoMatchesBanner}>
                    <img
                        className={styles.imageInfoMatchesBanner}
                        src="https://www.mavdigital.com/wp-content/uploads/2017/08/MAVHACK2022.jpg"
                        alt="banner"
                    />
                    <div className={styles.textBannerInfoMatchesBanner}>
                        <div className={styles.infoShareMatchesBanner}>
                            <Icon name="friends" />
                            <div className={styles.textContentMatchesBanner}>
                                Call of Duty Ghost
                            </div>
                            <button className={styles.buttonShareMatchesBanner}>
                                <div>share</div>
                                <Icon name="groups" />
                            </button>
                        </div>
                        <div className={styles.contentTextMatches}>
                            Cracken.gg Crazy Wars #36 - 5v5
                        </div>
                        <div className={styles.infoJoinMatchesBanner}>
                            <button className={styles.buttonJoinMatchesBanner}>
                                + Join Tournament
                            </button>
                            <div
                                className={styles.textContentJoinMatchesBanner}
                            >
                                Starting in 5D 3H 12M
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.tabsMatchesBanner}>
                    <div className={styles.wrapperTabsContentMatches}>
                        <div className={styles.amountMatches}>8/24</div>
                        <div className={styles.nameMatchesBanner}>OVERVIEW</div>
                    </div>
                    <div className={styles.wrapperTabsContentMatches}>
                        <div className={styles.amountMatches}>8/24</div>
                        <div className={styles.nameMatchesBanner}>TIMES</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchesBanner;
