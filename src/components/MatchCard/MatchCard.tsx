import Icon from "@components/Icon/Icon";
import Link from "next/link";
import cn from "classnames";
import Avatar from "@components/Avatar/Avatar";
import styles from "./MatchCard.module.css";

const MatchCard = () => {
    return (
        <Link href="/matches/1">
            <a className={styles.match}>
                <div className={styles.matchHead}>
                    <div className={styles.matchHeadDate}>
                        22 Ноя 2021 : 19:30
                    </div>
                    <div className={styles.matchHeadResults}>
                        <Icon
                            name="timer"
                            size={16}
                            className={styles.matchHeadResultsIcon}
                        />
                        <span>39 Мин</span>
                        <span>—</span>
                        <div className={styles.matchHeadResultsStatus}>
                            ПОБЕДА
                        </div>
                    </div>
                </div>
                <div className={styles.matchBody}>
                    <div className={styles.matchBodyResult}>
                        <Link href="#" passHref={true}>
                            <a>
                                <div
                                    className={cn(
                                        styles.player,
                                        styles.playerLeft
                                    )}
                                >
                                    <Avatar level={0} />
                                    <div className={styles.playerInfo}>
                                        <div
                                            className={
                                                styles.playerInfoNickname
                                            }
                                        >
                                            KOCMOHABT
                                        </div>
                                        <div className={styles.playerInfoLevel}>
                                            Уровень 12
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <div className={styles.matchScore}>1:0</div>
                        <Link href="#" passHref>
                            <a>
                                <div
                                    className={cn(
                                        styles.player,
                                        styles.playerRight
                                    )}
                                >
                                    <Avatar level={0} />
                                    <div className={styles.playerInfo}>
                                        <div
                                            className={
                                                styles.playerInfoNickname
                                            }
                                        >
                                            DreamCatcher
                                        </div>
                                        <div className={styles.playerInfoLevel}>
                                            Уровень 9
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.matchBodyStats}>
                        <div className={styles.stat}>
                            <div className={styles.statName}>Карта</div>
                            <div className={styles.statValue}>aim_map_pro</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statName}>Убийств</div>
                            <div className={styles.statValue}>16</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statName}>Смертей</div>
                            <div className={styles.statValue}>5</div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default MatchCard;
