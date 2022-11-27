import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import cn from "classnames";
import { ICON_NAME } from "@/components/Icon/Icon.library";
import styles from "./TournamentActionItem.module.css";

interface TournamentActionItemProps {
    type: "SOLO" | "PARTY" | "TEAM";
}

const TournamentActionItem = ({ type }: TournamentActionItemProps) => {
    let icon: ICON_NAME = "matches";
    let title = "";
    let description = "";

    if (type === "TEAM") {
        icon = "team";
        title = "ИГРАТЬ С КОМАНДОЙ";
        description = "Играй вместе с командой";
    }

    if (type === "SOLO") {
        icon = "profile";
        title = "ОДИНОЧНАЯ ИГРА";
        description = "Играй один без команды";
    }

    if (type === "PARTY") {
        icon = "friends";
        title = "ИГРАТЬ ПАРТИЮ";
        description = "Играй несколько партий сразу";
    }

    return (
        <div className={styles.item}>
            <Icon className={styles.itemIcon} name={icon} size={48} />
            <div className={styles.itemContent}>
                <div className={styles.itemContentTitle}>{title}</div>
                <div className={styles.itemContentDescription}>
                    {description}
                </div>
            </div>
            <Button
                buttonClassName={cn(styles.itemContentButton, {
                    [styles.itemContentButtonViolet]:
                        type === "PARTY" || type === "TEAM",
                    [styles.itemContentButtonGreen]: type === "SOLO",
                })}
                text="ИГРАТЬ СЕЙЧАС"
            />
        </div>
    );
};

export default TournamentActionItem;
