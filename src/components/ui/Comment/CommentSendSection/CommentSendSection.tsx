import { AvatarDetail } from '@/components/ui/Avatar/AvatarDetail';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import styles from './CommentSendSection.module.scss';

export const CommentSendSection = () => {
  const [userMessage, setUserMessage] = useState('');

  return (
    <div className={styles.item}>
      <div className={styles.item__title}>Комментарии</div>
      <div className={styles.content}>
        <AvatarDetail
          title="ЛУПА"
          messages="256 сообщений"
          src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
        />
        <div className={styles.textarea}>
          <Textarea
            label="Написать комментарий ..."
            value={userMessage}
            onChange={(event) => setUserMessage(event.target.value)}
          />
          <div className={styles.button}>
            <Button text="Добавить" />
          </div>
        </div>
      </div>
    </div>
  );
};
