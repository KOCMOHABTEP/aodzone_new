import cn from "classnames";
import styles from "./Avatar.module.scss";

interface AvatarProps {
    level?: number;
    size?: number;
    image?: string;
    online?: boolean;
    renderOnlineIndicator?: boolean;
    type?: "user" | "team";
}

export const Avatar = ({
    level,
    size,
    image = "/img/avatar_test.jpg",
    online,
    renderOnlineIndicator,
}: AvatarProps) => {
    const avatarOnlineImgClassName = cn(styles.avatar__img, {
        [styles.avatar__img__offline]: renderOnlineIndicator && !online,
    });
    const avatarOnlineIndicatorClassName = cn(styles.indicator, {
        [styles.indicator__online]: online,
    });

    const dimensions = {
        avatar: { width: size, height: size },
        border: { width: size + 8, height: size + 8 },
        image: { width: size, height: size },
    };

    return (
        <div className={styles.avatar} style={dimensions.avatar}>
            <div
                className={styles.avatar__bordered}
                style={dimensions.border}
            />
            {level ? <div className={styles.level}>{level}</div> : null}
            {renderOnlineIndicator && (
                <div className={avatarOnlineIndicatorClassName} />
            )}
            <div className={styles.image} style={dimensions.image}>
                <img
                    src={image}
                    alt="avatar"
                    className={avatarOnlineImgClassName}
                />
            </div>
        </div>
    );
};
