import { Input } from '@/components/ui/Input';
import { Dropdown } from '@/components/ui/Dropdown';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './MatchesAddView.module.scss';
import { InputDatapicker } from '../../ui/Input/InputDatapicker';
import { Textarea } from '../../ui/Textarea';

export const MatchesAddView = () => {
  const [dropdownType, setDropdownType] = useState('');
  const [matchDate, setMatchDate] = useState(null);

  const matchForm = useForm({
    mode: 'onChange',
    defaultValues: {
      game: '',
      rival: '',
    },
  });

  const handleMatchDate = (data) => {
    setMatchDate(data);
  };

  const dropdownMatchType = [
    {
      label: 'Одиночная игра',
      value: 'RU',
    },
    {
      label: 'Коммандная игра ',
      value: 'TR',
    },
  ];

  return (
    <div className={styles.item}>
      <div className={styles.title}>Заполнить информацию о матче</div>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.wrapperContent}>
            <div className={styles.profileTitle}>Основная информация</div>
            <div className={styles.block}>
              <div className={styles.input}>
                <Input label="Название игры" {...matchForm.register('game')} />
              </div>
              <div className={styles.input}>
                <Dropdown
                  name="Выберите матч"
                  label="Выберите матч"
                  options={dropdownMatchType}
                  onSelect={({ option }) => setDropdownType(option.value)}
                />
              </div>
              <div className={styles.input}>
                <InputDatapicker
                  showPopperArrow={true}
                  selected={matchDate}
                  label="Дата матча"
                  dateFormat="dd.MM.yyyy"
                  onChange={handleMatchDate}
                  name="matchDate"
                />
              </div>
              <div className={styles.input}>
                <Input label="Соперник" {...matchForm.register('rival')} />
              </div>
            </div>
            <div className={styles.wrapperContent}>
              <div className={styles.profileTitle}>
                Информация по итогу матча
              </div>
              <div className={styles.block}>
                <div className={styles.input}>
                  <Input label="Итог матча" {...matchForm.register('game')} />
                </div>
                <div className={styles.input}>
                  <Input label="Победитель" {...matchForm.register('game')} />
                </div>
                <div className={styles.input}>
                  <Input label="Итог матча" {...matchForm.register('game')} />
                </div>
              </div>
              <div className={styles.block}>
                <div className={styles.input}>
                  <Textarea label="Комментарии к матчу" value="" onChange="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
