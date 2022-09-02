import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import ForumDetailAvatar from "@layouts/Forum/ForumDetail/ForumDetailAvatar/ForumDetailAvatar";
import { useState } from "react";
import Textarea from "@components/Textarea/Textarea";
import styles from "./ForumDetail.module.css";
import ForumDetailItem from "./ForumDetailItem/ForumDetailItem";
import Icon from "../../../components/Icon/Icon";

const ForumDetail = () => {
    const [userMessage, setUserMessage] = useState("");

    return (
        <div>
            <div className={styles.forumDetail}>
                <div className={styles.forumDetailHead}>
                    <div className={styles.forumDetailTitle}>
                        Деталка темы форума
                    </div>
                    <div className={styles.forumDetailList}>
                        <div className={styles.forumDetailListNumber}>1</div>
                        <div className={styles.forumDetailListNumber}>2</div>
                        <div className={styles.forumDetailListNumber}>3</div>
                        <div className={styles.forumDetailListDots}>...</div>
                        <div className={styles.forumDetailListNumber}>4</div>
                        <div className={styles.forumDetailListImage}>
                            <Icon
                                className={styles.forumDetailListImg}
                                name="arrow_right"
                                size={22}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <ForumDetailItem />
                    <ForumDetailItem />
                </div>
                <div className={styles.forumDetailList}>
                    <div className={styles.forumDetailListNumber}>1</div>
                    <div className={styles.forumDetailListNumber}>2</div>
                    <div className={styles.forumDetailListNumber}>3</div>
                    <div className={styles.forumDetailListDots}>...</div>
                    <div className={styles.forumDetailListNumber}>4</div>
                    <div className={styles.forumDetailListImage}>
                        <Icon
                            className={styles.forumDetailListImg}
                            name="arrow_right"
                            size={22}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.forumDetailComment}>
                <div className={styles.forumDetailCommentTitle}>
                    Комментарии
                </div>
                <div className={styles.forumDetailCommentContent}>
                    <ForumDetailAvatar />
                    <div className={styles.forumDetailTextarea}>
                        <Textarea
                            label="Написать комментарий ..."
                            value={userMessage}
                            onChange={event =>
                                setUserMessage(event.target.value)
                            }
                        />
                        <div className={styles.forumDetailButtonContainer}>
                            <Button
                                buttonClassName={
                                    styles.forumDetailCommentButton
                                }
                                text="Добавить"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForumDetail;
