import styles from './MessageItem.module.scss';

interface MessageItemProps {
  nickName: string;
  message: string;
}

export const MessageItem = ({ nickName, message }: MessageItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>{nickName}</div>
      <div className={styles.description}>{message}</div>
    </div>
  );
};
