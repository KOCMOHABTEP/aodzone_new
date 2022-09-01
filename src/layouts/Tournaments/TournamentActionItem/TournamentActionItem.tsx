import Button from "@components/Button/Button";
import styles from "./TournamentActionItem.module.css";
import Icon from "@components/Icon/Icon";
import cn from "classnames";
import { ICON_NAME } from "@components/Icon/Icon.library";

interface TournamentActionItemProps {
    type: "SOLO" | "PARTY" | "TEAM";
}

const TournamentActionItem = ({ type }: TournamentActionItemProps) => {
    let icon: ICON_NAME = "matches";
    let title = "";

    if (type === "TEAM") {
        icon = "team";
        title = "PLAY WITH TEAM";
    }

    if (type === "SOLO") {
        icon = "profile";
        title = "PLAY AS SOLO";
    }

    if (type === "PARTY") {
        icon = "friends";
        title = "PLAY WITH PARTY";
    }

    return (
        <div className={styles.item}>
            <Icon className={styles.itemIcon} name={icon} size={48} />
            <div className={styles.itemContent}>
                <div className={styles.itemContentTitle}>{title}</div>
                <div className={styles.itemContentCaption}>
                    Lorem isput dolor sit arnet
                </div>
            </div>
            <Button
                buttonClassName={cn(styles.itemContentButton, {
                    [styles.itemContentButtonViolet]:
                        type === "PARTY" || type === "TEAM",
                    [styles.itemContentButtonGreen]: type === "SOLO",
                })}
                text="PLAY NOW"
            />
        </div>
    );
};

export default TournamentActionItem;
