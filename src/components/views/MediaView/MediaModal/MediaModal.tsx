import { Icon } from "@/components/ui/Icon";
import { MediaComment } from "@/components/views/MediaView/MediaComment";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

import styles from "./MediaModal.module.scss";

interface MediaModalProps {
    src: string;
    stats: {
        like: number;
        comments: number;
        views: number;
    };
    onClose: () => void;
}

export const MediaModal = ({ stats, src, onClose }: MediaModalProps) => {
    const [userMessage, setUserMessage] = useState("");
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const MediaModalContent = () => {
        return (
            <div className={styles.modal}>
                <div className={styles.item}>
                    <div className={styles.item__close} onClick={onClose}>
                        <Icon name="xmark" size={16} />
                    </div>
                    <div className={styles.content}>
                        <div className={cn(styles.column, styles.column__left)}>
                            <div className={styles.image}>
                                <img
                                    className={styles.image__img}
                                    src={src}
                                    alt="картинка профиля"
                                />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.info__container}>
                                    <Icon
                                        className={styles.info__icon}
                                        name="like"
                                        size={16}
                                    />
                                    <span>{stats.like}</span>
                                </div>
                                <div className={styles.info__container}>
                                    <Icon
                                        className={styles.info__icon}
                                        name="views"
                                        size={16}
                                    />
                                    <span>{stats.views}</span>
                                </div>
                                <div className={styles.info__container}>
                                    <Icon
                                        className={styles.info__icon}
                                        name="comments"
                                        size={16}
                                    />
                                    <span>{stats.comments}</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={cn(styles.column, styles.column__right)}
                        >
                            <div className={styles.itemComments}>
                                <MediaComment />
                                <MediaComment />
                            </div>
                            <div className={styles.wrapper}>
                                <div className={styles.placeholder}>
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
                            <div className={styles.button}>
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
