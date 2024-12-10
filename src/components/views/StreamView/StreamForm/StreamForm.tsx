import { Modal } from '@/components/ui/Modal';
import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import styles from './StreamForm.module.scss';

interface StreamFormProps {
  streamFormVisible: boolean;
  handleCloseTeamModal: () => void;
}

export const StreamForm = ({
  streamFormVisible,
  handleCloseTeamModal,
}: StreamFormProps) => {
  const [formData, setFormData] = useState({
    streamLink: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <Modal
      title="Добавить стрим"
      description="Добавь свой прошедший, или запланированный стрим"
      visibility={streamFormVisible}
      onClose={handleCloseTeamModal}
    >
      <>
        <div className={styles.item}>
          <Input
            name="streamLink"
            label="Ссылка на стрим Twitch"
            value={formData.streamLink}
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.button}>
          <Button buttonClassName={styles.button__btn} text="Добавить стрим" />
        </div>
      </>
    </Modal>
  );
};
