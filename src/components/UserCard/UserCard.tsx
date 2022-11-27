import Avatar from "@/components/Avatar/Avatar";
import Icon from "@/components/Icon/Icon";
import { useState } from "react";
import UserCardMenu from "@/components/UserCard/UserCardMenu/UserCardMenu";
import Link from "next/link";
import styles from "./UserCard.module.scss";

const UserCard = () => {
    const [userSettingsIsOpened, setUserSettingsIsOpened] = useState(false);

    const handleSelectItem = () => {
        setUserSettingsIsOpened(false);
    };

    return (
        <div className={styles.component}>
            <div className={styles.card}>
                <div className={styles.avatar}>
                    <Link href="/profile" passHref>
                        <a>
                            <Avatar />
                        </a>
                    </Link>
                </div>
                <div className={styles.content}>
                    <div className={styles.name}>KOCMOHABT</div>
                    <div className={styles.level}>Уровень 32</div>
                </div>
                <div className={styles.control}>
                    <div
                        className={styles.button}
                        onClick={() =>
                            setUserSettingsIsOpened(!userSettingsIsOpened)
                        }
                    >
                        {userSettingsIsOpened ? (
                            <Icon name="arrow_up" size={16} />
                        ) : (
                            <Icon name="arrow_down" size={16} />
                        )}
                    </div>
                </div>
            </div>
            {userSettingsIsOpened && (
                <UserCardMenu onSelectItem={handleSelectItem} />
            )}
        </div>
    );
};

export default UserCard;
