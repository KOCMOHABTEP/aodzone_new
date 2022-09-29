import styles from "./MessageItem.module.css";

interface MessageItemProps {
    nickName: string;
    message: string;
}

const MessageItem = ({ nickName, message }: MessageItemProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemTitle}>{nickName}</div>
            <div className={styles.itemDescription}>{message}</div>
        </div>
    );
};

export default MessageItem;
