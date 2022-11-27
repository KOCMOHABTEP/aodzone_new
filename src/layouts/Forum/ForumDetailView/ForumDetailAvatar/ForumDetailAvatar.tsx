import styles from "./ForumDetailAvatar.module.css";

interface ForumDetailAvatarProps {
    title: string;
    messages: string;
    src: string;
}

const ForumDetailAvatar = ({
    title,
    messages,
    src,
}: ForumDetailAvatarProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemImage}>
                <img className={styles.itemImageImg} src={src} alt="logoUser" />
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemContentTitle}>{title}</div>
                <div className={styles.itemContentDescription}>{messages}</div>
            </div>
        </div>
    );
};

export default ForumDetailAvatar;
