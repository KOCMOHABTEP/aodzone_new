import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Textarea } from "@/components/ui/Textarea";
import { ForumDetailAvatar } from "@/components/views/ForumDetailView/ForumDetailAvatar/ForumDetailAvatar";
import { ForumDetailItem } from "@/components/views/ForumDetailView/ForumDetailItem";
import styles from "./ForumDetailView.module.scss";

export const ForumDetailView = () => {
    const [userMessage, setUserMessage] = useState("");

    return (
        <div>
            <div className={styles.item}>
                <div className={styles.header}>
                    <div className={styles.header__title}>
                        Деталка темы форума
                    </div>
                    <div className={styles.list}>
                        <div className={styles.list__number}>1</div>
                        <div className={styles.list__number}>2</div>
                        <div className={styles.list__number}>3</div>
                        <div className={styles.list__number}>...</div>
                        <div className={styles.list__number}>4</div>
                        <div className={styles.image}>
                            <Icon
                                className={styles.image__img}
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
                <div className={styles.list}>
                    <div className={styles.list__number}>1</div>
                    <div className={styles.list__number}>2</div>
                    <div className={styles.list__number}>3</div>
                    <div className={styles.list__number}>...</div>
                    <div className={styles.list__number}>4</div>
                    <div className={styles.image}>
                        <Icon
                            className={styles.image__img}
                            name="arrow_right"
                            size={22}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.comment}>
                <div className={styles.comment__title}>Комментарии</div>
                <div className={styles.content}>
                    <ForumDetailAvatar
                        title="ЛУПА"
                        messages="256 сообщений"
                        src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
                    />
                    <div className={styles.textarea}>
                        <Textarea
                            label="Написать комментарий ..."
                            value={userMessage}
                            onChange={event =>
                                setUserMessage(event.target.value)
                            }
                        />
                        <div className={styles.button}>
                            <Button text="Добавить" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
