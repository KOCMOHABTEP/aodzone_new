import { Avatar } from "@/components/ui/Avatar";
import styles from "./TeamPlayersItem.module.scss";

interface TeamPlayersItemProps {
    img?: string;
    title: string;
    clanLeader?: boolean;
}

export const TeamPlayersItem = ({
    img,
    title,
    clanLeader,
}: TeamPlayersItemProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <Avatar image={img} />
            </div>
            <div className={styles.content}>
                <div className={styles.content__title}>{title}</div>
                {clanLeader && (
                    <div className={styles.content__achievement}>Капитан</div>
                )}
            </div>
        </div>
    );
};
