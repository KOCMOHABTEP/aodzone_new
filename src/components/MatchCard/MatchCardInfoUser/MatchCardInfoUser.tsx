import cn from "classnames";
import Avatar from "@/components/Avatar/Avatar";
import styles from "./MatchCardInfoUser.module.css";

interface MatchCardInfoUserProps {
    title: string;
    level: number;
    align: "left" | "right";
}

const MatchCardInfoUser = ({ title, level, align }: MatchCardInfoUserProps) => {
    return (
        <div className={styles.item}>
            <div
                className={cn(styles.itemPlayer, {
                    [styles.itemPlayerLeft]: align === "left",
                    [styles.itemPlayerRight]: align === "right",
                })}
            >
                <Avatar level={0} />
                <div className={styles.itemInfo}>
                    <div className={styles.itemInfoNickName}>{title}</div>
                    <div className={styles.itemInfoLevel}>Уровень {level}</div>
                </div>
            </div>
        </div>
    );
};
export default MatchCardInfoUser;
