import { Avatar } from "@/components/ui/Avatar";
import { Icon } from "@/components/ui/Icon";
import cn from "classnames";
import { useState } from "react";
import styles from "./FriendsItem.module.scss";

interface FriendsItemProps {
    nickName: string;
    level: number;
    online: string;
    label: boolean;
}

export const FriendsItem = ({
    nickName,
    level,
    online,
    label,
}: FriendsItemProps) => {
    const [activeMessage, setActiveMessage] = useState(label);

    const handleTabClick = () => {
        setActiveMessage(false);
    };

    return (
        <div
            onClick={handleTabClick}
            className={cn(styles.item, {
                [styles.item__active]: activeMessage,
            })}
        >
            <div>
                <Avatar />
            </div>
            <div className={styles.content}>
                <div className={styles.content__name}>{nickName}</div>
                <div className={styles.content__level}>Уровень {level}</div>
                <div className={styles.content__time}>
                    Последний раз был в сети {online}
                </div>
            </div>
            <div className={styles.icon}>
                <Icon name="comments" />
            </div>
        </div>
    );
};
