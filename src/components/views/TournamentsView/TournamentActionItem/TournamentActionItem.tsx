import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import cn from "classnames";
import { ICON_NAME } from "@/components/ui/Icon/Icon.library";
import styles from "./TournamentActionItem.module.scss";

interface TournamentActionItemProps {
    type: "SOLO" | "PARTY" | "TEAM";
}

export const TournamentActionItem = ({ type }: TournamentActionItemProps) => {
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
            <Icon className={styles.icon} name={icon} size={48} />
            <div className={styles.content}>
                <div className={styles.content__title}>{title}</div>
                <div className={styles.content__description}>{description}</div>
            </div>
            <Button
                buttonClassName={cn(styles.button, {
                    [styles.button__violet]:
                        type === "PARTY" || type === "TEAM",
                    [styles.button__green]: type === "SOLO",
                })}
                text="ИГРАТЬ СЕЙЧАС"
            />
        </div>
    );
};
