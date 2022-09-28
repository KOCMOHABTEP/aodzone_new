import styles from "./MessageItem.module.css";

const MessageItem = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemTitle}>КОСМОНАВТ</div>
            <div className={styles.itemDescription}>Сообщение</div>
        </div>
    );
};

export default MessageItem;
