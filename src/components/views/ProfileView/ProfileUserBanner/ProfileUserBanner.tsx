import { Avatar } from "@/components/ui/Avatar";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";
import styles from "./ProfileUserBanner.module.scss";

export const ProfileUserBanner = () => {
    return (
        <div className={styles.item}>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <img className={styles.image__img} src="/img/space.jpg" />
                </div>
                <div className={styles.user}>
                    <Avatar />
                    <div className={styles.info}>
                        <div className={styles.info__name}>KOCMOHABT</div>
                        <div className={styles.progress} />
                        <div className={styles.membership}>
                            Пользователь с 09 Окт 2021
                        </div>
                        <div className={styles.socials}>
                            <Link
                                href="https://steamcommunity.com/id/KOCMOHABTYC"
                                passHref
                            >
                                <a className={styles.socials__link}>
                                    <div className={styles.root}>
                                        <div className={styles.icon}>
                                            <Icon
                                                name="social_steam"
                                                size={24}
                                            />
                                        </div>
                                        <div className={styles.nick}>
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
