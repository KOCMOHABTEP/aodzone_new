import { ReactNode } from 'react';
import styles from './Widget.module.scss';

interface WidgetProps {
  title: string;
  children?: ReactNode;
}

export const Widget = ({ title, children }: WidgetProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
