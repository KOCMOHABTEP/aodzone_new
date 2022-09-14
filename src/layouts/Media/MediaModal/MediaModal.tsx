import Icon from "@components/Icon/Icon";
import Button from "@components/Button/Button";
import { useEffect, useState } from "react";
import Textarea from "@components/Textarea/Textarea";
import MediaComment from "@layouts/Media/MediaComment/MediaComment";
import ReactDOM from "react-dom";
import cn from "classnames";
import styles from "./MediaModal.module.css";

interface MediaModalProps {
    src: string;
    stats: {
        like: number;
        comments: number;
        views: number;
    };
    onClose: () => void;
}

const MediaModal = ({ stats, src, onClose }: MediaModalProps) => {
    const [userMessage, setUserMessage] = useState("");
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const MediaModalContent = () => {
        return (
            <div className={styles.modalOverlay}>
                <div className={styles.item}>
                    <div className={styles.itemModalClose} onClick={onClose}>
                        <Icon name="xmark" size={16} />
                    </div>
                    <div className={styles.itemContent}>
                        <div
                            className={cn(
                                styles.itemColumn,
                                styles.itemColumnLeft
                            )}
                        >
                            <div className={styles.itemImage}>
                                <img
                                    className={styles.itemImageImg}
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
                        </div>
                        <div
                            className={cn(
                                styles.itemColumn,
                                styles.itemColumnRight
                            )}
                        >
                            <div className={styles.itemComments}>
                                <MediaComment />
                                <MediaComment />
                            </div>
                            <div className={styles.itemTextareaContainer}>
                                <div className={styles.itemTextareaPlaceholder}>
                                    Написать комментарий...
                                </div>
                                <Textarea
                                    label="Написать комментарий..."
                                    value={userMessage}
                                    onChange={event =>
                                        setUserMessage(event.target.value)
                                    }
                                />
                            </div>
                            <div className={styles.itemButton}>
                                <Button text="Добавить" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    if (isBrowser) {
        return ReactDOM.createPortal(
            <MediaModalContent />,
            document.getElementById("modal-root")
        );
    }
    return null;
};

export default MediaModal;
