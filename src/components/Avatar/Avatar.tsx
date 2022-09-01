import cn from "classnames";
import styles from "./Avatar.module.scss";

interface AvatarProps {
    level?: number;
    size?: "large";
    image?: string;
    online?: boolean;
}

const Avatar = ({
    level,
    size,
    image = "/img/avatar_test.jpg",
    online = true,
}: AvatarProps) => {
    const avatarOnlineImgClassName = cn(styles.avatarImg, {
        [styles.avatarImgOffline]: !online,
    });
    const avatarOnlineIndicatorClassName = cn(styles.avatarImageIndicator, {
        [styles.avatarImageIndicatorOnline]: online,
    });

    return (
        <div
            className={cn(styles.avatar, {
                [styles.avatarLarge]: size === "large",
            })}
        >
            {level ? <div className={styles.level}>{level}</div> : null}
            <div className={avatarOnlineIndicatorClassName} />
            <div className={styles.avatarImage}>
                <img
                    src={image}
                    alt="avatar"
                    className={avatarOnlineImgClassName}
                />
            </div>
        </div>
    );
};

export default Avatar;
