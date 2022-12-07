import cn from "classnames";
import styles from "./AvatarTeam.module.scss";

interface AvatarTeamProps {
    image?: string;
    className?: string;
}

export const AvatarTeam = ({
    className,
    image = "https://www.meme-arsenal.com/memes/9018adbc4dc80835becaa3baebd84ed9.jpg",
}: AvatarTeamProps) => {
    return (
        <div className={cn(styles.avatar, className)}>
            <div className={styles.image}>
                <img src={image} alt="avatarTeam" className={styles.imageImg} />
            </div>
        </div>
    );
};
