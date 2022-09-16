import NotificationItem from "@layouts/Notification/NotificationItem/NotificationItem";
import styles from "./NotificationPage.module.css";

const NotificationPage = () => {
    return (
        <div>
            <div>ВСЕ УВЕДОМЛЕНИЯ</div>
            <div>
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
            </div>
        </div>
    );
};

export default NotificationPage;
