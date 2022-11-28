import { Avatar } from "@/components/ui/Avatar";
import { Icon } from "@/components/ui/Icon";
import styles from "./UserTeamItem.module.scss";

interface UserTeamItemProps {
    title: string;
    level: number;
    src: string;
    steamNickName: string;
}

export const UserTeamItem = ({
    title,
    level,
    src,
    steamNickName,
}: UserTeamItemProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.user}>
                <div className={styles.user__logo}>
                    <Avatar image={src} />
                </div>
                <div>
                    <div className={styles.info}>
                        <div className={styles.info__title}>{title}</div>
                        <div className={styles.info__level}>LVL {level}</div>
                        <Icon className={styles.info__icon} name="profile" />
                    </div>
                    <a
                        href="@/components/views/MatchDetailView/UserTeam/UserTeamItem/UserTeamItem#"
                        className={styles.link}
                    >
                        <Icon
                            className={styles.link__icon}
                            name="social_steam"
                        />
                        <div className={styles.link__title}>
                            {steamNickName}
                        </div>
                    </a>
                </div>
            </div>
            <div className={styles.total}>10-2-6</div>
            <div className={styles.total}>0.43</div>
            <div className={styles.total}>37% (4)</div>
        </div>
    );
};
