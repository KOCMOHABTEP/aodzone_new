import NotificationItem from "@layouts/Notification/NotificationItem/NotificationItem";
import styles from "./NotificationList.module.css";

const NotificationList = () => {
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

export default NotificationList;
