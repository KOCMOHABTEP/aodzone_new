import cn from 'classnames';
import { useState } from 'react';
import styles from './TabBar.module.scss';

type TabBarItem = {
  label: string;
};

interface TabBarProps {
  tabs: TabBarItem[];
  onClick: (label: string) => void;
  selectedTab: string;
}

export const TabBar = ({ onClick, tabs, selectedTab }: TabBarProps) => {
  return (
    <div className={styles.bottom__left}>
      {tabs.map((item) => (
        <div
          key={item.label}
          onClick={() => onClick(item.label)}
          className={cn(styles.tabs, {
            [styles.tabs__active]: item.label === selectedTab,
          })}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};
