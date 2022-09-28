import Button from "@components/Button/Button";
import MessageItem from "@layouts/Message/MessageItem/MessageItem";
import Textarea from "@components/Textarea/Textarea";
import { useState } from "react";
import styles from "./Message.module.css";

const Message = () => {
    const [userMessage, setUserMessage] = useState("");

    const handleUserMessageChange = event => {
        setUserMessage(event.target.value);
    };
    return (
        <div className={styles.item}>
            <div className={styles.itemHeader}>
                <div className={styles.itemHeaderTitle}>Ник</div>
                <div className={styles.itemHeaderDescription}>
                    Был в сети 10 минут назад
                </div>
            </div>
            <div className={styles.itemMessagesContainer}>
                <div className={styles.itemMessages}>
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                </div>
            </div>
            <div className={styles.itemInputButton}>
                <div className={styles.itemInputTextArea}>
                    <Textarea
                        label="Написать сообщение.."
                        value={userMessage}
                        onChange={handleUserMessageChange}
                    />
                </div>
                <div>
                    <Button
                        buttonClassName={styles.itemInputButtonBtn}
                        text="Отправить"
                    />
                </div>
            </div>
        </div>
    );
};

export default Message;
