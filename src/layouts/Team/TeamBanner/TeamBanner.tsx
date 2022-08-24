import Avatar from "@components/Avatar/Avatar";
import styles from "./TeamBanner.module.scss";

const TeamBanner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.team}>
                <div className={styles.logo}>
                    <Avatar size="large" />
                </div>
                <div className={styles.content}>
                    <div className={styles.head}>
                        <div className={styles.title}>
                            <div className={styles.name}>AODZONE</div>
                            <div className={styles.flag}>RU</div>
                        </div>
                        <div className={styles.description}>
                            Playing Counter Strike Global Offensive
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.list}>
                            <div className={styles.item}>1</div>
                            <div className={styles.item}>2</div>
                            <div className={styles.item}>3</div>
                            <div className={styles.item}>4</div>
                        </div>
                        <div className={styles.button}>Все достижения</div>
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.bannerBodyImage}>
                    <img
                        className={styles.bannerBodyImageImg}
                        src="/img/wallpaper-space.jpg"
                    />
                </div>
                <div className={styles.bannerBodyUser}>
                    <div className={styles.bannerBodyUserInfo}>
                        <div className={styles.userName}>Название команды</div>
                    </div>
                </div>
            </div>

            <div className={styles.bannerFooter} />
        </div>
    );
};

export default TeamBanner;
