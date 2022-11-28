import { Button } from "@/components/ui/Button";
import MessageItem from "@/layouts/Message/MessageItem/MessageItem";

import { useState } from "react";
import { Textarea } from "@/components/ui/Textarea";
import styles from "./Message.module.css";

interface MessageProps {
    nickName: string;
    onlineTime: string;
}

const Message = ({ nickName, onlineTime }: MessageProps) => {
    const [userMessage, setUserMessage] = useState("");

    const handleUserMessageChange = event => {
        setUserMessage(event.target.value);
    };
    return (
        <div className={styles.item}>
            <div className={styles.itemHeader}>
                <div className={styles.itemHeaderTitle}>{nickName}</div>
                <div className={styles.itemHeaderDescription}>{onlineTime}</div>
            </div>
            <div className={styles.itemMessagesContainer}>
                <div className={styles.itemMessages}>
                    <MessageItem nickName="КОСМОНАВТ" message="Заходи в игру" />
                    <MessageItem nickName="ЛУПА" message="Заходи в игру" />
                    <MessageItem nickName="КОСМОНАВТ" message="Заходи в игру" />
                    <MessageItem nickName="ЛУПА" message="Заходи в игру" />
                    <MessageItem nickName="КОСМОНАВТ" message="Заходи в игру" />
                    <MessageItem nickName="ЛУПА" message="Заходи в игру" />
                    <MessageItem nickName="КОСМОНАВТ" message="Заходи в игру" />
                    <MessageItem nickName="КОСМОНАВТ" message="Заходи в игру" />
                    <MessageItem nickName="КОСМОНАВТ" message="Заходи в игру" />
                    <MessageItem nickName="ЛУПА" message="Заходи в игру" />
                    <MessageItem
                        nickName="КОСМОНАВТ"
                        message="Заходи в игру по ссылке -https://www.google.com/"
                    />
                    <MessageItem nickName="КОСМОНАВТ" message="Заходи в игру" />
                    <MessageItem nickName="ЛУПА" message="Заходи в игру" />
                    <MessageItem nickName="КОСМОНАВТ" message="Заходи в игру" />
                    <MessageItem nickName="КОСМОНАВТ" message="Заходи в игру" />
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
