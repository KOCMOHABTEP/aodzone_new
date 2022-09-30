import styles from "@layouts/Tournaments/TournamentDetail/TournamentBanner/TournamentBanner.module.css";
import Icon from "@components/Icon/Icon";
import Tag from "@components/Tag/Tag";
import { Verify } from "crypto";
import Button from "@components/Button/Button";

const MatchesBanner = () => {
    return (
        <div>
            <div className={styles.item}>
                <div className={styles.itemContent}>
                    <div className={styles.itemHeader}>
                        <div className={styles.itemHeaderTeamLabels}>
                            <Tag label="VERIFIED" />
                            <Tag label="PREMIUM" />
                            <Tag label="ROKIE" />
                        </div>
                        <div className={styles.itemRight}>
                            <div className={styles.itemRightButton}>
                                <Button
                                    buttonClassName={styles.itemRightButtonBtn}
                                    text="Join Discord"
                                />
                            </div>
                            <div className={styles.itemRightAdditional}>
                                . . .
                            </div>
                        </div>
                    </div>
                    <div className={styles.itemInfo}>
                        <img
                            className={styles.itemInfoImage}
                            src="https://www.mavdigital.com/wp-content/uploads/2017/08/MAVHACK2022.jpg"
                            alt="banner"
                        />
                        <div className={styles.itemInfoHeader}>
                            <div className={styles.itemInfoHeaderTitle}>
                                <div className={styles.itemInfoHeaderWrapper}>
                                    <Icon name="friends" />
                                    <div
                                        className={
                                            styles.itemInfoHeaderTitleText
                                        }
                                    >
                                        Call of Duty Ghost
                                    </div>
                                </div>
                                <div>
                                    <Button
                                        buttonClassName={
                                            styles.itemInfoHeaderButton
                                        }
                                        text="Поделиться"
                                    />
                                </div>
                            </div>
                            <div className={styles.itemInfoMatches}>
                                Cracken.gg Crazy Wars #36 - 5v5
                            </div>
                            <div className={styles.infoJoinMatchesBanner}>
                                <div className={styles.itemButton}>
                                    <Button
                                        buttonClassName={styles.itemButtonBtn}
                                        text="+ Присоединиться"
                                    />
                                </div>
                                <div className={styles.itemJoinInfo}>
                                    Starting in 5D 3H 12M
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchesBanner;
