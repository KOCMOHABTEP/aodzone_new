import Icon from "@/components/Icon/Icon";
import UserCard from "@/components/UserCard/UserCard";
import HeaderActionMenu from "@/layouts/Header/HeaderActionMenu/HeaderActionMenu";
import { useState } from "react";
import HeaderNotification from "@/layouts/Header/HeaderNotification/HeaderNotification";
import styles from "./Header.module.css";

export const Header = () => {
    const [menuNotificationsVisible, setMenuNotificationsVisible] =
        useState(false);
    const [menuFriendsVisible, setMenuFriendsVisible] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.controls}>
                    <div
                        className={styles.controlsItem}
                        onClick={() =>
                            setMenuNotificationsVisible(
                                !menuNotificationsVisible
                            )
                        }
                    >
                        <Icon name="notification" />
                        <div className={styles.controlsActivities}>1</div>
                        <HeaderActionMenu
                            visible={menuNotificationsVisible}
                            title="Уведомления"
                        >
                            <HeaderNotification
                                title="Вас приглашают на игру"
                                data="22.09.2022 16:45"
                                read={false}
                            />
                            <HeaderNotification
                                title="У вас новое сообщение"
                                data="22.09.2022 16:45"
                                description="Описание"
                                read={true}
                            />
                            <HeaderNotification
                                title="Новый ответ на форум"
                                data="22.09.2022 16:45"
                                read={true}
                            />
                        </HeaderActionMenu>
                    </div>
                    <a href="/friends">
                        <div className={styles.controlsItem}>
                            <Icon name="comments" />
                            <div className={styles.controlsActivities}>2</div>
                        </div>
                    </a>
                </div>
                <UserCard />
            </div>
        </div>
    );
};
