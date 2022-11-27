import Button from "@/components/ui/Button/Button";
import ForumDetailAvatar from "@/layouts/Forum/ForumDetailView/ForumDetailAvatar/ForumDetailAvatar";
import { useState } from "react";
import Textarea from "@/components/Textarea/Textarea";
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
                    <ForumDetailItem
                        data="30.12.2021 15:45"
                        title="Очередное обновление другого ружья"
                        description="Очередное обновление, еще одно ружье, Еще одно обновление, еще одно ружье, еще одно"
                    />
                    <ForumDetailItem
                        data="30.12.2021 15:45"
                        title="Очередное обновление другого ружья"
                        description="Очередное обновление, еще одно ружье, Еще одно обновление, еще одно ружье, еще одно jvksn hdsbfgjhdskb gfkjgf"
                    />
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
                    <ForumDetailAvatar
                        title="ЛУПА"
                        messages="256 сообщений"
                        src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
                    />
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
