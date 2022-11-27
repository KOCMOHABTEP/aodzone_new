import Icon from "@/components/Icon/Icon";
import Avatar from "@/components/Avatar/Avatar";
import styles from "./UserTeamItem.module.css";

interface UserTeamItemProps {
    title: string;
    level: number;
    src: string;
    steamNickName: string;
}

const UserTeamItem = ({
    title,
    level,
    src,
    steamNickName,
}: UserTeamItemProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemContentUser}>
                <div className={styles.itemContentLogoUser}>
                    <Avatar image={src} />
                </div>
                <div>
                    <div className={styles.itemContentInfo}>
                        <div className={styles.itemContentInfoTitle}>
                            {title}
                        </div>
                        <div className={styles.itemContentInfoLevel}>
                            LVL {level}
                        </div>
                        <Icon
                            className={styles.itemContentIcon}
                            name="profile"
                        />
                    </div>
                    <a href="#" className={styles.itemLinkSteam}>
                        <Icon
                            className={styles.itemLinkSteamIcon}
                            name="social_steam"
                        />
                        <div className={styles.itemLinkSteamIconTitle}>
                            {steamNickName}
                        </div>
                    </a>
                </div>
            </div>
            <div className={styles.itemTotal}>10-2-6</div>
            <div className={styles.itemTotal}>0.43</div>
            <div className={styles.itemTotal}>37% (4)</div>
        </div>
    );
};

export default UserTeamItem;
