import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import styles from './FormDescription.module.scss';

interface FormDescriptionProps {
  descriptionFormVisible: boolean;
  handleCloseDescriptionForm: () => void;
}

export const FormDescription = ({
  descriptionFormVisible,
  handleCloseDescriptionForm,
}: FormDescriptionProps) => {
  const [formData, setFormData] = useState({
    aboutMeLocation: '',
    aboutMeLocationCity: '',
    aboutMeDataBDay: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Modal
        title="ОБО МНЕ"
        description="Заполни информацию о себе"
        visibility={descriptionFormVisible}
        onClose={handleCloseDescriptionForm}
      >
        <div className={styles.input}>
          <Input
            name="aboutMeLocation"
            label="Страна"
            value={formData.aboutMeLocation}
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.input}>
          <Input
            name="aboutMeLocationCity"
            label="Город"
            value={formData.aboutMeLocationCity}
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.input}>
          <Input
            name="aboutMeDataBDay"
            label="Дата рождения"
            value={formData.aboutMeDataBDay}
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.button}>
          <Button text="Добавить" />
        </div>
      </Modal>
    </>
  );
};
