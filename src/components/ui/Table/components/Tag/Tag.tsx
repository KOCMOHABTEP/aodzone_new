import { AvatarTeam } from "@/components/ui/Avatar/AvatarTeam";
import styles from "./Tag.module.scss";

interface TagProps {
    tag: string;
    image?: string;
}

export const Tag = ({ tag, image }: TagProps) => {
    return (
        <div className={styles.wrapper}>
            <AvatarTeam image={image} />
            <div className={styles.title}>{tag}</div>
        </div>
    );
};
