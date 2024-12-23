import { StreamFilterIAll } from '@/components/views/StreamView/StreamsFilter/StreamFilterIAll';
import { ReactNode, useState } from 'react';
import cn from 'classnames';
import { TabBar } from '@/components/ui/Tabbar';
import styles from './StreamsFilter.module.scss';

interface StreamsFilterProps {
  children?: ReactNode;
}

export const StreamsFilter = ({ children }: StreamsFilterProps) => {
  const [streamTabValue, setStreamTabValue] = useState('Популярные стримы');

  const streamsTabList = [
    {
      label: 'Популярные стримы',
    },
    {
      label: 'Онлайн',
    },
    {
      label: 'Предстоящие',
    },
    {
      label: 'Завершенные',
    },
  ];

  const handleStreamTabClick = (label) => {
    setStreamTabValue(label);
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__right}>
        <TabBar
          tabs={streamsTabList}
          selectedTab={streamTabValue}
          onClick={handleStreamTabClick}
        />
      </div>
      <div className={styles.item__left}>{children}</div>
    </div>
  );
};
