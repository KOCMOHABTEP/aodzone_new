import Avatar from "@components/Avatar/Avatar";
import Icon from "@components/Icon/Icon";
import cn from "classnames";
import { useState } from "react";
import styles from "./FriendsItem.module.css";

interface FriendsItemProps {
    nickName: string;
    level: number;
    online: string;
    label: boolean;
}

const FriendsItem = ({ nickName, level, online, label }: FriendsItemProps) => {
    const [activeMessage, setActiveMessage] = useState(label);

    const handleTabClick = () => {
        setActiveMessage(false);
    };

    return (
        <div
            onClick={handleTabClick}
            className={cn(styles.item, {
                [styles.itemActive]: activeMessage,
            })}
        >
            <div>
                <Avatar />
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemContentNickname}>{nickName}</div>
                <div className={styles.itemContentLevel}>Уровень {level}</div>
                <div className={styles.itemContentOnlineTime}>
                    Последний раз был в сети {online}
                </div>
            </div>
            <div className={styles.itemIcon}>
                <Icon name="comments" />
            </div>
        </div>
    );
};

export default FriendsItem;
