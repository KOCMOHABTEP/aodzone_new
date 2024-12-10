import { Button } from '@/components/ui/Button';
import { MessageItem } from '@/components/ui/Message/MessageItem';
import { useState } from 'react';
import { Textarea } from '@/components/ui/Textarea';
import styles from './Message.module.scss';

interface MessageProps {
  nickName: string;
  onlineTime: string;
}

export const Message = ({ nickName, onlineTime }: MessageProps) => {
  const [userMessage, setUserMessage] = useState('');

  const handleUserMessageChange = (event) => {
    setUserMessage(event.target.value);
  };
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <div className={styles.title}>{nickName}</div>
        <div className={styles.description}>{onlineTime}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.messages}>
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
      <div className={styles.input}>
        <div className={styles.textArea}>
          <Textarea
            label="Написать сообщение.."
            value={userMessage}
            onChange={handleUserMessageChange}
          />
        </div>
        <div>
          <Button buttonClassName={styles.btn} text="Отправить" />
        </div>
      </div>
    </div>
  );
};
