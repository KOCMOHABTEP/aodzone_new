import NotificationItem from "@layouts/Notification/NotificationItem/NotificationItem";
import styles from "./NotificationList.module.css";

const NotificationList = () => {
    return (
        <div>
            <div className={styles.notificationsTitle}>Все уведомления</div>
            <div>
                <NotificationItem
                    title="У вас новое сообщение"
                    data="24.05.2022 15:35"
                    read={false}
                />
                <NotificationItem
                    title="Новый ответ на форум"
                    data="28.05.2022 18:35"
                    read={true}
                    description="Описание"
                />
                <NotificationItem
                    title="У вас новое сообщение"
                    data="29.10.2022 15:35"
                    description="hgjkbhjksdblsjhl sjfhljhdljhfd dbfjsdbksdbsdk bfsjfbskjfbkjdfb bfjkfjadhfjldkgdhhafa  gfdgsgs hgjkbhjksdblsjhl sjfhljhdljhfd dbfjsdbksdbsdk bfsjfbskjfbkjdfb bfjkfjadhfjldk  gfdgsgs"
                    read={false}
                />
            </div>
        </div>
    );
};

export default NotificationList;
