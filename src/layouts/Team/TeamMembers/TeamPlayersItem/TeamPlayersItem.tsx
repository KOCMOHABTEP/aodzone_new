import Avatar from "@/components/ui/Avatar/Avatar";
import styles from "./TeamPlayersItem.module.css";

interface TeamPlayersItemProps {
    img?: string;
    title: string;
    clanLeader?: boolean;
}

const TeamPlayersItem = ({ img, title, clanLeader }: TeamPlayersItemProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemImage}>
                <Avatar image={img} />
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemContentTitle}>{title}</div>
                {clanLeader && (
                    <div className={styles.itemContentAchievement}>Капитан</div>
                )}
            </div>
        </div>
    );
};

export default TeamPlayersItem;
