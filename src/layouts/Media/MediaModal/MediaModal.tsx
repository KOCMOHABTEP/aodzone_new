import Icon from "@components/Icon/Icon";
import Button from "@components/Button/Button";
import { useState } from "react";
import Textarea from "@components/Textarea/Textarea";
import styles from "./MediaModal.module.css";

interface MediaModalProps {
    src: string;
    stats: {
        like: number;
        comments: number;
        views: number;
    };
}

const MediaModal = ({ stats, src }: MediaModalProps) => {
    const [userMessage, setUserMessage] = useState("");

    return (
        <div className={styles.item}>
            <div className={styles.itemModalClose}>
                <Icon name="xmark" size={16} />
            </div>
            <div className={styles.itemImage}>
                <img
                    className={styles.itemImg}
                    src={src}
                    alt="картинка профиля"
                />
            </div>
            <div className={styles.itemInfo}>
                <div className={styles.itemIconContainer}>
                    <Icon
                        className={styles.itemInfoIcon}
                        name="like"
                        size={16}
                    />
                    <span>{stats.like}</span>
                </div>
                <div className={styles.itemIconContainer}>
                    <Icon
                        className={styles.itemInfoIcon}
                        name="views"
                        size={16}
                    />
                    <span>{stats.views}</span>
                </div>
                <div className={styles.itemIconContainer}>
                    <Icon
                        className={styles.itemInfoIcon}
                        name="comments"
                        size={16}
                    />
                    <span>{stats.comments}</span>
                </div>
            </div>
            <div>Прошлые комментарии</div>
            <div>
                <div className={styles.itemTextareaContainer}>
                    <div className={styles.itemTextareaPlaceholder}>
                        Написать комментарий...
                    </div>
                    <Textarea
                        label="Написать комментарий..."
                        value={userMessage}
                        onChange={event => setUserMessage(event.target.value)}
                    />
                </div>
                <div className={styles.itemButton}>
                    <Button text="Добавить" />
                </div>
            </div>
        </div>
    );
};

export default MediaModal;
