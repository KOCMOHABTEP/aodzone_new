import { Tag } from "@/components/ui/Tag";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

import styles from "./TournamentBanner.module.scss";

export const MatchesBanner = () => {
    return (
        <div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.header__labels}>
                            <Tag label="VERIFIED" />
                            <Tag label="PREMIUM" />
                            <Tag label="ROKIE" />
                        </div>
                        <div className={styles.right}>
                            <div className={styles.button}>
                                <Button
                                    buttonClassName={styles.button__btn}
                                    text="Join Discord"
                                />
                            </div>
                            <div className={styles.right__additional}>
                                . . .
                            </div>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <img
                            className={styles.info__image}
                            src="https://www.mavdigital.com/wp-content/uploads/2017/08/MAVHACK2022.jpg"
                            alt="banner"
                        />
                        <div className={styles.wrapper}>
                            <div className={styles.wrapper__header}>
                                <div className={styles.wrapper__info}>
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
