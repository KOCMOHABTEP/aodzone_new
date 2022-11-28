import cn from "classnames";
import styles from "./Avatar.module.scss";

interface AvatarProps {
    level?: number;
    size?: "large";
    image?: string;
    online?: boolean;
}

export const Avatar = ({
    level,
    size,
    image = "/img/avatar_test.jpg",
    online = true,
}: AvatarProps) => {
    const avatarOnlineImgClassName = cn(styles.avatar__img, {
        [styles.avatar__img__offline]: !online,
    });
    const avatarOnlineIndicatorClassName = cn(styles.indicator, {
        [styles.indicator__online]: online,
    });

    return (
        <div
            className={cn(styles.avatar, {
                [styles.avatar__large]: size === "large",
            })}
        >
            {level ? <div className={styles.level}>{level}</div> : null}
            <div className={avatarOnlineIndicatorClassName} />
            <div className={styles.image}>
                <img
                    src={image}
                    alt="avatar"
                    className={avatarOnlineImgClassName}
                />
            </div>
        </div>
    );
};
