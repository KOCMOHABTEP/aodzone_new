import Avatar from "@components/Avatar/Avatar";
import Icon from "@components/Icon/Icon";
import Link from "next/link";
import styles from "./ProfileUserBanner.module.css";

const ProfileUserBanner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerBody}>
                <div className={styles.bannerBodyImage}>
                    <img
                        className={styles.bannerBodyImageImg}
                        src="/img/space.jpg"
                    />
                </div>
                <div className={styles.bannerBodyUser}>
                    <Avatar size="large" />
                    <div className={styles.bannerBodyUserInfo}>
                        <div className={styles.userName}>KOCMOHABT</div>
                        <div className={styles.progressBar} />
                        <div className={styles.userMembership}>
                            Пользователь с 09 Окт 2021
                        </div>
                        <div className={styles.userSocials}>
                            <Link
                                href="https://steamcommunity.com/id/KOCMOHABTYC"
                                passHref
                            >
                                <a className={styles.userSocialsLink}>
                                    <div className={styles.userSocialsItem}>
                                        <div
                                            className={
                                                styles.userSocialsItemIcon
                                            }
                                        >
                                            <Icon
                                                name="social_steam"
                                                size={24}
                                            />
                                        </div>
                                        <div
                                            className={
                                                styles.userSocialsItemName
                                            }
                                        >
                                            KOCMOHABT
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileUserBanner;
