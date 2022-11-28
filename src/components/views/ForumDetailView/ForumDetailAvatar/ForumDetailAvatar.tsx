import styles from "./ForumDetailAvatar.module.scss";

interface ForumDetailAvatarProps {
    title: string;
    messages: string;
    src: string;
}

export const ForumDetailAvatar = ({
    title,
    messages,
    src,
}: ForumDetailAvatarProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <img className={styles.image__img} src={src} alt="logoUser" />
            </div>
            <div className={styles.content}>
                <div className={styles.content__title}>{title}</div>
                <div className={styles.content__description}>{messages}</div>
            </div>
        </div>
    );
};
