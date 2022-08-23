import Icon from "@components/Icon/Icon";
import cn from "classnames";
import styles from "./MatchDetail.module.css";

const MatchDetail = () => {
    return (
        <div className={styles.wrapperMatchDetail}>
            <div className={styles.matchDetailInfo}>
                <div className={styles.headerMatchDetailInfo}>
                    Match room - best out of 1
                </div>
                <div className={styles.wrapperTitleMatchDetailInfo}>
                    <div className={styles.titleMatchDetailInfo}>
                        CRACKEN SUPREME LEAGUE
                    </div>
                    <button className={styles.buttonMatchDetail}>
                        <div className={styles.shareButtonMatchDetail}>
                            Поделиться
                        </div>
                        <Icon name="arrow_right" size={16} />
                    </button>
                </div>
                <img
                    className={styles.logoGameMatchesDetailInfo}
                    src="https://pngimg.com/uploads/call_of_duty/call_of_duty_PNG1.png"
                    alt="Логотип игры"
                />
            </div>
            <div className={styles.matchDetailResults}>
                <div className={styles.wrapperDetailMatch}>
                    <div className={styles.wrapperResultMatch}>
                        <div
                            className={cn(styles.resultMatchInfo, {
                                [styles.resultMatchInfoLeft]: true,
                            })}
                        >
                            <div
                                className={cn(styles.battleStatusResultMatch, {
                                    [styles.battleStatusVictoryResultMatch]:
                                        true,
                                    [styles.battleStatusDrawResultMatch]: false,
                                })}
                            >
                                Victory
                            </div>
                            <div className={styles.nameTeamResultMatch}>
                                Name team
                            </div>
                        </div>
                        <img
                            className={styles.logoResultMatch}
                            src="https://img.freepik.com/premium-vector/e-sports-team-logo-with-viking_113398-8.jpg"
                            alt="logo"
                        />
                        <div className={styles.checkResultMatch}>3</div>
                    </div>
                    <div className={styles.textDetailMatch}>vs</div>
                    <div className={styles.wrapperResultMatch}>
                        <div>
                            <div className={styles.checkResultMatch}>0</div>
                        </div>
                        <img
                            className={styles.logoResultMatch}
                            src="https://img.freepik.com/premium-vector/e-sports-team-logo-with-viking_113398-8.jpg"
                            alt="logo"
                        />
                        <div
                            className={cn(styles.resultMatchInfo, {
                                [styles.resultMatchInfoRight]: true,
                            })}
                        >
                            <div
                                className={cn(styles.battleStatusResultMatch, {
                                    [styles.battleStatusDefeatResultMatch]:
                                        true,
                                    [styles.battleStatusDrawResultMatch]: false,
                                })}
                            >
                                Defeat
                            </div>
                            <div className={styles.nameTeamResultMatch}>
                                Name team
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.wrapperDataDetailResults}>
                    <div className={styles.dataDetailResults}>MAY 28 2022</div>
                    <div className={styles.timeDetailResults}>16:30</div>
                </div>
                <div className={styles.wrapperInfoDetailMatch}>
                    <div className={styles.infoDetailMatch}>DE_DUST2</div>
                    <div className={styles.infoDetailMatch}>30 ROUNDS</div>
                    <div className={styles.infoDetailMatch}>SVS</div>
                    <div className={styles.infoDetailMatch}>DE_DUST2</div>
                </div>
            </div>
            <div className={styles.statisticsPlayers}>
                <div
                    className={cn(styles.wrapperTeamStatistics, {
                        [styles.wrapperTeamStatisticsLeft]: true,
                    })}
                >
                    <div className={styles.wrapperUserStatisticHeader}>
                        <div>user team</div>
                        <div>K-A-D</div>
                        <div>K/D</div>
                        <div>HS</div>
                    </div>
                    <div className={styles.wrapperUserStatisticPlayer}>
                        <div className={styles.userResultTeam}>
                            <img
                                className={styles.logoUserTeamStatisticPlayer}
                                src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1476661/draw_svg20220113-19449-1pj5omn.svg.png"
                                alt="logo"
                            />
                            <div>
                                <div className={styles.userInfoStatisticResult}>
                                    <div
                                        className={
                                            styles.nickNameUserStatisticResult
                                        }
                                    >
                                        Dzezman
                                    </div>
                                    <div
                                        className={
                                            styles.accountStatusProStatisticResult
                                        }
                                    >
                                        PRO
                                    </div>
                                    <div
                                        className={
                                            styles.levelUserStatisticResult
                                        }
                                    >
                                        LVL6
                                    </div>
                                    <Icon
                                        className={
                                            styles.statusLogoUserInfoStatisticResult
                                        }
                                        name="profile"
                                    />
                                </div>
                                <a
                                    href="#"
                                    className={
                                        styles.linkUserInfoStatisticResult
                                    }
                                >
                                    <Icon
                                        className={
                                            styles.iconLinkStatisticResult
                                        }
                                        name="home"
                                    />
                                    <div
                                        className={
                                            styles.linkNameUserInfoStatisticResult
                                        }
                                    >
                                        BORIS WICK
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.resultMatchesUser}>10-2-6</div>
                        <div className={styles.resultMatchesUser}>0.43</div>
                        <div className={styles.resultMatchesUser}>37% (4)</div>
                    </div>
                    <div className={styles.wrapperUserStatisticPlayer}>
                        <div className={styles.userResultTeam}>
                            <img
                                className={styles.logoUserTeamStatisticPlayer}
                                src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1476661/draw_svg20220113-19449-1pj5omn.svg.png"
                                alt="logo"
                            />
                            <div>
                                <div className={styles.userInfoStatisticResult}>
                                    <div
                                        className={
                                            styles.nickNameUserStatisticResult
                                        }
                                    >
                                        Dzezman
                                    </div>
                                    <div
                                        className={
                                            styles.accountStatusProStatisticResult
                                        }
                                    >
                                        PRO
                                    </div>
                                    <div
                                        className={
                                            styles.levelUserStatisticResult
                                        }
                                    >
                                        LVL6
                                    </div>
                                    <Icon
                                        className={
                                            styles.statusLogoUserInfoStatisticResult
                                        }
                                        name="profile"
                                    />
                                </div>
                                <a
                                    href="#"
                                    className={
                                        styles.linkUserInfoStatisticResult
                                    }
                                >
                                    <Icon
                                        className={
                                            styles.iconLinkStatisticResult
                                        }
                                        name="home"
                                    />
                                    <div
                                        className={
                                            styles.linkNameUserInfoStatisticResult
                                        }
                                    >
                                        BORIS WICK
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.resultMatchesUser}>10-2-6</div>
                        <div className={styles.resultMatchesUser}>0.43</div>
                        <div className={styles.resultMatchesUser}>37% (4)</div>
                    </div>
                </div>
                <div
                    className={cn(styles.wrapperTeamStatistics, {
                        [styles.wrapperTeamStatisticsRight]: true,
                    })}
                >
                    <div className={styles.wrapperUserStatisticHeader}>
                        <div>user team</div>
                        <div>K-A-D</div>
                        <div>K/D</div>
                        <div>HS</div>
                    </div>
                    <div className={styles.wrapperUserStatisticPlayer}>
                        <div className={styles.userResultTeam}>
                            <img
                                className={styles.logoUserTeamStatisticPlayer}
                                src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1476661/draw_svg20220113-19449-1pj5omn.svg.png"
                                alt="logo"
                            />
                            <div>
                                <div className={styles.userInfoStatisticResult}>
                                    <div
                                        className={
                                            styles.nickNameUserStatisticResult
                                        }
                                    >
                                        Dzezman
                                    </div>
                                    <div
                                        className={
                                            styles.accountStatusProStatisticResult
                                        }
                                    >
                                        PRO
                                    </div>
                                    <div
                                        className={
                                            styles.levelUserStatisticResult
                                        }
                                    >
                                        LVL6
                                    </div>
                                    <Icon
                                        className={
                                            styles.statusLogoUserInfoStatisticResult
                                        }
                                        name="profile"
                                    />
                                </div>
                                <a
                                    href="#"
                                    className={
                                        styles.linkUserInfoStatisticResult
                                    }
                                >
                                    <Icon
                                        className={
                                            styles.iconLinkStatisticResult
                                        }
                                        name="home"
                                    />
                                    <div
                                        className={
                                            styles.linkNameUserInfoStatisticResult
                                        }
                                    >
                                        BORIS WICK
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.resultMatchesUser}>10-2-6</div>
                        <div className={styles.resultMatchesUser}>0.43</div>
                        <div className={styles.resultMatchesUser}>37% (4)</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchDetail;
